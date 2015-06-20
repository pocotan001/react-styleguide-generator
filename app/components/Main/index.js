import React from 'react';

export default class Main extends React.Component {
  static displayName = 'SG.Main';

  render() {
    return (
      <main className="sg-main">
        {this.props.children}
      </main>
    );
  }
}
