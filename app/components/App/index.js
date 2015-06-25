import React, { Component, PropTypes } from 'react'
import Container from '../Container'
import Header from '../Header'
import Main from '../Main'

export default class App extends Component {
  static displayName = 'SG.App'

  static propTypes = {
    ctx: PropTypes.object.isRequired
  }

  render () {
    return (
      <Container>
        <Header ctx={this.props.ctx} />
        <Main ctx={this.props.ctx} />
      </Container>
    )
  }
}
