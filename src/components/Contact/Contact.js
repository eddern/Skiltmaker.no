import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>Ta kontakt!</h1>
        <p className="contact_info">
          <span className="glyphicon glyphicon-earphone"></span> 11 22 33 44
          <br/>
          <span className="glyphicon glyphicon-envelope"></span> <a href="mailto:post@skiltmaker.no">post@skiltmaker.no</a>
        </p>
      </div>
    );
  }
}

export default Contact;
