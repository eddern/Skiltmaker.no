import React, { Component } from 'react'
import Image from './Image'
import $ from 'jquery'
import InfiniteScroll from "react-infinite-scroller"
import Scroll from 'react-scroll'

/*
TODO: Legg til placeholder bilde
*/
class Images extends Component {

  constructor() {
    super()
    this.state = {
      nexturl: 'https://api.instagram.com/v1/users/3017821590/media/recent?access_token=3017821590.1677ed0.21c3cbc98fc1494e822ae09f6009a3ac&count=12',
      images: [],
      hasMoreImages: true
    }
  }

  loadImages(){
    if(this.state.nexturl == null){
      this.state.hasMoreImages = false
    }else{
      $.ajax({
        url: this.state.nexturl,
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
  }

  toTop() {
    Scroll.animateScroll.scrollToTop()
  }


  render() {
    var images = []
    for (var i = 0; i < this.state.images.length; i++) {
      images.push(<Image key={i} data={this.state.images[i]} />)
    }

    return (
      <div className="images">
        <div className="image-grid">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadImages.bind(this)}
            hasMore={this.state.hasMoreImages}
            threshold={300}>
            {images}
          </InfiniteScroll>
        </div>
        <i className="fa fa-3x fa-chevron-up up-to-top" aria-hidden="true" onClick={this.toTop.bind(this)}></i>
      </div>
    );
  }
}

export default Images;
