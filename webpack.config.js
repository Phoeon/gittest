module.exports = {
	entry:{
		main : __dirname+"/app/main.js"
	},
	output:{
		filename:"bundle.js",
		path:__dirname+"/"
	},
	devtool:"eval-source-map",
	devServer:{
		contentBase:__dirname+"/",
		inline:true,
		port:8082,
		historyApiFallback:true
	},
	module:{
		rules:[{
			test:/\.js$/,
			use:[{
				loader:"babel-loader"
			},{
				loader:"eslint-loader"
			}],
			exclude:"/node_modules/"
		},{
			test:/\.(le|c)ss$/,
			use:[{
				loader:"style-loader"
			},{
				loader:"css-loader"
			},{
				loader:"less-loader"
			}]
		}]
	}

}