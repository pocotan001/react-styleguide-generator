import React, { Component, PropTypes } from 'react'
import Sections from '../Sections'

export default class Main extends Component {
  static displayName = 'SG.Main'

  static propTypes = {
    ctx: PropTypes.object.isRequired
  }

  render () {
    return (
      <main className='sg-main'>
        <Sections ctx={this.props.ctx} />
      </main>
    )
  }
}
