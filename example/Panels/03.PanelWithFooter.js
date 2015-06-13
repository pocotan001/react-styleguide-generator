import React from 'react';
import { Panel } from 'react-bootstrap';

export default class PanelsPanelWithFooter extends React.Component {
  static styleguide = {
    category: 'Panels',
    title: '03. Panel with footer',
    description: 'Pass buttons or secondary text in the footer prop. Note that panel footers do not inherit colors and borders when using contextual variations as they are not meant to be in the foreground.',
    code: `<Panel footer="Panel footer">
  Panel content
</Panel>`
  };

  render() {
    return (
      <Panel footer="Panel footer">
        Panel content
      </Panel>
    );
  }
}
