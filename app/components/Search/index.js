import React, { PropTypes } from 'react';
import page from 'page';

export default class Search extends React.Component {
  static displayName = 'SG.Search';

  static propTypes = {
    value: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp);
  }

  focus() {
    let input = React.findDOMNode(this.refs.q);

    input.focus();
  }

  /**
   * @param {Event} e
   */
  onKeyUp(e) {
    const S_KEY = 83;

    if (e.keyCode === S_KEY) {
      this.focus();
    }
  }

  /**
   * @param {Event} e
   */
  onSubmit(e) {
    let val = React.findDOMNode(this.refs.q).value;
    let url = `/search/${val}`;

    e.preventDefault();

    if (url !== page.current) {
      page.show(`/search/${val}`);
    }
  }

  render() {
    return (
      <form className="sg sg-search" onSubmit={this.onSubmit.bind(this)}>
        <button className="sg sg-search-submit" type="submit">
          <i className="fa fa-search fa-fw" />
        </button>
        <input
          className="sg sg-search-input"
          type="text"
          ref="q"
          placeholder="Search Components"
          autoFocus={true}
          defaultValue={this.props.defaultValue}
        />
      </form>
    );
  }
}
