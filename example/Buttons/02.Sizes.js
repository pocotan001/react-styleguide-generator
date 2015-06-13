import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class ButtonsSizes extends React.Component {
  static styleguide = {
    category: 'Buttons',
    title: '02. Sizes',
    description: 'Fancy larger or smaller buttons? Add bsSize="large", bsSize="small", or bsSize="xsmall" for additional sizes.',
    code: `<Button bsSize="large|small|xsmall">Button</Button>`
  };

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Large button</Button>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary">Default button</Button>
          <Button>Default button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small">Small button</Button>
          <Button bsSize="small">Small button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
          <Button bsSize="xsmall">Extra small button</Button>
        </ButtonToolbar>
      </div>
    );
  }
}
