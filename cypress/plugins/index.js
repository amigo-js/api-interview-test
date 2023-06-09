const dotenvPlugin = require('cypress-dotenv')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  const options = {
    typescript: require.resolve('typescript')
  }

  on('file:preprocessor', cucumber(options))
  dotenvPlugin(config)
  return config
}
