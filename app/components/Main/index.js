import React, { Component, PropTypes } from 'react'

export default class Main extends Component {
  static displayName = 'SG.Main'

  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <main className='sg-main'>
        {this.props.children}
      </main>
    )
  }
}
