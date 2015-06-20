import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

export default class Section extends React.Component {
  static displayName = 'SG.Section';

  static propTypes = {
    category: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    code: React.PropTypes.string,
    className: React.PropTypes.string
  };

  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight() {
    if (this.props.code) {
      let code = React.findDOMNode(this.refs.code);
      hljs.highlightBlock(code);
    }
  }

  createHeading() {
    let isOverview = this.props.category === 'overview';

    return (
      <h1 className="sg sg-section-heading">
        <span className="sg sg-section-heading-title">
          <a
            className="sg sg-section-heading-title-link"
            href={`${this.props.category}/${this.props.title}`}
          >
            {this.props.title}
            <i className="fa fa-link" />
          </a>
        </span>
        {!isOverview &&
          <a className="sg sg-section-heading-category" href={this.props.category}>
            {this.props.category}
          </a>
        }
      </h1>
    );
  }

  createDescription() {
    let markup = marked(this.props.description.trim(), { sanitize: true });

    return (
      <div className="sg sg-section-description" dangerouslySetInnerHTML={{__html: markup}} />
    );
  }

  createExample() {
    let className = `sg sg-section-example ${this.props.className ? this.props.className : ''}`;

    return (
      <section className={className}>
        {this.props.children}
      </section>
    );
  }

  createCode() {
    return (
      <section className="sg sg-section-code">
        <pre className="sg">
          <code className="sg xml" ref="code">{this.props.code.trim()}</code>
        </pre>
      </section>
    );
  }

  render() {
    return (
      <section className="sg sg-section">
        {this.props.category && this.props.title && this.createHeading()}
        {this.props.description && this.createDescription()}
        {this.props.children && this.createExample()}
        {this.props.code && this.createCode()}
      </section>
    );
  }
}
