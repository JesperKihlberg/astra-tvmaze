/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = (passedEnv, argv) => {
  const envPath = argv.mode === "production" ? ".env" : ".env.development";

  const env = dotenv.config({ path: envPath }).parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        images: path.resolve(__dirname, "src/images"),
      },
    },
    module: {
      rules: [
        { test: /\.scss$/, use: ["style-loader", "css-loader", "sass"] },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|txt|)$/,
          type: "asset/inline",
        },
        {
          test: /\.(png|jpg|gif|svg|ico)$/,
          type: "asset/resource",
        },
      ],
    },
    devServer: {
      hot: argv && argv.mode === "production" ? false : true,
      historyApiFallback: true,
      host: "0.0.0.0",
      compress: true,
      hot: true,
      port: env.PORT || 3210,
    },
    devtool: "source-map",
    output: {
      filename: "[name].bundle.js",
      publicPath: "/",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "index.html"),
       favicon: "./public/images/favicon.svg",
      }),
    ],
  };
};
