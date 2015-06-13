import React from 'react';
import { Button } from 'react-bootstrap';

export default class ButtonsButtonLoadingState extends React.Component {
  static styleguide = {
    category: 'Buttons',
    title: '06. Button loading state',
    description: 'When activating an asynchronous action from a button it is a good UX pattern to give the user feedback as to the loading state, this can easily be done by updating your <Button />’s props from a state change like below.'
  };

  state = {
    isLoading: false
  };

  handleClick() {
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(() => {

      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  }

  render() {
    let isLoading = this.state.isLoading;

    return (
      <Button
        bsStyle="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick.bind(this) : null}>
        {isLoading ? 'Loading...' : 'Loading state'}
      </Button>
    );
  }
}
