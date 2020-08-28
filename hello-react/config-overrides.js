module.exports = function override(config, env) {
  if(env === 'production') {
    config.entry = './src/single-spa-entry.js';
    config.output = {
        ...config.output,
        filename: 'hello-react.js',
        libraryTarget: 'system',
      }
    delete config.optimization
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'HtmlWebpackPlugin')
    config.externals = ["single-spa", "shared-data", "react", "react-dom"];
    return config;
  }
  return config
};
