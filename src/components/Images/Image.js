import React, { Component } from 'react';

class Images extends Component {

  constructor(props) {
    super(props)
    this.state = {data: props.data}
  }



  componentWillMount() {
    console.log(this.state.data)
  }


  render() {
    return (
      <div className="image">
        <img src="http://placehold.it/320x320"/>
        <p className="time">This is an image.</p>
      </div>
    );
  }
}

export default Images;
