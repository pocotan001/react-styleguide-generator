import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    category: 'Panels',
    title: '02. Panel with heading',
    description: 'Easily add a heading container to your panel with the header prop.',
    code: `<Panel header='Panel heading without title'>
  Panel content
</Panel>

<Panel header={title}>
  Panel content
</Panel>`
  }

  render () {
    let title = <h3>Panel title</h3>

    return (
      <div>
        <Panel header='Panel heading without title'>
          Panel content
        </Panel>
        <Panel header={title}>
          Panel content
        </Panel>
      </div>
    )
  }
}
