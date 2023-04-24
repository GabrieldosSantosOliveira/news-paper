module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/components': './src/components',
            '@/contexts': './src/contexts',
            '@/errors': './src/errors',
            '@/hooks': './src/hooks',
            '@/interfaces': './src/interfaces',
            '@/routes': './src/routes',
            '@/screens': './src/screens',
            '@/services': './src/services',
            '@/styles': './src/styles',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
