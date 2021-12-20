/// @ts-check
import {
  applySourceMapsForProfile,
} from "./lib/applySourceMapsForProfile.mjs";

export {
  applySourceMapsForProfile,
} from "./lib/applySourceMapsForProfile.mjs";

export const runCli = async () => {
  const typeFlag = (await import("type-flag")).default;
  const fs = await import("fs");
  const path = await import("path");

  const parsed = typeFlag({
    nodeModules: String,

    help: Boolean,

    out: {
      type: String,
      alias: "o",
    },
  });

  if (parsed._.length === 0 || parsed._[0] === "help" || parsed.flags.help) {
    const packageJson = await import('../package.json');
    const cliName = Object.keys(packageJson.default.bin)[0];
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

  console.log(
    ` 🔬  Searching for Stacktraces inside "${path.basename(fileName)}"`
  );

  return applySourceMapsForProfile(
    JSON.parse(fs.readFileSync(fileName, "utf-8")),
    parsed.flags.nodeModules || undefined
  ).then((result) => {
    const json = JSON.stringify(result, null, 2);
    fs.writeFileSync(outFileName, json, "utf-8");
    console.log(` 🚀  Written to "${path.basename(outFileName)}"`);
  });
};

/**
 * @param {any} value
 * @param {string} msg
 * @returns {asserts value}
 */
 function exitAssert (value, msg) {
  if (!value) {
    console.log(msg);
    process.exit(1);
  }
};