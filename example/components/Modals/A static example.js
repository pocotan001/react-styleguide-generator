import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '3.1',
    category: 'Modals',
    title: 'A static example',
    description: `
A rendered modal with header, body, and set of actions in the footer.

The header is added automatically if you pass in a \`title\` prop.
`,
    code: `
<ModalTrigger modal={MyModal}>
  <Button bsStyle='primary' bsSize='large'>Launch demo modal</Button>
</ModalTrigger>
    `
  }

  render () {
    return (
      <div className='static-modal'>
        <Modal title='Modal title'
          enforceFocus={false}
          backdrop={false}
          animation={false}
          onRequestHide={function () {}}>
          <div className='modal-body'>
            One fine body...
          </div>
          <div className='modal-footer'>
            <Button>Close</Button>
            <Button bsStyle='primary'>Save changes</Button>
          </div>
        </Modal>
      </div>
    )
  }
}
