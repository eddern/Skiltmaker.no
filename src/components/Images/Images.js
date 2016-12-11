import React, { Component } from 'react';
import Image from './Image'

class Images extends Component {

  constructor() {
    super()

  }

  componentWillMount() {
    const url = 'https://api.instagram.com/v1/users/3017821590/media/recent?access_token=3017821590.1677ed0.21c3cbc98fc1494e822ae09f6009a3ac'
    var headers = { method: 'GET',
               mode: 'no-cors',
               cache: 'default'}
    fetch(url, headers)
      .then((response) => {
        console.log("got response")
        console.log(JSON.parse(response))
      })
      .catch((error) => {
        console.log(error)
      })

  }


  render() {
    return (
      <div className="images">
        <h2>Images</h2>
        <div className="image-grid">
          <Image data="Yo" />
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
