const path = require( 'path' );

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve( __dirname, 'dist' ),
		publicPath: '/build/'
	},

	watch: true,

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: "eval",

	module: {
	  rules: [
	    {
	      test: /\.m?js$/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env']
	        }
	      }
	    }
	  ]
	},

	devServer: {
    liveReload: false,
    open: 'chrome',
    hot: true,
    index: 'index.html',
    inline: true
  }
}