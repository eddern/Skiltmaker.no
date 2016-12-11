import React, { Component } from 'react'
import moment from 'moment'

class Images extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      url: 'http://placehold.it/320x320',
      bigurl: 'http://placehold.it/640x640',
      time: 0
    }
  }



  componentWillMount() {
    moment.lang('nb')
    this.setState({
      url:this.state.data.images.low_resolution.url,
      bigurl: this.state.data.images.standard_resolution.url,
      time: this.state.data.created_time
    })
  }


  render() {

    return (
      <div className="image">
        <img src={this.state.url}/>
        <p className="time">{moment.unix(this.state.time).fromNow()}</p>
      </div>
    );
  }
}

export default Images;
