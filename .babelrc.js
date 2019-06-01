module.exports = {
  presets: [
    [
      '@babel/preset-env',

      {
        targets: {
          browser: [['last 2 versions']],
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-runtime',
  ],
};
