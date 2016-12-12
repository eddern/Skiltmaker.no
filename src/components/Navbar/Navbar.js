import React, { Component } from 'react'
import { Link } from "react-router"
import Logo from './logo.png'

class Navbar extends Component {
  render() {
    console.log(location.pathname)
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
            <Link to="/"><img className="logo" src={Logo} /></Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className={location.pathname == '/' ? 'active' : ''}><Link to="/">Hjem</Link></li>
              <li className={location.pathname == '/galleri' ? 'active' : ''}><Link to="/galleri">Galleri</Link></li>
              <li className={location.pathname == '/kontakt' ? 'active' : ''}><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
