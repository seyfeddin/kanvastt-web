module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-each': {},
    autoprefixer: {},
    'postcss-custom-media': {
      importFrom: ['./styles/_viewport.css']
    }
  }
}
