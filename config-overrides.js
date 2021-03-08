module.exports = function override(config, env) {
  // change dist filename
  config.output.filename = 'survey.dist.js';

  // Consolidate chunk files instead
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };
  // Move runtime into bundle instead of separate file
  config.optimization.runtimeChunk = false;

  return config;
};
