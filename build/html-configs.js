const pages = require('./pages')

module.exports = pages.map(page => {
  return {
    filename: `${page.name}.html`,
    template: `./src/templates/${page.template}`,
    inject: true,
    chunks: [page.name]
  }
})
