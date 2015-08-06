import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

/**
 * Use any of the available button style types to quickly create a styled button. Just modify the `bsStyle` prop.
 *
 * (This description is defined above the class definition in code.)
 */
export default class extends Component {
  // displayName is required for props documentation
  static displayName = 'DocCommentExample'

  static styleguide = {
    index: '5.2',
    category: 'Features :)',
    title: 'Additional examples via doc comment',
    code: `<Button block bsStyle='primary'>Primary</Button>`
  }

  static propTypes = {
    /**
     * Block level
     */
    block: React.PropTypes.bool.isRequired,
    /**
     * Style types `'default|primary|success|info'`
     */
    bsStyle: React.PropTypes.oneOf(['default', 'primary', 'success', 'info'])
  }

  static defaultProps = {
    bsStyle: 'default'
  }

  render () {
    return <Button block bsStyle='primary'>Primary</Button>
  }
}
