const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Main const. Feel free to change it
const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/"
};

// Pages const for HtmlWebpackPlugin
const PAGES_DIR = `${PATHS.src}/pug/pages`;
const PAGES = getPugFromDir(PAGES_DIR);
const CHUNKS = PAGES.map(el => el.replace('.pug', '').replace(/\\index$/, '').replace(/^blog\\/, '').replace(/^projects\\/, '').replace(/^post.*/, 'post'));

console.log("Pages", PAGES);
console.log("Chunks", CHUNKS);

function getPugFromDir(base, dir = '') {
  const temp = [];
  fs.readdirSync(path.join(base, dir))
    .forEach(file => {
      const filepath = path.join(dir, file);
      if (file.endsWith(".pug") && file[0] !== '_') temp.push(filepath);
      else if (!file.includes('.')) temp.push(...getPugFromDir(base, filepath));
    });
  return temp;
}

module.exports = {
  externals: {
    paths: PATHS
  },

  entry: {
    index: PATHS.src,
    common: `${PATHS.src}/common.js`,
    about: `${PATHS.src}/about.js`,
    blog: `${PATHS.src}/blog.js`,
    post: `${PATHS.src}/blog-item.js`,
    services: `${PATHS.src}/services.js`,
    contacts: `${PATHS.src}/contacts.js`,
    projects: `${PATHS.src}/projects.js`,
    vtb: `${PATHS.src}/projects-item.js`,
    psb: `${PATHS.src}/projects-item.js`,
  },
  
  output: {
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    path: PATHS.dist,
    publicPath: "/"
  },

  module: {
    rules: [
      {
        // Pug
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        // Scss
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` }
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },
      {
        // JavaScript
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        // Fonts
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        // Images / Icons
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },

    ]
  },
  resolve: {
    alias: {
      "~": PATHS.src
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: "" }
    ]),

    /* Automatic creation any html pages (Don't forget to RERUN dev server!) */
    ...PAGES.map((page, index) => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`,
      chunks: [`${CHUNKS[index]}`, 'common']
    }))
  ]
};
