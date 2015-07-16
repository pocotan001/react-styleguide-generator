import React, { Component, PropTypes } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import reactDocGenToMD from '../../utils/react-docgen-to-md'

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
    // Array of props to create a new example
    exampleProps: PropTypes.array
  }

  static defaultProps () {
    return {
      exampleProps: [],
      reactDocGenRefId: null
    }
  }

  componentDidMount () {
    this.highlight()
  }

  componentDidUpdate () {
    this.highlight()
  }

  highlight () {
    if (this.props.code) {
      let code = React.findDOMNode(this.refs.code)
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

  renderAddlExamples () {
    if (this.props.exampleProps) {
      return this.props.exampleProps.map(function(props) {
        exampleId += 1
        return <this.props._self {...props} key={exampleId} />
      }, this)
    } else {
      return null
    }
  }

  renderExample () {
    let className = `sg sg-section-example ${this.props.className ? this.props.className : ''}`

    return (
      <section className={className}>
        {this.props.children}
        {this.renderAddlExamples()}
      </section>
    )
  }

  renderProps () {
    let markup = marked(reactDocGenToMD(this.props.reactDocGenRefId, { sanitize: true }))

    return (
      <div className='sg sg-section-description' dangerouslySetInnerHTML={{__html: markup}} />
    )
  }

  renderCode () {
    return (
      <section className='sg sg-section-code'>
        <pre className='sg'>
          <code className='sg xml' ref='code'>{this.props.code.trim()}</code>
        </pre>
      </section>
    )
  }

  render () {
    return (
      <section className='sg sg-section'>
        {this.props.category && this.props.title && this.renderHeading()}
        {this.props.description && this.renderDescription()}
        {this.props.reactDocGenRefId && this.renderProps()}
        {this.props.children && this.renderExample()}
        {this.props.code && this.renderCode()}
      </section>
    )
  }
}
