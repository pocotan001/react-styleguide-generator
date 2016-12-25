const fs = require('fs-extra')

module.exports.getDisplayName = component => {
  if (component && component.name === 'RadiumEnhancer') {
    return component.displayName.replace(/Radium\((.*)\)/, '$1')
  } else if (component) {
    return component.displayName
  }

  return null
}

/**
 * @param {string} src
 * @param {string} dest
 * @returns {Promise}
 */
module.exports.copy = (src, dest) => {
  return new Promise((resolve, reject) => {
    fs.copy(src, dest, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
