import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <table>
          <tbody>
            <tr>
              <td colSpan="3"><h1>Kontaktinformasjon</h1></td>
            </tr>
            <tr>
              <td className="contact-icon"><i className="fa fa-lg fa-mobile" aria-hidden="true"></i></td>
              <td className="contact-label">Mobil:</td>
              <td><a href="tel:+4791158975">+47 911 58 975</a></td>
            </tr>
            <tr>
              <td className="contact-icon"><i className="fa fa-phone" aria-hidden="true"></i></td>
              <td className="contact-label">Jobb:</td>
              <td><a href="tel:+4722490606">+47 22 49 06 06</a></td>
            </tr>
            <tr>
              <td className="contact-icon"><i className="fa fa-fax" aria-hidden="true"></i></td>
              <td className="contact-label">Fax:</td>
              <td><a href="fax:+4722920602">+47 22 92 06 02</a></td>
            </tr>
            <tr>
              <td className="contact-icon"><i className="fa fa-at" aria-hidden="true"></i></td>
              <td className="contact-label">E-post:</td>
              <td><a href="mailto:post@skiltmaker.no">post@skiltmaker.no</a></td>
            </tr>
            <tr>
              <td className="contact-icon"><i className="fa fa-instagram" aria-hidden="true"></i></td>
              <td className="contact-label">Instagram:</td>
              <td><a href="https://www.instagram.com/skiltmaker/">@skiltmaker</a></td>
            </tr>
            <tr>
              <td className="contact-icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></td>
              <td className="contact-label">Post:</td>
              <td>Arnebråtveien 34<br/>0771 Oslo</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contact;
