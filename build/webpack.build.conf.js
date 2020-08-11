const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1,
      minChunks: 2
    }
  }
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
