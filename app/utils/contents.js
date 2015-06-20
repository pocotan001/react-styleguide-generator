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
      .filter((el, i, arr) => el !== 'overview' && arr.indexOf(el) === i)
      .sort()
  })(),

  /**
   * @param {string} query
   * @param {string[]} keys
   * @param {boolean=} exact
   * @returns {ReactClass[]}
   */
  search (query, keys, exact = false) {
    query = query.toLowerCase()
    let phrases

    if (!exact) {
      phrases = query.trim().split(' ')
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
