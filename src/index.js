/// @ts-check
const {
  loadProfileWithAppliedSourceMaps,
} = require("./lib/loadProfileWithAppliedSourceMaps");
const typeFlag = require("type-flag").default;
const fs = require("fs");
const path = require("path");

const parsed = typeFlag({
  nodeModules: String,

  help: Boolean,

  out: {
    type: String,
    alias: "o",
  },
});

/**
 * @param {any} value
 * @param {string} msg
 * @returns {asserts value}
 */
const exitAssert = (value, msg) => {
  if (!value) {
    console.log(msg);
    process.exit(1);
  }
};

if (parsed._.length === 0 || parsed._[0] === "help" || parsed.flags.help) {
  const cliName = Object.keys(require("../package.json").bin)[0];
  console.log(`Usage: ${cliName} [options] fileName

Options
    -o, --out           Filename to write to
    --nodeModules       Location of the projects node modules
`);
}

const fileName = parsed._[0];
exitAssert(fileName, "Please specify the path to your profile.");
exitAssert(fs.existsSync(fileName), "The profile does not exist");

const outFileName =
  parsed.flags.out || fileName.replace(/(\.json|$)/i, ".mapped$1");

console.log(` 🔬  Searching for Stacktraces inside "${path.basename(fileName)}"`);
loadProfileWithAppliedSourceMaps(fileName, parsed.flags.nodeModules || undefined).then(
  (result) => {
    const json = JSON.stringify(result, null, 2);
    fs.writeFileSync(outFileName, json, "utf-8");
    console.log(` 🚀  Written to "${path.basename(outFileName)}"`);
  }
);
