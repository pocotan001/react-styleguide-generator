import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

const content = 'Panel content'
const title = <h3>Panel title</h3>

/**
 * By default, all the `<Panel />` does is apply some basic border and padding to contain some content.
 *
 * (This description is defined above the class definition in code.)
 */
export default class extends Component {

  // displayName is required for props documentation
  static displayName = 'PanelExample'

  static styleguide = {
    index: '2.1',
    category: 'Panels',
    title: 'Panel example',
    code: `
<Panel>
  ${content}
</Panel>
`,
    // Component to use when creating additional examples
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

  static propTypes = {
    /**
     * Header title
     */
    header: React.PropTypes.object,
    /**
     * Panel style class
     */
    bsStyle: React.PropTypes.string
  }

  render () {
    return (
      <Panel>{content}</Panel>
    )
  }
}
