import React, { Component } from "react";
import RoomCell from "./RoomCell";

class Home extends Component {
  state = {};

  renderListRoom() {
    const content = [];
    for (let index = 0; index < 5; index++) {
      content.push(<RoomCell key={index} />);
    }
    return content;
  }

  render() {
    return this.renderListRoom();
  }
}

export default Home;
