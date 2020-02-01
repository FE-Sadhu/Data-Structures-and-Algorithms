const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development', // 开发者模式默认开启了 sourceMap
	devtool: 'cheap-module-eval-source-map', // 取消开发者模式下默认开启的 sourceMap
  devServer: { // 提升开发效率，起个服务器，当修改源代码后，自动打包并且响应在页面上。
		contentBase: './dist', // 以 dist 目录下文件起一个本地服务器，会自动打包输出到 dist 中(启动 webpack-dev-server 后，dist目录不会显示出来了，dist下得东西被放在了计算机的内存中)
		open: true, // 配置后，当我们执行打包完成后，会自动打开浏览器，访问该本地服务器。
		hot: true, // 开启热模块更新(HMR hot module replacement)
		hotOnly: true // 加上这个配置是为了当热模块更新失败，不让webpack做任何操作，不然webpack会刷新页面。
	},
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: { // 也可以放在外面的 .babelrc 里配置 babel
        presets: [["@babel/preset-env", {
          targets: {
						chrome: "67", // Chrome 版本大于67的话 babel 就不转译代码了
					},
          useBuiltIns: 'usage' // 这个配置是实现 按需加载 babel polyfill, 而不是一次性把所有 polyfill 打包进去。并且配置了这项后，会自动在业务代码中引入 polifill， 不用我们手动 import 引入了。
        }]]
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
    }), 
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}