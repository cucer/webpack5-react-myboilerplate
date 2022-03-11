// Can not load "react-refresh/babel" in production
const plugins = [];

if (process.env.NODE_ENV !== 'production') {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: [
    '@babel/preset-env',
    // in files only using JSX (no state or React methods)
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins,
  // plugins: ["react-refresh/babel"],
};
