import React, { Component } from 'react';
import Image from './Image'
import $ from 'jquery'

class Images extends Component {

  constructor() {
    super()
    this.state = {
      nexturl: 'https://api.instagram.com/v1/users/3017821590/media/recent?access_token=3017821590.1677ed0.21c3cbc98fc1494e822ae09f6009a3ac&count=24',
      images: []
    }
  }



  componentWillMount() {
    $.ajax({
      url: 'https://api.instagram.com/v1/users/3017821590/media/recent?access_token=3017821590.1677ed0.21c3cbc98fc1494e822ae09f6009a3ac&count=24',
      type: "GET",
      crossDomain: true,
      dataType: "jsonp",
      success: (data) => {
        var newImages = this.state.images.concat(data.data)
        this.setState({
          nexturl: data.pagination.next_url,
          images: newImages
        })
      }
    })

  }


  render() {
    var images = []
    for (var i = 0; i < this.state.images.length; i++) {
      images.push(<Image key={i} data={this.state.images[i]} />)
    }

    return (
      <div className="images">
        <h2>Images</h2>
        <div className="image-grid">
          {images}
        </div>
      </div>
    );
  }
}

export default Images;
