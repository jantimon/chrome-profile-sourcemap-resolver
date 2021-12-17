/// @ts-check
const sourceMapResolve = require("source-map-resolve");
const { SourceMapConsumer } = require("source-map");
const fetch = require("node-fetch");
const https = require("https");
const path = require("path");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const emptyMap = '{"version":3,"sources":[],"names":[],"mappings":"","sourcesContent":[]}';

/**
 * Fetches the given url result and returns the body content
 *
 * @param {string} url
 * @returns {Promise<string>}
 */
const fetcher = async (url) => {
  const request = await fetch(url, { agent });
  const content = await request.text();
  return content;
};

/**
 * Returns the resolved sourcemap for the given url
 * @param {string} url
 * @param {(url: string) => Promise<string>} urlLoader
 *
 * @returns {Promise<undefined | { map: import("source-map").RawSourceMap }>}
 */
async function getSourceMap(url, urlLoader) {
  const content = await urlLoader(url);
  if (!content) {
    return;
  }
  return new Promise((resolve, reject) => {
    sourceMapResolve.resolve(
      content,
      url,
      async (sourceMapUrl, callback) => {
        // Download only .map files
        if (/\.map$/.test(sourceMapUrl) === false) {
          return callback(null, emptyMap);
        }
        let mapContent = "";
        try {
          mapContent = await urlLoader(sourceMapUrl);
        } catch (e) {
          return callback(e);
        }
        callback(null, mapContent || emptyMap);
      },
      (error, result) => {
        if (error) {
          reject(error);
        }
        if (!result || !result.map) {
          return resolve(undefined);
        }
        result.map.sourcesContent = result.sourcesContent;
        resolve(result);
      }
    );
  });
}

/**
 * Resolves the original code location using the files sourcemap
 *
 * @param {string} url
 * @param {{line: number, column: number}[]} locations 
 * @param {(url: string) => Promise<string>} urlLoader
 */
const resolveOriginalLocations = async (url, locations, urlLoader = fetcher) => {
  /** @type {{source: string, line: number, column: number, name: string}[]} */
  let resolvedLocations = [];
  if (locations.length === 0) {
    return resolvedLocations;
  }
  const { map } = (await getSourceMap(url, urlLoader)) || { map: undefined };
  if (!map) {
    return resolvedLocations;
  }
  await SourceMapConsumer.with(map, null, async function (consumer) {
    const sourceRoot =
      map.sourceRoot && /\/$/.test(map.sourceRoot) === false
        ? map.sourceRoot + "/"
        : map.sourceRoot || "";

    locations.forEach(({ column, line }) => {
      const originalPosition = consumer.originalPositionFor({
        line: line || 1,
        column: Math.max(0, column - 1),
      });
      let source = originalPosition.source || "";
      const isRelative = source.startsWith("..");
      if (sourceRoot && source.startsWith(sourceRoot)) {
        source = source.substring(sourceRoot.length);
      }
      if (isRelative) {
        source = path.resolve(path.dirname(url), source);
      }
      resolvedLocations.push({
        ...originalPosition,
        source,
      });
    });
  });

  return resolvedLocations;
};

module.exports = { resolveOriginalLocations };
