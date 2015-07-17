import React, { Component, PropTypes } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import reactDocGenToMD from '../../utils/react-docgen-to-md'
import Tabs from 'react-simpletabs'

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
    // the reactDocGenId used to locate the properties metadata stored in window.RSG.propMetas
    reactDocGenRefId: PropTypes.string,
    // reference to the react element
    _self: PropTypes.func,
    // Array of props/children that are used to create additional examples
    examples: PropTypes.array
  }

  static defaultProps () {
    return {
      examples: [],
      reactDocGenRefId: null
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
    let Component = this.props._self
    let className = `sg sg-section-example ${this.props.className ? this.props.className : ''}`
    let examples = []

    examples.push(
        <Tabs.Panel key={'tab-panel-' + exampleId} title={'Default'}>
          {this.props.children}
          {this.props.code && this.renderCode(this.props.code)}
          {!this.props.code && !data.children && this.renderAutoCode(this.props)}
        </Tabs.Panel>
    )

    // Additional examples
    if (this.props.examples) {
      let addlExamples = this.props.examples.map(function(data) {
        exampleId += 1

        if (data.children) {
          return (
            <Tabs.Panel key={'tab-panel-' + exampleId} title={data.title}>
              <Component key={'component-ex-' + exampleId} {...data.props}>{data.children}</Component>
              {data.code && this.renderCode(data.code)}
              {!data.code && !data.children && this.renderAutoCode(data.props)}
            </Tabs.Panel>
          )
        } else {
          return (
            <Tabs.Panel key={'tab-panel-' + exampleId} title={data.title}>
              <Component key={'component-ex-' + exampleId} {...data.props} />
              {data.code && this.renderCode(data.code)}
              {!data.code && !data.children && this.renderAutoCode(data.props)}
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
    let markup = reactDocGenToMD(this.props.reactDocGenRefId, { sanitize: true })

    if (markup) {
      return (
        <div className='sg sg-section-description' dangerouslySetInnerHTML={{__html: markup}} />
      )
    }

    return null

  }

  renderAutoCode (props) {

    let displayName = this.props.reactDocGenRefId
    let propString = ''
    let html

    if (props) {
      Object.keys(props).forEach(function(prop) {
        let type = typeof prop
        switch(type) {
          case 'string':
            propString += `${prop}='${props[prop]}' `
            break
          case 'number':
            propString += `${prop}={${props[prop]}} `
            break
          case 'function':
            propString += `${prop}={fn}`
            break
          case 'object':
            var objStr = JSON.stringify(props[prop])
            propString += `${prop}={${objStr}} `
            break
          default:
            propString += `${prop}={${type}} `
        }

      })

      // @todo support children
      html = `
        <${displayName} ${propString} />
      `

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
        {this.props.reactDocGenRefId && this.renderProps()}
        {this.props.children && this.renderExamples()}
      </section>
    )
  }
}
