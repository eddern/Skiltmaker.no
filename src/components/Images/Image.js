import React, { Component } from 'react';

class Images extends Component {
  render() {
    return (
      <div className="image">
        <img src="http://placehold.it/320x320"/>
        <h3>This is an image.</h3>
      </div>
    );
  }
}

export default Images;
