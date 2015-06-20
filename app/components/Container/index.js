import React, { Component, PropTypes } from 'react'

export default class Container extends Component {
  static displayName = 'SG.Container'

  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div className='sg-container'>
        {this.props.children}
      </div>
    )
  }
}
