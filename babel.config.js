module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:react-native-dotenv'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/components': './src/components',
            '@/config': './src/config',
            '@/contexts': './src/contexts',
            '@/errors': './src/errors',
            '@/factories': './src/factories',
            '@/hooks': './src/hooks',
            '@/interfaces': './src/interfaces',
            '@/routes': './src/routes',
            '@/screens': './src/screens',
            '@/services': './src/services',
            '@/styles': './src/styles',
            '@/utils': './src/utils',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
