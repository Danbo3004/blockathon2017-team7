import React, { Component } from "react";
import { Container } from "semantic-ui-react";
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
    return (
      <Container textAlign="justified" style={{ marginTop: 100 }}>
        {this.renderListRoom()}
      </Container>
    );
  }
}

export default Home;
