import React, { Component } from 'react'
import { Link } from "react-router"; 

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Skilmaker Sjøblom</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Hjem</Link></li>
              <li><Link to="/bilder">Bilder</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
