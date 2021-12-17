# chrome-profile-sourcemap-resolver

The google performance profiler is an incredible powerfull tool for performance debugging.
Unfortunately - at least as of today - it does not support sourcemaps.

As a quickfix the `chrome-profile-sourcemap-resolver` allows to convert a raw `profile.json` and tries to resolves sourcemap for all stacktraces.

![Before and After example](https://github.com/jantimon/chrome-profile-sourcemap-resolver/raw/main/conversion.png)

Usage:

```
npx chrome-profile-sourcemap-resolver profile.json
```