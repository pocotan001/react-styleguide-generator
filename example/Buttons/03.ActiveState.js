import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class ButtonsActiveState extends React.Component {
  static styleguide = {
    category: 'Buttons',
    title: '03. Active state',
    description: 'To set a buttons active state simply set the components active prop.',
    code: `<Button active>Button</Button>`
  };

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
        <Button bsSize="large" active>Button</Button>
      </ButtonToolbar>
    );
  }
}
