const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const webpack = require("webpack");

module.exports = {
  /* 入口 */
  entry: ["react-hot-loader/patch", path.join(__dirname, "src/index.js")],

  /* 输出到dist文件夹，输出文件名字为bundle.js */
  output: { // 配置webpack打包的相关信息
    path: path.join(__dirname, "./dist"),
    filename: "[name].[hash].js", //"bundle.js",
    chunkFilename: "[name].[chunkhash].js"
  },

  /* src文件夹下面的以.js结尾的文件，要使用babel解析 */
  /* cacheDirectory是用来缓存编译结果，下次编译加速 */
  module: {
    rules: [ // 配置webpack的loader用以支持各类型资源的模块化使用
      {
        test: /\.js$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192 // options limit 8192意思是，小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
            }
          }
        ]
      }
    ]
  },

  devServer: { // 配置webpack dev服务器的相关信息
    port: 8088,
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
    host: "0.0.0.0",
    hotOnly: true
  },

  resolve: {
    alias: {
      // 配置路径别名
      pages: path.join(__dirname, "src/pages"),
      components: path.join(__dirname, "src/components"),
      routers: path.join(__dirname, "src/routers")
      //redux: path.join(__dirname, "src/redux")
    }
  },

  devtool: "inline-source-map", // 配置devtool报错信息显示优化

  plugins: [
    new HtmlWebpackPlugin({
      // 配置自动根据index.html模板生成首页
      filename: "index.html",
      template: path.join(__dirname, "src/index.html")
    }),
    //new webpack.HotModuleReplacementPlugin()
    /* HRM配置其实有两种方式，一种CLI方式，一种Node.js API方式。我们用到的就是CLI方式，比较简单。
    而配置CLI的HRM又有两种方式，一种是在webpack.dev.config.js中进行配置，另外一种则是在启动命令时使用--hot参数 */
  ]
};
