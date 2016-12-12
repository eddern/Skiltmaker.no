import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <table>
          <tr>
            <td colSpan="2"><h1>Kontaktinformasjon</h1></td>
          </tr>
          <tr>
            <td><i className="fa fa-lg fa-mobile" aria-hidden="true"></i></td><td><a href="tel:+4791158975">+47 911 58 975</a></td>
          </tr>
          <tr>
            <td><i className="fa fa-phone" aria-hidden="true"></i></td><td><a href="tel:+4722490606">+47 22 49 06 06</a></td>
          </tr>
          <tr>
            <td><i className="fa fa-fax" aria-hidden="true"></i></td><td><a href="fax:+4722920602">+47 22 92 06 02</a></td>
          </tr>
          <tr>
            <td><i className="fa fa-at" aria-hidden="true"></i></td><td><a href="mailto:post@skiltmaker.no">post@skiltmaker.no</a></td>
          </tr>
          <tr>
            <td><i className="fa fa-envelope-o" aria-hidden="true"></i></td><td>Arnebråtveien 34<br/>0771 Oslo</td>
          </tr>
        </table>

      </div>
    );
  }
}

export default Contact;
