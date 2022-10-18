const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  //配置环境
  mode: 'development',
  devtool: 'source-map',
  //配置入口
  entry: {
    'js/app': './src/app.js'
  },
  //配置出口
  output: {
    //将目标文件打包到点前文件下dist中
    path: path.join(__dirname, './dist'),
    //打完包以后的文件名
    filename: '[name].js'
  },
  //配置插件
  plugins: [
    // 把html文件打包， 并把css文件放到页面上

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html',
      inject: true
    }),
    // 复制public资源到dist中
    new CopyPlugin({
      patterns:[
        {
          from:  './public/*.ico',
          to: path.join(__dirname, './dist/favicon.ico')
        },
        {
          from: './public/libs',
          to: path.join(__dirname, './dist/libs')
        }
      ]
    }),
    // 在每次打包前删除dist目录 
    new CleanWebpackPlugin()
  ],
  //配置server
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
      '/socket': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/socket': ''
        }
      }
    }

  },

  module: {
    rules: [
      {
        test: /\.art$/,
        use: {
          //加载art文件
          loader: 'art-template-loader',
          options: {
            escape: false
          }
        }
      },
      {
        test: /\.css$/,
        //后者拿css，前者将拿到的css放到页面上
        loaders: ['style-loader','css-loader']
        
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  }
}