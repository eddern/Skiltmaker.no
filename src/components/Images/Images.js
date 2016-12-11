import React, { Component } from 'react';
import Image from './Image'

class Images extends Component {
  render() {
    return (
      <div className="images">
        <h2>Images</h2>
        <div className="image-grid">
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </div>
    );
  }
}

export default Images;
