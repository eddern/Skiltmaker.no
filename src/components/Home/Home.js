import React, { Component } from 'react'
import ImageCarousel from './ImageCarousel'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <ImageCarousel />
        <div className="home-text">
          <h1>Skilt og dekor</h1>
          <h2>mer enn du tror!</h2>
          <p>
            Nam sed blandit lacus. Etiam quis nulla non lectus faucibus imperdiet fermentum sed lacus. Curabitur tempor purus in arcu tempor tincidunt vitae eget eros. Suspendisse varius pretium velit venenatis malesuada. Cras sed nulla non arcu condimentum pretium. Cras vel varius arcu. Nunc eu risus luctus risus iaculis molestie. Nullam lobortis eu turpis in dictum. Morbi commodo hendrerit mi in mattis. Ut auctor feugiat massa id pretium.
          </p>
        </div>
      </div>
    );
  }
}

export default Home
