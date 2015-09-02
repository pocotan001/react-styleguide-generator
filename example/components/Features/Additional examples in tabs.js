import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '5.1',
    category: 'Features!',
    title: 'Additional examples in tabs',
    description: 'Use any of the available button style types to quickly create a styled button. Just modify the `bsStyle` prop.',

    // Component to use when creating additional examples
    exampleComponent: Button,
    examples: [{
      tabTitle: 'Default',
      props: {
        children: 'Default'
      }
    }, {
      tabTitle: 'Primary',
      props: {
        bsStyle: 'primary',
        children: 'Primary'
      }
    }, {
      tabTitle: 'Success',
      props: {
        bsStyle: 'success',
        children: 'Success'
      }
    }, {
      tabTitle: 'Info',
      props: {
        bsStyle: 'info',
        children: 'Info'
      }
    }]
  }
}
