import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

const content = 'Panel content'
const title = <h3>Panel title</h3>

export default class extends Component {

  static styleguide = {
    index: '2.1',
    category: 'Panels',
    title: 'Panel example',
    description: 'By default, all the `<Panel />` does is apply some basic border and padding to contain some content.',
    code: `
<Panel>
  ${content}
</Panel>
`,
    children: content,
    // Component to use when creating additional examples; required with es6 react
    // not required in es5 react + rsg-mixin
    exampleComponent: Panel,
    examples: [
      {
        tabTitle: 'Primary',
        props: {
          header: title,
          bsStyle: 'primary',
          children: content
        }
      },
      {
        tabTitle: 'Success',
        props: {
          header: title,
          bsStyle: 'success',
          children: content
        }
      },
      {
        tabTitle: 'Info',
        props: {
          header: title,
          bsStyle: 'info',
          children: content
        }
      },
      {
        tabTitle: 'Warning',
        props: {
          header: title,
          bsStyle: 'warning',
          children: content
        }
      },
      {
        tabTitle: 'Danger',
        props: {
          header: title,
          bsStyle: 'danger',
          children: content
        }
      }
    ]
  }

  render () {
    return (
      <Panel>{content}</Panel>
    )
  }
}

