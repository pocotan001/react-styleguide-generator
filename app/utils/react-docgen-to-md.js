import marked from 'marked'

/**
 * This function takes the output of react-docgen and generates some compact markdown
 *
 * @param {string} reactDocGenId
 * @returns {string} HTMLElement
 * @author marcello3d
 * @author theogravity
 */
module.exports = function docgenToMarkdown (displayName) {

  var component = window.RSG.propMetas[displayName]

  if (!component) {
    console.error('no prop docs found for ' + displayName)
    return
  }

  if (component.props) {
    return marked([
      '### Properties',
      '',
      Object.keys(component.props).map(propName => {
        let prop = component.props[propName]
        let defaultValue = ''

        // Doing it this way instead of ternary operator is because
        // the linter gives back 'Infix operators must be spaced.'
        // unsure how to fix given that everything was spaced properly
        if (prop.defaultValue && prop.defaultValue.value) {
          defaultValue = ' (default value : `' + defaultValue + '`)'
        }

        return (
          '`' + propName + (prop.type.name ? ':' + prop.type.name : '') + (prop.required ? '.isRequired' : '') + '` ' +
          (prop.description || '') +
          defaultValue +
          '\n\n'
        )
      }).join('\n')
    ].join('\n'), { sanitize: true })
  }

  console.error('no props found for ' + displayName)

}
