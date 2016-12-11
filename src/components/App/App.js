import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>espenmeidell.no</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
