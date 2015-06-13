import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class ButtonsButtonTags extends React.Component {
  static styleguide = {
    category: 'Buttons',
    title: '05. Button tags',
    description: 'The DOM element tag is choosen automatically for you based on the props you supply. Passing a href will result in the button using a <a /> element otherwise a <button /> element will be used.',
    code: `<Button href="#">Link</Button>
<Button>Button</Button>`
  };

  render() {
    return (
      <ButtonToolbar>
        <Button href="#">Link</Button>
        <Button>Button</Button>
      </ButtonToolbar>
    );
  }
}
