module.exports = {
  getDisplayName: function (component) {
    if (component.name === 'RadiumEnhancer') {
      return component.displayName.replace(/Radium\((.*)\)/, '$1')
    } else {
      return component.displayName
    }

    return null
  }
}
