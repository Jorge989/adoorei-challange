module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-typescript"],
        },
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
