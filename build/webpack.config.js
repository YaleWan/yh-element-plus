const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const externals = [
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue'
    }
  }
]
const plugins = [
  new VueLoaderPlugin()
]

const entry = path.resolve(__dirname, '../packages/c3-element-plus/index.js')

const config = {
  mode: 'production',
  entry,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'C3ElPlus',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  externals,
  plugins
}

module.exports = config
