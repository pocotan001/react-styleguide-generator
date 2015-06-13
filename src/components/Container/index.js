import React from 'react';

export default class Container extends React.Component {
  static displayName = 'SG.Container';

  render() {
    return (
      <div className="sg-container">
        {this.props.children}
      </div>
    );
  }
}
