import React, { Component } from 'react'
import ImageCarousel from './ImageCarousel'
import { Link } from "react-router"
import Image from "../Images/Image"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <ImageCarousel />
        <div className="home-text">
          <h1>Skilt og dekor</h1>
          <h2>mer enn du tror!</h2>
          <p>
            Skiltmaker Sjøblom har produsert skilt og dekor av høy kvalitet i over 20 år!
            Over denne perioden har jeg opparbeidet meg erfaring med alle typer skilt.
            Om du skal dekorere siden av en båt eller industribygget ditt trenger nytt
            skilt på 50 m2 så kan jeg hjelpe deg! Dersom du er ute etter inspirasjon kan
            du ta en titt på <Link to="/galleri">galleriet</Link> mitt. Der finner du et stort
            utvalg over ting jeg har laget.
            <br/><br/>
            Ta gjerne kontakt for en hyggelig prat hvis du lurer på noe. Kontaktinformasjon finner
            du <Link to="/kontakt">her.</Link>

          </p>
        </div>
      </div>
    );
  }
}

export default Home
