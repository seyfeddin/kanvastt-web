module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-each': {},
    'postcss-custom-media': {
      importFrom: ['./styles/_viewport.css']
    }
  }
}
