import React from 'react'

/**
 * This is the base component file, not to be used as input into the RSG.
 * However, we will use src files like this against react-docgen to
 * document the propTypes, enabled via the reactDocgen.enabled
 * and reactDocgen.files config properties
 *
 * Note we cannot create components using ES6 classes (for now)
 * when using react-docgen
 *
 * @todo Change to es6 classes when the following is resolved:
 * https://github.com/reactjs/react-docgen/issues/10
 */
const TextInput = React.createClass({
  //DisplayName is required for storing generated props metadata
  displayName: 'TextInput',
  statics: {
    // the styleguide core props can be defined in this base component
    // while the example component will use a mixin to copy the props over
    // from the base
    styleguide: {
      index: '1.1',
      category: 'React Docgen',
      title: 'Text Input',
      description: 'You can use **Markdown** within this `description` field. This is an example that uses ' +
      '`react-docgen` to generate documentation on your component `props`'
    }
  },
  propTypes: {
    /**
     * A react stylesheet to apply
     */
    text: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      text: 'Default value!'
    }
  },
  render: function () {
    return (
      <input type="text" defaultValue={this.props.text} />
    )
  }
})

module.exports = TextInput