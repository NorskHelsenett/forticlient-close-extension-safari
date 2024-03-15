const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    background: path.resolve(__dirname, "..", "src", "background.ts"),
    main: path.resolve(__dirname, "..", "src"),
  },
  output: {
    path: path.join(
      __dirname,
      "../NHN FortiClient tab close extension/NHN FortiClient tab close extension Extension/Resources/"
    ),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
};
