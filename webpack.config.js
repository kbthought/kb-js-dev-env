import path from 'path';

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index')
    ],
  target:"web",
  output: {
    path: path.resolve(__dirname,'dist'),
    publicPath:'/',
    filename:'bundle2.js'
  },
  module:{
    loaders:[
      {test: /\.js$/,exclude:/node_modes/, loader: 'babel-loader'},
      {test:/\.css$/,loaders:['style','css']}
    ]
  }
}
