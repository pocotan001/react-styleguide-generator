import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class ButtonsDisabledState extends React.Component {
  static styleguide = {
    category: 'Buttons',
    title: '04. Disabled state',
    description: 'Make buttons look unclickable by fading them back 50%. To do this add the disabled attribute to buttons.',
    code: `<Button disabled>Button</Button>`
  };

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
        <Button bsSize="large" disabled>Button</Button>
      </ButtonToolbar>
    );
  }
}
