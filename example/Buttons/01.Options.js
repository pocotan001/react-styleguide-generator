import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class ButtonsOptions extends React.Component {
  static styleguide = {
    category: 'Buttons',
    title: '01. Options',
    description: `Use any of the available button style types to quickly create a styled button. Just modify the \`bsStyle\` prop.`,
    code: `<Button bsStyle="primary|success|info|warning|danger|link">Button</Button>`
  };

  render() {
    return (
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="success">Success</Button>
        <Button bsStyle="info">Info</Button>
        <Button bsStyle="warning">Warning</Button>
        <Button bsStyle="danger">Danger</Button>
        <Button bsStyle="link">Link</Button>
      </ButtonToolbar>
    );
  }
}
