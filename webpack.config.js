const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  const { environment, port } = env;
  return {
    mode: environment,
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      compress: true,
      noInfo: true,
      stats: 'errors-only',
      inline: true,
      lazy: false,
      contentBase: path.join(__dirname, 'public'),
      host: 'localhost',
      port: port,
      publicPath: '/',
      historyApiFallback: true,
      overlay: {
        errors: true,
        warnings: true,
      },
      hot: true,
    },
    entry: {
      app: path.join(__dirname, 'src', 'index.tsx'),
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                onlyCompileBundledFiles: true,
                allowTsInNodeModules: true,
              },
            },
          ],
          exclude: '/node_modules/',
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.(pdf|jpg|jpeg|png|ico|mp3|wav)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[sha512:hash:base64:7].[ext]',
              },
            },
          ],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[sha512:hash:base64:7].[ext]',
              },
            },
          ],
          include: path.resolve(__dirname, 'src'),
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        configs: path.resolve(__dirname, 'src/configs'),
        pages: path.resolve(__dirname, 'src/pages'),
        translations: path.resolve(__dirname, 'src/translations'),
        utils: path.resolve(__dirname, 'src/utils'),
      },
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
      new Dotenv(),
    ],
  };
};
