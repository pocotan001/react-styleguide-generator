import React, { Component } from 'react'
import { ModalTrigger, Modal, Button } from 'react-bootstrap'

class MyModal extends Component {
  render () {
    return (
      <Modal {...this.props} title='Modal heading' animation={false}>
        <div className='modal-body'>
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

          <hr />

          <h4>Overflowing text to show scroll behavior</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
        <div className='modal-footer'>
          <Button onClick={this.props.onRequestHide}>Close</Button>
        </div>
      </Modal>
    )
  }
}

export default class extends Component {
  static styleguide = {
    index: '3.2',
    category: 'Modals',
    title: 'Live demo',
    description: 'Use `<ModalTrigger />` to create a real modal that\'s added to the document body when opened.',
    code: `
<ModalTrigger modal={MyModal}>
  <Button bsStyle='primary' bsSize='large'>Launch demo modal</Button>
</ModalTrigger>
    `
  }

  render () {
    return (
      <ModalTrigger modal={<MyModal />}>
        <Button bsStyle='primary' bsSize='large'>Launch demo modal</Button>
      </ModalTrigger>
    )
  }
}
