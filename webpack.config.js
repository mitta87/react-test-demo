const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
	resolve: {
		extensions: [".js", ".jsx", ".*"]
	},
	entry: {
		main: './frontend/src/index.jsx'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"env",
								"react",
								"stage-2"
							]
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
			}
		]
	},
	devServer: {
		port: 9000,
		hot: true,
		inline: true,
		proxy: { '/api': 'http://localhost:9080' }
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			React: "react"
		}),
		new HtmlWebPackPlugin({
			template: "./frontend/src/index.html",
			filename: "./index.html"
		})
	]
};