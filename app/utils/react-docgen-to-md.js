/**
 * This function takes the output of react-docgen and generates some compact markdown
 *
 * @param component react-docgen output of a component (e.g. not the whole json file, but one of the component subtrees)
 * @returns {string} Markdown formatted text
 * @author marcello3d
 */
module.exports = function docgenToMarkdown (reactDocGenId) {

  var component = window.RSG.propMetas[reactDocGenId]

  return [
    'Properties',
    '----------',
    Object.keys(component.props).map(propName => {
      let prop = component.props[propName]
      return (
        '`' + propName + ':' + prop.type.name + (prop.required ? '.isRequired' : '') + '` ' +
        (prop.description || '') +
        (prop.defaultValue && prop.defaultValue.value ? ('(default value: `' + prop.defaultValue.value + '`)') : '') +
        '\n\n'
      )
    }).join('\n')
  ].join('\n')
}
