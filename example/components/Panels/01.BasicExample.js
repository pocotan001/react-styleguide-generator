import React from 'react';
import { Panel } from 'react-bootstrap';

export default class PanelsBasicExample extends React.Component {
  static styleguide = {
    category: 'Panels',
    title: '01. Basic example',
    description: 'By default, all the <Panel /> does is apply some basic border and padding to contain some content.',
    code: `<Panel>
  Basic panel example
</Panel>`
  };

  render() {
    return (
      <Panel>
        Basic panel example
      </Panel>
    );
  }
}
