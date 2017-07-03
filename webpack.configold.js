module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {test: /\.js$/,exclude:/node_modes/, loader: 'babel-loader'}
    ]
  }
}
