import React, { Component } from 'react'
import Image from './Image'
import $ from 'jquery'
import InfiniteScroll from "react-infinite-scroller"
import Scroll from 'react-scroll'
var Spinner = require('react-spinkit');
/*
TODO: 2 bilder på pad
*/
class Images extends Component {

  constructor() {
    super()
    this.state = {
      nexturl: 'https://api.instagram.com/v1/users/3017821590/media/recent?access_token=3017821590.1677ed0.21c3cbc98fc1494e822ae09f6009a3ac&count=12',
      images: [],
      hasMoreImages: true,
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll(event) {
    let st = event.srcElement.body.scrollTop

    if(st > 1000){
      $('.up-to-top').css("display","block");
      $('.up-to-top').removeClass("slideOutRight");
      $('.up-to-top').addClass("slideInRight");
    }else if(st < 400){
      $('.up-to-top').addClass("slideOutRight");
    }
  }

  loadImages(){
    if(this.state.nexturl == null){
      this.setState({hasMoreImages: false})
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
        <div className="image-grid slideInUp animated">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadImages.bind(this)}
            hasMore={this.state.hasMoreImages}
            threshold={300}>
            {images}
          </InfiniteScroll>
        </div>
        {this.state.hasMoreImages && <Spinner spinnerName='three-bounce' />}
        {!this.state.hasMoreImages && <i className="fa fa-4x fa-check  check" aria-hidden="true"/>}
        <div className="up-to-top animated" onClick={this.toTop.bind(this)}><i className="fa fa-3x fa-chevron-up" aria-hidden="true"></i></div>
      </div>
    );
  }
}

export default Images;
