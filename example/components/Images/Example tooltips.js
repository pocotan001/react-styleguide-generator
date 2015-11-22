import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '3.1',
    category: 'Images',
    title: 'Example images',
    description: 'Use the `rounded`, `circle` and `thumbnail` props to customise the image.',
    code: `
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Image src="http://lorempixel.com/120/120?1" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="http://lorempixel.com/120/120?2" circle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="http://lorempixel.com/120/120?3" thumbnail />
    </Col>
  </Row>
</Grid>
`
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Image src="http://lorempixel.com/120/120?1" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="http://lorempixel.com/120/120?2" circle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="http://lorempixel.com/120/120?3" thumbnail />
          </Col>
        </Row>
      </Grid>
    )
  }
}
