import React, { Component, PropTypes } from 'react'
import page from 'page'

export default class Search extends Component {
  static displayName = 'SG.Search'

  static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.onKeyUp = this.onKeyUp.bind(this)
  }

  componentDidMount () {
    window.addEventListener('keyup', this.onKeyUp)
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.onKeyUp)
  }

  focus () {
    let input = this.refs.q

    input.focus()
  }

  /**
   * @param {Event} e
   */
  onKeyUp (e) {
    const S_KEY = 83

    if (e.keyCode === S_KEY) {
      this.focus()
    }
  }

  /**
   * @param {Event} e
   */
  onSubmit (e) {
    let val = this.refs.q.value
    let url = `/search/${val}`

    e.preventDefault()

    if (url !== page.current) {
      page.show(`/search/${val}`)
    }
  }

  render () {
    return (
      <form className='sg sg-search' onSubmit={this.onSubmit.bind(this)}>
        <button className='sg sg-search-submit' type='submit'>
          <i className='fa fa-search fa-fw' />
        </button>
        <input
          className='sg sg-search-input'
          type='text'
          ref='q'
          placeholder='Search Components'
          autoFocus
          defaultValue={this.props.defaultValue}
        />
      </form>
    )
  }
}
