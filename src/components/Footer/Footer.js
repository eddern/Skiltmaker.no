import React, { Component } from 'react'

class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="footer-content">
          <div className="copyright-text"><i className="fa fa-copyright" aria-hidden="true"></i> Skiltmaker Sjøblom, alle rettigheter reservert.</div>
          <div>
            Nettside laget av <a href="https://www.linkedin.com/in/espen-meidell/">Espen</a> og <a href="https://www.linkedin.com/in/edvardsj/">Edvard</a>.
             <a href="https://github.com/eddern/Skiltmaker.no"><i className="fa fa-github" aria-hidden="true"></i></a></div>
        </div>
      </footer>
    )
  }
}

export default Footer
