/*
 * ============= Question 7 =============
 *
 * Complete the ImageGallery component so that it fetches an image URL from:
 * https://auspicious-baritone.glitch.me/gorilla.
 *
 * The request will take at least 2 seconds to return so make sure you show
 * something helpful to the user.
 */

import React, { Component } from "react";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch("https://auspicious-baritone.glitch.me/gorilla")
      .then(res => res.json())
      .then(src => {
        this.setState({ imgSrc: src });
      });
  };

  render() {
    if (this.state.imgSrc) {
      return <img src={this.state.imgSrc} alt="An animal" />;
    } else {
      return <p>Image is loading....</p>;
    }
  }
}

export default ImageGallery;
