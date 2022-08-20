const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (config) => {
      const wasmExtensionRegExp = /\.wasm$/;
      config.resolve.extensions.push(".wasm");
      config.experiments = {
        asyncWebAssembly: false,
        lazyCompilation: true,
        syncWebAssembly: true,
        topLevelAwait: true,
      };
      config.resolve.fallback = {
        buffer: require.resolve("buffer/"),
      };
      config.module.rules.forEach((rule) => {
        (rule.oneOf || []).forEach((oneOf) => {
          if (oneOf.type === "asset/resource") {
            oneOf.exclude.push(wasmExtensionRegExp);
          }
        });
      });
      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        })
      );

      return config;
    },
  },
};
