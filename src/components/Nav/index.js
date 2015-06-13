import React, { PropTypes } from 'react';
import contents from '../../utils/contents';

export default class Nav extends React.Component {
  static displayName = 'SG.Nav';

  static propTypes = {
    selectedCategory: PropTypes.string
  };

  render() {
    return (
      <nav>
        <ul className="sg sg-nav">
          {contents.categories
            .map((category, i) => {
              let isSelected = this.props.selectedCategory === category;

              return (
                <li className="sg" key={i}>
                  <a
                    className={`sg sg-nav-link ${isSelected ? 'is-selected' : ''}`}
                    href={category}
                  >
                    <i className={`fa fa-fw ${isSelected ? 'fa-dot-circle-o' : 'fa-circle-o'}`} />
                    {category}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    );
  }
}
