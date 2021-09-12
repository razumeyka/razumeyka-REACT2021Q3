const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
	devServer: {
		open: true,
		inline: true,
		hot: true,
		port: 3000,
		writeToDisk: true,
		contentBase: path.join(__dirname, './dist'),
		historyApiFallback: true,
	},
};

const esLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ failOnError: true }) ];

module.exports = ({ development }) => ({
	mode: development ? 'development' : 'production',
	devtool: development ? 'inline-source-map' : false,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: 'bundle.js',
		assetModuleFilename: 'assets/images/[hash][ext]',
		clean: true,
	},
	...devServer(development),
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: '/node-modules/'
			},
			{
				test: /\.module\.css$/,
				use: [MiniCssExtractPlugin.loader, {
					loader:'css-loader',
					options: {
						modules: {
							localIdentName: "[local]___[hash:base64:5]",
						}
					}
				}]
			},
			{
				test: /^((?!\.module).)*css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			},
			// {
			// 	test: /^((?!\.module).)*(le|c)ss$/i,
			// 	use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','less-loader',]
			// },
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]'
				}
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/icons/[name][ext]'
				}
			}
		]
	},
	plugins: [
		...esLintPlugin(development),
		new HtmlWebpackPlugin({
			title: 'App',
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		// new CopyPlugin({
		// 	patterns: [{
		// 		from: 'public'
		// 	}],
		// })
	],
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin({parallel: true})
		],
	},
});