import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    category: 'Panels',
    title: '04. Contextual alternatives',
    description: 'Like other components, easily make a panel more meaningful to a particular context by adding a bsStyle prop.',
    code: `<Panel
  header={title}
  bsStyle='primary|success|info|warning|danger'
>
  Panel content
</Panel>`
  }

  render () {
    let title = <h3>Panel title</h3>

    return (
      <div>
        <Panel header={title}>
          Panel content
        </Panel>

        <Panel header={title} bsStyle='primary'>
          Panel content
        </Panel>

        <Panel header={title} bsStyle='success'>
          Panel content
        </Panel>

        <Panel header={title} bsStyle='info'>
          Panel content
        </Panel>

        <Panel header={title} bsStyle='warning'>
          Panel content
        </Panel>

        <Panel header={title} bsStyle='danger'>
          Panel content
        </Panel>
      </div>
    )
  }
}
