module.exports = {
  presets: [
    'react',
    [
      'env',
      {
        targets: {
          browser: [['last 2 versions']],
        },
      },
    ],
  ],
  plugins: ['transform-class-properties', 'transform-react-jsx'],
};
