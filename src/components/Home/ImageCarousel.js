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
        slidesToShow={3}
        wrapAround={true}
        cellSpacing={20}
        autoplayInterval={2500}
        decorators={Decorators}>
        <img src={bil} alt="bil dekor" />
        <img src={liteskilt} alt="småskilt" />
        <img src={cutout} alt="utkuttet skilt" />
        <img src={folie} alt="heldekkende folie" />
        <img src={lys} alt="skilt med lys" />
        <img src={flagg} alt="flagg og bannere" />
      </Carousel>
    )
  }
}
export default ImageCarousel
