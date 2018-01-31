const path = require("path");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

process.traceDeprecation = true; //https://github.com/webpack/loader-utils/issues/56

const context = __dirname;

module.exports = {
	context,

	entry: [
		"react-hot-loader/patch",
		/*"webpack-hot-middleware/client",*/
		path.join(context, "src/index.jsx")
	],

	output: {
		path: path.join(context, "build/"),
		filename: "bundle.js",
		publicPath: "/build"
	},

	devtool: "inline-source-map",
	devServer: {
		contentBase: ".",
		hot: true,
		historyApiFallback: true
	},

	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
        new Dotenv({
            path: './.env', // Path to .env file (this is the default)
            safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
			systemvars: true
        })
		/*new webpack.ProvidePlugin({
			// make fetch available
			$: "jquery",
			jQuery: "jquery",
			Tether: "tether",
			"window.Tether": "tether",
			fetch: "isomorphic-fetch"
		})*/
	],

	resolve: {
		modules: [
			path.resolve(context, "src"),
			path.resolve(context, "node_modules")
		],
		extensions: [".js", ".jsx", ".css", ".scss"]
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [path.resolve(context, "src")],

				use: [
					{
						loader: "react-hot-loader/webpack"
					},
					{
						loader: "babel-loader",
						options: {
							presets: [
								[
									"env",
									{
										modules: false,
										targets: {
											browsers: ["> 1%", "last 2 major versions", "IE 10"]
										}
									}
								],
								"react"
							],
							plugins: [
								"transform-object-rest-spread",
								"transform-class-properties",
								"transform-decorators-legacy",
								"babel-plugin-styled-components",
								"react-hot-loader/babel"
							]
						}
					}
				]
			},
			{
				test: /\.css$/,
				include: [
					path.resolve(context, "src"),
					path.resolve(context, "node_modules")
				],

				use: [
					"style-loader",
					{ loader: "css-loader", options: { import: false, sourceMap: true } },
					{ loader: "postcss-loader", options: { sourceMap: true } }
				]
			},
			{
				test: /\.scss$/,
				include: [
					path.resolve(context, "src"),
					path.resolve(context, "node_modules")
				],

				use: [
					"style-loader",
					{ loader: "css-loader", options: { import: false, sourceMap: true } },
					{ loader: "postcss-loader", options: { sourceMap: true } },
					"resolve-url-loader",
					{ loader: "sass-loader", options: { sourceMap: true } }
				]
			},
			{
				test: /\.woff2?$/,
				loader: "file-loader"
			}
		]
	}
};
