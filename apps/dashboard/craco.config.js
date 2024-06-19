const { addAfterLoader, loaderByName } = require('@craco/craco');

module.exports = {
  // webpack: {
  //   configure: (webpackConfig) => {
  //     addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
  //       test: /\.(graphql|gql)$/,
  //       loader: require.resolve('graphql-tag/loader')
  //     });
  //     return webpackConfig;
  //   }
  // }
};
