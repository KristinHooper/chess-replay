import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: process.env.NODE_ENV || 'development', // Default to 'development' mode if NODE_ENV is not set
  entry: './src/index.js', // Main entry point for your application
  output: {
    path: path.resolve(process.cwd(), 'build'), // Absolute path to the build directory
    filename: 'bundle.js', // Output bundle filename
    publicPath: '/', // Base path for all assets
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/, // Skip transpiling node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader for JSX/JS files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Enable modern JS and React transpiling
          },
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader // Extract CSS for production builds
            : 'style-loader', // Inject CSS into the DOM during development
          'css-loader', // Resolve @import and url() paths in CSS
          'postcss-loader', // Use PostCSS for Tailwind and Autoprefixer
        ],
      },
      {
        test: /\.s[ac]ss$/i, // Match .scss and .sass files
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader // Extract CSS for production builds
            : 'style-loader', // Inject CSS into the DOM during development
          'css-loader', // Resolve @import and url() paths in CSS
          'postcss-loader', // Use PostCSS for Tailwind with Sass
          'sass-loader', // Compile Sass to CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i, // Match image files
        type: 'asset/resource', // Emit files as separate assets
      },
      {
        test: /\.json$/, // Match JSON files
        type: 'json', // Treat JSON files as modules
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Automatically resolve .js, .jsx, and .json extensions
    alias: {
      '@': path.resolve(process.cwd(), 'src'), // Set up alias for the src directory
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App', // Title of the generated HTML file
      template: './index.html', // Use the index.html file in the project root
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Output filename for CSS files
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), 'public'), // Serve static files from the public directory
    },
    compress: true, // Enable gzip compression for served files
    port: 8080, // Port for the development server
    historyApiFallback: true, // Support single-page app routing
    hot: true,
    liveReload: true,
    proxy: [
      {
        context: ['/api'], // Proxy API requests
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
      {
        context: ['/auth'], // Proxy authentication requests
        target: 'http://localhost:4000',
        secure: false,
        changeOrigin: true,
      },
    ],
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production', // Minimize files only in production mode
    minimizer: ['...'], // Default minimizers (TerserPlugin and CssMinimizerPlugin)
  },
};
