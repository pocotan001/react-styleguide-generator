'use strict'

const React = require('react')

/**
 * A convenience wrapper for <select> <option> ... </select>
 */
const InputSelect = React.createClass({
  displayName: 'SelectExample',
  propTypes: {
    /**
     * A react stylesheet to apply
     */
    stylesheet: React.PropTypes.object,
    /**
     * The selected value in the drop-down (or null for uncontrolled drop-down box)
     */
    value: React.PropTypes.string,
    /**
     * The list of values for the drop-down
     */
    values: React.PropTypes.array,
    /**
     * An optional function to convert the list item to a string value in <option>
     */
    valueFn: React.PropTypes.func,
    /**
     * An optional function to convert the list item to a string value to for display
     */
    textFn: React.PropTypes.func,
    /**
     * Pass-through onChange event for <select>
     */
    onChange: React.PropTypes.func,
    /**
     * Default text to show when values is not defined
     */
    defaultText: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      stylesheet: {},
      defaultText: 'Loading...'
    }
  },

  renderItems() {
    let values = this.props.values
    if (values) {
      let valueFn = this.props.valueFn
      let textFn = this.props.textFn
      return values.map(value => {
        let val = valueFn ? valueFn(value) : value
        let text = textFn ? textFn(value) : value
        return <option key={val||text} value={val}>{text}</option>
      })
    }
    return <option disabled>{this.props.defaultText}</option>
  },

  render() {
    return (
      <select value={this.props.value} onChange={this.props.onChange}>
        {this.renderItems()}
      </select>
    )
  }
})

module.exports = InputSelect