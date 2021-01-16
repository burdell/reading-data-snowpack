/** @type {import("snowpack").SnowpackUserConfig } */

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' }
  },
  exclude: isDevelopment
    ? ['**/node_modules/**/*']
    : ['**/node_modules/**/*', '**/mocks/**'],
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    [
      './snowpack-devscripts.js',
      { scripts: ['/dist/mocks/browser.js'], replaceToken: 'DEV_SCRIPTS' }
    ]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    '~/': './src'
  }
}
