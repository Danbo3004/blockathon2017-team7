import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://s-ec.bstatic.com/images/hotel/max1024x768/370/37024558.jpg",
    thumbnail:
      "https://s-ec.bstatic.com/images/hotel/max1024x768/370/37024558.jpg"
  },
  {
    original:
      "https://s-ec.bstatic.com/images/hotel/max1024x768/370/37024558.jpg",
    thumbnail:
      "https://s-ec.bstatic.com/images/hotel/max1024x768/370/37024558.jpg"
  },
  {
    original:
      "https://s-ec.bstatic.com/images/hotel/max1024x768/370/37024558.jpg",
    thumbnail:
      "https://s-ec.bstatic.com/images/hotel/max1024x768/370/37024558.jpg"
  }
];

class Slideshow extends Component {
  state = {};
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Slideshow;
