import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

export default class extends React.Component {
  static styleguide = {
    category: 'Buttons',
    title: '02. Button groups',
    description: 'Group a series of buttons together on a single line with the button group.',
    code: `
<ButtonGroup>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>
    `
  };

  render() {
    return (
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    );
  }
}
