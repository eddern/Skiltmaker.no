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

    /* number of pictures to show in the carousel */
    function getWidth() {
      if (self.innerWidth) {
        return self.innerWidth;
      }
      if (document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth;
      }
      if (document.body) {
        return document.body.clientWidth;
      }
    }
    var screenWidth = getWidth();
    var numberOfPictures = 1
    if(screenWidth > 1200){
      numberOfPictures = 3
    }else if(screenWidth > 767){
      numberOfPictures = 2
    }else{
      numberOfPictures = 1
    }


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
        slidesToShow={numberOfPictures}
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
