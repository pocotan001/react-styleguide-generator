module.exports.getDisplayName = component => {
  if (component && component.name === 'RadiumEnhancer') {
    return component.displayName.replace(/Radium\((.*)\)/, '$1')
  } else if (component) {
    return component.displayName
  }

  return null
}
