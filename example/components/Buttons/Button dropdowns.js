import React, { Component } from 'react'
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link']

export default class extends Component {
  static styleguide = {
    index: '1.3',
    category: 'Buttons',
    title: 'Button dropdowns',
    description: 'Use `<DropdownButton />` or `<SplitButton />` components to display a button with a dropdown menu.',
    code: `
<DropdownButton bsStyle='primary' title='Primary'>
  <MenuItem eventKey='1'>Action</MenuItem>
  <MenuItem eventKey='2'>Another action</MenuItem>
  <MenuItem eventKey='3' active={true}>Active Item</MenuItem>
  <MenuItem divider />
  <MenuItem eventKey='4'>Separated link</MenuItem>
</DropdownButton>
    `
  }

  renderDropdownButton (title, i) {
    return (
      <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i}>
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3' active={true}>Active Item</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </DropdownButton>
    )
  }

  render () {
    return (
      <ButtonToolbar>
        {BUTTONS.map(this.renderDropdownButton)}
      </ButtonToolbar>
    )
  }
}
