// component-requires.js is a generated file in rsg.js that contains
// the list of required user-defined components
import Components from '../../rsg-tmp/component-requires'

// for `commonStrict` module formatter
// https://babeljs.io/docs/usage/modules/#interop
let Contents = Components.map((Content) => Content.default || Content)
// compare index numbers
  .sort((a, b) => {
    a = a.styleguide.index
    b = b.styleguide.index

    return !a ? 1 : !b ? -1 : a.toString().localeCompare(b)
  })

export default {
  /**
   * @type {string[]}
   */
  categories: (() => {
    return Contents
      .map((Content) => Content.styleguide.category)
      .filter((category, i, categories) => categories.indexOf(category) === i)
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
    })
  }
}
