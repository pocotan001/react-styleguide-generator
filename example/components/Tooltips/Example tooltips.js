import React, { Component } from 'react'
import { Tooltip } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '4.1',
    category: 'Tooltips',
    title: 'Example tooltips',
    description: 'Tooltip component.',
    code: `
<div style={{ height: 50 }}>
  <Tooltip placement='right' positionLeft={100} positionTop={35}>
    <strong>Holy guacamole!</strong> Check this info.
  </Tooltip>
</div>
`
  }

  render () {
    return (
      <div style={{ height: 50 }}>
        <Tooltip placement='right' positionLeft={100} positionTop={35}>
          <strong>Holy guacamole!</strong> Check this info.
        </Tooltip>
      </div>
    )
  }
}
