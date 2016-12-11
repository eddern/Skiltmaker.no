import React, { Component } from 'react'
import moment from 'moment'
import Lightbox from 'react-images'

class Images extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      url: 'http://placehold.it/320x320',
      bigurl: 'http://placehold.it/640x640',
      time: 0,
      lightboxIsOpen: false
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

  imageClicked() {
    this.setState({lightboxIsOpen: true})
  }

  closeLightbox() {
    this.setState({lightboxIsOpen: false})
  }



  render() {

    return (
      <div className="image" onClick={this.imageClicked.bind(this)} >
        <Lightbox
          images={[
            { src: this.state.bigurl }
          ]}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          onClose={this.closeLightbox.bind(this)}
          backdropClosesModal={true}
          showImageCount={false}
        />
        <img src={this.state.url}/>
        <p className="time">{moment.unix(this.state.time).fromNow()}</p>
      </div>
    );
  }
}

export default Images;
