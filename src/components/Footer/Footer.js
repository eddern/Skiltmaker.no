import React, { Component } from 'react'

class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="footer-content">
          <div><i className="fa fa-copyright" aria-hidden="true"></i> Skiltmaker Sjøblom, alle rettigheter reservert.</div>
          <div>
            Nettside laget av <a href="https://www.espenmeidell.no">Espen</a> og <a href="https://www.eddern.no">Edvard</a>.
             <a href="https://github.com/eddern/Skiltmaker.no"><i className="fa fa-github" aria-hidden="true"></i></a></div>
        </div>
      </footer>
    )
  }
}

export default Footer
