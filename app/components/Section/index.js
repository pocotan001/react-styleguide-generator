import React, { Component, PropTypes } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import reactDocGenToMD from '../../utils/react-docgen-to-md'
import Tabs from 'react-simpletabs'
import utils from '../../../lib/utils'

let exampleId = 0

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

  highlight () {
    // @todo - possible perf issue if there are a huge amount of code blocks
    let nodes = document.querySelectorAll('code.example-code')

    // a NodeList is returned, not an Array, so can't use array methods here
    for (let i = 0; i < nodes.length; ++i) {
      hljs.highlightBlock(nodes[i])
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
    let markup, displayName, docMeta

    // Check if the styleguide static description exists
    if (this.props.description) {
      markup = marked(this.props.description.trim(), { sanitize: true })
    }

    // If there is no markup, check if the react-docgen has a class description
    if (!markup) {
      // Check if the base component has docs
      displayName = utils.getDisplayName(this.props._self.type)
      docMeta = window.RSG.propMetas[displayName]

      if (docMeta && docMeta.description) {
        markup = marked(docMeta.description.trim(), {sanitize: true})
      }

      // no description found on the base; check the defined exampleComponent instead
      if (!markup) {
        displayName = utils.getDisplayName(this.props.exampleComponent)
        docMeta = window.RSG.propMetas[displayName]

        if (docMeta && docMeta.description) {
          markup = marked(docMeta.description.trim(), {sanitize: true})
        }
      }
    }

    if (!markup) { return null }

    return (
      <div className='sg sg-section-description' dangerouslySetInnerHTML={{__html: markup}} />
    )
  }

  renderExamples () {
    if (this.props.examples && this.props.examples.length) {
      return this.renderTabbedExamples()
    } else {
      return this.renderExample()
    }
  }

  renderExample () {
    let className = `sg sg-section-example ${this.props.className ? this.props.className : ''}`

    return (
      <section className={className}>
        <div className='sg-section-example-body'>
          {this.props.children}
        </div>
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
    if (this.props.children) {
      examples.push(
        <Tabs.Panel key={'tab-panel-' + exampleId} title={'Example'}>
          <div className='sg-section-example-body'>
            {this.props.children}
          </div>
          {this.props.code && this.renderCode(this.props.code)}
        </Tabs.Panel>
      )
    }

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

        return (
          <Tabs.Panel key={'tab-panel-' + exampleId} title={data.tabTitle || ('Example-' + tabNumber)}>
            <div className='sg-section-example-body'>
              <Component key={'component-ex-' + exampleId} {...data.props} />
            </div>
            {this.renderExampleCode(data.props, data.code)}
          </Tabs.Panel>
        )
      }, this)

      examples = examples.concat(addlExamples)
    }

    return (
      <section className={className}>
        <Tabs onAfterChange={this.highlight}>
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

    return markup ? <div className='sg sg-section-description sg-props' dangerouslySetInnerHTML={{__html: markup}} /> : null
  }

  renderExampleCode (props, code) {
    if (code) {
      return this.renderCode(code)
    } else if (props) {
      return this.renderAutoCode(props)
    }

    return null
  }

  toPropTypeString (prop) {
    let str
    let type = typeof prop

    switch (type) {
      case 'string':
        str = `'${prop}'`
        break
      case 'number':
        str = `{${prop}}`
        break
      case 'boolean':
        str = `{${prop.toString()}}`
        break
      case 'object':
        // @todo support rendering actual react elements (eg using actual component name) + props
        str = prop._isReactElement ? '{ReactElement}' : `{${JSON.stringify(prop, null, 2)}}`
        break
      default:
        str = `{${type}}`
    }

    return str
  }

  renderAutoCode (props) {
    let displayName = this.props.exampleComponent && utils.getDisplayName(this.props.exampleComponent) || 'Component'
    let html

    if (props) {
      let propKeys = Object.keys(props).filter((prop) => prop !== 'children')
      let propLength = propKeys.length
      let spaces

      switch (propLength) {
        case 0:
          spaces = ''
          break
        case 1:
          spaces = ' '
          break
        default:
          spaces = '\n  '
      }

      let propString = propKeys
        .map((prop) => `${spaces}${prop}=${this.toPropTypeString(props[prop])}`)
        .join('')

      if (props.children) {
        // @todo support nested children elements
        let text = typeof props.children === 'string' ? props.children : 'Auto-documentation for child elements not supported. Please define the "code" property manually.'

        if (propLength) {
          text = `\n  ${text}\n`
        }

        html = `<${displayName}${propString}>${text}</${displayName}>`
      } else {
        html = `<${displayName}${propString} />`
      }
    }

    return html ? this.renderCode(html) : null
  }

  renderCode (code) {
    if (code) {
      return (
        <section className='sg sg-section-code'>
        <pre className='sg'>
          <code className='sg xml example-code'>{code.trim()}</code>
        </pre>
        </section>
      )
    }

    return null
  }

  componentDidMount () {
    this.highlight()
  }

  componentDidUpdate () {
    this.highlight()
  }

  render () {
    return (
      <section className='sg sg-section'>
        {this.props.category && this.props.title && this.renderHeading()}
        {this.renderDescription()}
        {this.renderProps()}
        {(this.props.children || this.props.examples) && this.renderExamples()}
      </section>
    )
  }
}
