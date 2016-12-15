import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

import bil from './slideshow/bil.jpg'
import cutout from './slideshow/cutout.jpg'
import flagg from './slideshow/flagg.jpg'
import folie from './slideshow/folie.jpg'
import liteskilt from './slideshow/liteskilt.jpg'
import lys from './slideshow/lys.jpg'


/*
TODO: Legg til text på bilder
TODO: Fixe størrelsen med 3 bilder problemet
*/
class ImageCarousel extends Component {
  constructor(){
    super()
    this.state = {numbImages : 1}
    window.onresize = this.adaptScreenWidth.bind(this)
  }




  adaptScreenWidth(){
    let width = 500;
    if (self.innerWidth) {
      width = self.innerWidth;
    }
    else if (document.documentElement && document.documentElement.clientWidth) {
      width = document.documentElement.clientWidth;
    }
    else if (document.body) {
      width = document.body.clientWidth;
    }
    if(width > 1200){
      this.setState({numbImages: 3})
    }else if(width > 600){
      this.setState({numbImages: 2})
    }else{
      this.setState({numbImages: 1})
    }

  }

  mixins: [Carousel.ControllerMixin]

  render(){

    var Decorators = [{
      component: React.createClass({
        render() {
          return (
            <button className="carousel-btn" onClick={this.props.previousSlide}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
          )
        }
      }),
      position: 'CenterLeft',
      style: {
        color: "#FFF",
        fontSize: "200%"
      }
    },
    {
      component: React.createClass({
        render() {
          return (
            <button className="carousel-btn" onClick={this.props.nextSlide}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
          )
        }
      }),
      position: 'CenterRight',
      style: {

        color: "#FFF",
        fontSize: "200%"
      }
    }];

    return (
      <Carousel
        autoplay={true}
        initialSlideHeight={640}
        slidesToShow={this.state.numbImages}
        wrapAround={true}
        cellSpacing={20}
        autoplayInterval={2500}
        decorators={Decorators}>
        <div>
          <img src={bil} onLoad={() => {window.dispatchEvent(new Event('resize'));}} alt="bildekor" />
          <h1 className="carousel-text">Bil-dekor</h1>
        </div>
        <div>
          <img src={liteskilt} alt="småskilt" />
          <h1 className="carousel-text">Småskilt</h1>
        </div>
        <div>
          <img src ={cutout} alt="utkuttet skilt" />
          <h1 className="carousel-text">Utkuttet stål</h1>
        </div>
        <div>
          <img src={folie} alt="heldekkende folie" />
          <h1 className="carousel-text">Heldekkende folie</h1>
        </div>
        <div>
          <img src={lys} alt="skilt med lys" />
          <h1 className="carousel-text">Lysskilt</h1>
        </div>
        <div>
          <img src={flagg} alt="flagg og bannere" />
          <h1 className="carousel-text">Flagg og bannere</h1>
        </div>
      </Carousel>
    )
  }
}
export default ImageCarousel
