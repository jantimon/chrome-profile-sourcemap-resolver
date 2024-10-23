/// @ts-check
import sourceMapResolve from "source-map-resolve";
import { SourceMapConsumer } from "source-map";
import fetch from "node-fetch";
import https from "https";
import path from "path";

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
  const isomorphicFetch = typeof fetch === "function" ? fetch: (await import("node-fetch")).default;
  const request = await isomorphicFetch(url, { agent });
  const content = await request.text();
  return content;
};

/**
 * Returns the resolved sourcemap for the given url
 * @param {string} url
 * @param {(url: string) => Promise<string>} [fileLoader]
 *
 * @returns {Promise<undefined | { map: import("source-map").RawSourceMap }>}
 */
async function getSourceMap(url, fileLoader) {
  /** @param {string} assetUrl */
  const urlLoader = async (assetUrl) => {
    if (/data\:[^,]*base64,/.test(url)) {
      return atob(url.replace(/data\:[^,]*base64,/, ''));
    }
    if (url.startsWith("//") || /(https?|ftp|file)\:\/\//.test(url) ) {
      return fetcher(assetUrl);
    }
    if (fileLoader) {
      return fileLoader(assetUrl);
    }
    console.warn(`Could not resolve "${url}".`);
    return "";
  };
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
 * @param {(url: string) => Promise<string>} [fileLoader]
 */
export const resolveOriginalLocations = async (url, locations, fileLoader) => {
  /** @type {{source: string, line: number, column: number, name: string}[]} */
  let resolvedLocations = [];
  if (locations.length === 0) {
    return resolvedLocations;
  }
  const { map } = (await getSourceMap(url, fileLoader)) || { map: undefined };
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
        line: (line ?? 0) + 1,
        column: column ?? 0,
      });
      let source = originalPosition.source || "";
      const isRelative = source.startsWith("..");
      if (sourceRoot && source.startsWith(sourceRoot)) {
        source = source.substring(sourceRoot.length);
      }
      if (isRelative) {
        source = path.resolve(path.dirname(url), source);
      }
      originalPosition.line = originalPosition.line == null ? null : originalPosition.line -1
      resolvedLocations.push({
        ...originalPosition,
        source,
      });
    });
  });

  return resolvedLocations;
};
