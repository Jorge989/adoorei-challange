const path = require("path");

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
            },
          },
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      // ... outras regras
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  // ...
};
