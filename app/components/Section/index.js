import React, { Component, PropTypes } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import reactDocGenToMD from '../../utils/react-docgen-to-md'
import Tabs from 'react-simpletabs'
import utils from '../../../lib/utils'

var exampleId = 0

export default class Section extends Component {
  static displayName = 'SG.Section'

  static propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    code: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    // Array of props/children that are used to create additional examples
    examples: PropTypes.array,
    // React element class used for rendering additional examples
    exampleComponent: PropTypes.func,
    // Reference to the example component
    _self: PropTypes.object
  }

  static defaultProps () {
    return {
      examples: []
    }
  }

  highlight (component) {
    // fix bug where unmount triggers the ref definition
    if (component) {
      let code = React.findDOMNode(component)
      hljs.highlightBlock(code)
    }
  }

  renderHeading () {
    return (
      <h1 className='sg sg-section-heading'>
        <span className='sg sg-section-heading-title'>
          <a
            className='sg sg-section-heading-title-link'
            href={`${this.props.category}/${this.props.title}`}
          >
            {this.props.title}
            <i className='fa fa-link' />
          </a>
        </span>
        <a className='sg sg-section-heading-category' href={this.props.category}>
          {this.props.category}
        </a>
      </h1>
    )
  }

  renderDescription () {
    let markup = marked(this.props.description.trim(), { sanitize: true })

    return (
      <div className='sg sg-section-description' dangerouslySetInnerHTML={{__html: markup}} />
    )
  }

  renderExamples () {
    if (this.props.examples && this.props.examples.length > 0) {
      return this.renderTabbedExamples()
    } else {
      return this.renderExample()
    }
  }

  renderExample () {
    let className = `sg sg-section-example ${this.props.className ? this.props.className : ''}`

    return (
      <section className={className}>
        {this.props.children}
        {this.props.code && this.renderCode(this.props.code)}
      </section>
    )
  }

  renderTabbedExamples () {
    // We first check if there is a user-defined component to use for creating additional examples
    let Component = this.props.exampleComponent || null
    let className = `sg sg-tabbed sg-section-example ${this.props.className ? this.props.className : ''}`
    let examples = []

    // Renders the base example using the styleguide block
    examples.push(
        <Tabs.Panel key={'tab-panel-' + exampleId} title={'Example'}>
          {this.props.children}
          {this.props.code && this.renderCode(this.props.code)}
        </Tabs.Panel>
    )

    // Additional examples found in styleguide.examples
    if (this.props.examples) {
      let tabNumber = 0

      if (!Component) {
        console.error('styleguide.exampleComponent must be specified with a ReactElement before additional ' +
          'examples can be generated.')
        return
      }

      let addlExamples = this.props.examples.map(function (data) {
        exampleId += 1
        tabNumber += 1

        if (data.children) {
          return (
            <Tabs.Panel key={'tab-panel-' + exampleId} title={data.tabTitle || ('Example-' + tabNumber) }>
              <Component key={'component-ex-' + exampleId} {...data.props}>{data.children}</Component>
              {this.renderExampleCode(data.props, data.code)}
            </Tabs.Panel>
          )
        } else {
          return (
            <Tabs.Panel key={'tab-panel-' + exampleId} title={data.tabTitle || ('Example-' + tabNumber)}>
              <Component key={'component-ex-' + exampleId} {...data.props} />
              {this.renderExampleCode(data.props, data.code)}
            </Tabs.Panel>
          )
        }
      }, this)

      examples = examples.concat(addlExamples)
    }

    return (
      <section className={className}>
        <Tabs>
          {examples}
        </Tabs>
      </section>
    )
  }

  renderProps () {
    let markup

    // Check if the base component has prop docs
    let displayName = utils.getDisplayName(this.props._self.type)

    if (displayName) {
      markup = reactDocGenToMD(displayName)
    }

    // no prop docs found on the base; check the defined exampleComponent instead
    if (!markup) {
      displayName = utils.getDisplayName(this.props.exampleComponent)

      if (displayName) {
        markup = reactDocGenToMD(displayName)
      }
    }

    if (markup) {
      return (
        <div className='sg sg-section-description' dangerouslySetInnerHTML={{__html: markup}} />
      )
    }

    return null

  }

  renderExampleCode (props, code) {
    if (code) {
      return this.renderCode(code)
    } else if (props) {
      return this.renderAutoCode(props)
    }

    return null
  }

  renderAutoCode (props) {

    let displayName = this.props.exampleComponent && utils.getDisplayName(this.props.exampleComponent) || 'Component'
    let propString = []
    let html
    let displaySpaces = ' '.repeat(displayName.length + 1)

    if (props) {
      let propKeys = Object.keys(props)

      propKeys.forEach(function (prop, index) {
        let spaces = ''

        if (index > 0) {
          spaces = displaySpaces
        }

        if (prop === 'children') {
          return
        }

        let type = typeof props[prop]
        switch (type) {
          case 'string':
            propString.push(`${spaces} ${prop}='${props[prop]}'`)
            break
          case 'number':
            propString.push(`${spaces} ${prop}={${props[prop]}} `)
            break
          case 'function':
            propString.push(`${spaces} ${prop}={function}`)
            break
          case 'object':

            if (props[prop]._isReactElement) {
              // @todo support rendering actual react elements (eg using actual component name) + props
              propString.push(`${displaySpaces} ${prop}={ReactElement}`)
            } else {
              var objStr = JSON.stringify(props[prop], null, 2)
              // Properly indent out the formatted json
              objStr = objStr.replace(/^(?!\[|\{)(.*)/gm, displaySpaces + ' $1')
              propString.push(`${spaces} ${prop}={${objStr}}`)
            }

            break
          default:
            propString.push(`${spaces} ${prop}={${type}}`)
        }

      })

      if (propString.length > 1) {
        propString = propString.join('\n').trim()
      } else {
        propString = propString.join('').trim()
      }

      if (props.children) {
        switch (typeof props.children) {
          case 'string':
            html = `<${displayName} ${propString}>${props.children}</${displayName}>`
            break
          // @todo support nested children elements
          default:
            html = `<${displayName} ${propString}>Auto-documentation for
                      child elements not supported. Please define the "code" property manually.
                    </${displayName}>`
        }

      } else {
        if (propKeys.length < 2) {
          html = `<${displayName} ${propString} />`
        } else {
          html = `<${displayName} ${propString}` + '\n' + '/>'
        }
      }

      return this.renderCode(html)
    }

    return null
  }

  renderCode (code) {

    if (code) {
      return (
        <section className='sg sg-section-code'>
        <pre className='sg'>
          <code className='sg xml' ref={this.highlight}>{code.trim()}</code>
        </pre>
        </section>
      )
    }

    return null

  }

  render () {
    return (
      <section className='sg sg-section'>
        {this.props.category && this.props.title && this.renderHeading()}
        {this.props.description && this.renderDescription()}
        {this.props.exampleComponent && this.renderProps()}
        {this.props.children && this.renderExamples()}
      </section>
    )
  }
}
