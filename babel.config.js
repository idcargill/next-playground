module.expors = {
  plugins: ['@babel/plugin-syntax-jsx'],
  presets: [
    '@babel/preset-react',
    '@babel/plugin-syntax-jsx'
    ['@babel/preset-env', {targets: { node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
