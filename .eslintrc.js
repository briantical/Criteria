module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/app/assets',
          _components: './src/app/components',
          _containers: './src/app/containers',
          _actions: './src/app/actions',
          _reducers: './src/app/reducers',
          _styles: './src/app/styles',
          _utils: './src/app/utils',
        },
      },
    },
  },
};
