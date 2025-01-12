const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development', // Fallback to 'development' if NODE_ENV is not set
  entry: './client/index.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory for bundled files
    filename: 'bundle.js', // Name of the bundled JavaScript file
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Transpile JavaScript/JSX
          options: {
            targets: 'defaults', // Babel target environments
            presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for modern JS and React
          },
        },
      },
      {
        test: /\.s[ac]ss$/i, // Match .scss and .sass files
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader // Extract CSS in production
            : 'style-loader', // Inject CSS into DOM in development
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App', // Title for the HTML file
      template: 'index.html', // Template HTML file
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Output filename for CSS
    }),
  ],
  devServer: {
    static: {
      publicPath: '/build', // Serve files from the 'build' directory
      directory: path.resolve(__dirname, 'build'),
    },
    compress: true, // Enable gzip compression
    port: 8080, // Port for the development server
    proxy: [
      {
        context: ['/api'], // Proxy requests starting with "/api"
        target: 'http://localhost:3000', // Backend server for API requests
        secure: false, // Ignore SSL certificates for development
        changeOrigin: true, // Adjust the origin of the request to match the target
      },
      {
        context: ['/auth'], // Proxy requests starting with "/auth"
        target: 'http://localhost:4000', // Backend server for authentication
        secure: false,
        changeOrigin: true,
      },
    ],
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production', // Enable minimization only in production
    minimizer: ['...'], // Default minimizers (TerserPlugin for JS, CssMinimizerPlugin for CSS)
  },
};
