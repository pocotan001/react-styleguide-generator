import marked from 'marked'
import reactPropMeta from '../../rsg-tmp/propsdoc'

/**
 * This function takes the output of react-docgen and generates some compact markdown
 *
 * @param {string} reactDocGenId
 * @returns {string} HTMLElement
 * @author marcello3d
 * @author theogravity
 */
export default function docgenToMarkdown (displayName) {
  let component = reactPropMeta[displayName]

  if (!component) {
    return
  }

  if (component.props) {
    return marked([
      '#### Properties',
      '',
      Object.keys(component.props).map(propName => {
        let prop = component.props[propName]
        let value = ''

        // Doing it this way instead of ternary operator is because
        // the linter gives back 'Infix operators must be spaced.'
        // unsure how to fix given that everything was spaced properly
        if (prop.defaultValue && prop.defaultValue.value) {
          value = ` (default value:\`${prop.defaultValue.value}\`)`
        }

        if (prop.type) {
          return (
            `\`${propName}${prop.type.name ? ':' + prop.type.name : ''}${prop.required ? '.isRequired' : ''}\`` +
            `${prop.description ? ` \- ${prop.description}` : ''}${value}\n`
          )
        } else {
          return null
        }
      }).join('\n')
    ].join('\n'), { sanitize: true })
  }
}
