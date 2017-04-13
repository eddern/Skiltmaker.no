import React, { Component } from 'react'
import ImageCarousel from './ImageCarousel'
import { Link, browserHistory } from "react-router"

class Home extends Component {

  componentWillMount() {
    if ('galleri' in this.props.location.query) {
      browserHistory.push('/galleri')
    } else if ('kontakt' in this.props.location.query) {
      browserHistory.push('/kontakt')
    }
  }


  render() {
    return (
      <div className="App">
        <ImageCarousel />
        <div className="home-text">
          <h1>Skilt & dekor - mer enn du tror</h1>
          <h2><i>Skiltmaker Sjøblom har produsert skilt og dekor i over 25 år.</i></h2>
          <p>Skilt er den nye oljen!</p>
          <p>-Neida, men profilering er en viktig del av kommunikasjonen i samfunnet.
            Vi står i første linje sammen med næringsliv og offentlige institusjoner
            i kampen om å få frem budskap, enten det er hva som er hvor,
            eller hvor som er best <i className="fa fa-smile-o" aria-hidden="true"></i>
          </p>

          <p>Mye av identiteten til bedrifter vises frem i skiltingen. Det er viktig med et godt førsteinntrykk,
            nettopp det har vi skapt sammen med designere og arkitekter i mange år. Eksempler på dette ser du i mitt <Link to="/galleri">galleri</Link>.
            <br />
            Nye jobber legges stadig til.
          </p>
          <p>
            Ta kontakt for en prat, sammen finner vi gode løsninger.
          </p>
        </div>
      </div>
    );
  }
}
/* <Link to="/kontakt">her.</Link> */
export default Home
