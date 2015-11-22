import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '4.2',
    category: 'Modals',
    title: 'Live demo',
    description: 'Use `<ModalTrigger />` to create a real modal that\'s added to the document body when opened.',
    code: `
<div>
  <Button
    bsStyle="primary"
    bsSize="large"
    onClick={this.open.bind(this)}
  >
    Launch demo modal
  </Button>
  {this.renderModal()}
</div>
    `
  }

  state = {
    showModal: false
  };

  close () {
    this.setState({ showModal: false });
  }

  open () {
    this.setState({ showModal: true });
  }

  renderModal () {
    return (
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

          <hr />

          <h4>Overflowing text to show scroll behavior</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render () {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
        >
          Launch demo modal
        </Button>
        {this.renderModal()}
      </div>
    )
  }
}
