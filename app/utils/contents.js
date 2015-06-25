// for `commonStrict` module formatter
// https://babeljs.io/docs/usage/modules/#interop
let Contents = window.Contents.map((Content) => Content.default || Content)

export default {
  /**
   * @type {string[]}
   */
  categories: (() => {
    return Contents
      .map((Content) => Content.styleguide.category)
      .filter((category, i, categories) => categories.indexOf(category) === i)
      .sort()
  })(),

  /**
   * @param {Object=} data
   * @param {string=} data.query
   * @param {string[]=} data.keys
   * @param {boolean=} data.exact
   * @returns {ReactClass[]}
   */
  search (data) {
    data = data || {}

    let query = (data.query || '').trim().toLowerCase()
    let keys = data.keys || []
    let exact = !!data.exact
    let phrases = !exact ? query.split(' ') : null

    if (query === '') {
      return Contents
    }

    return Contents.filter((Content) => {
      return keys
        .filter((key) => !!Content.styleguide[key])
        .some((key) => {
          let val = Content.styleguide[key].toLowerCase()

          return exact ? val === query : phrases.every((phrase) => val.indexOf(phrase) !== -1)
        })
    }).sort((a, b) => {
      if (a.styleguide.title < b.styleguide.title) { return -1 }
      if (a.styleguide.title > b.styleguide.title) { return 1 }
      return 0
    })
  }
}
