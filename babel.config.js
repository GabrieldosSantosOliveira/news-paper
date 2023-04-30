module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      [
        'module-resolver',
        {
          alias: {
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/config': './src/config',
            '@/contexts': './src/contexts',
            '@/errors': './src/errors',
            '@/factories': './src/factories',
            '@/helpers': './src/helpers',
            '@/hooks': './src/hooks',
            '@/interfaces': './src/interfaces',
            '@/routes': './src/routes',
            '@/screens': './src/screens',
            '@/services': './src/services',
            '@/styles': './src/styles',
            '@/utils': './src/utils',
            '@/validations': './src/validations',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
