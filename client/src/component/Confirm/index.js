import React, { Component } from "react";
import { Container, Header, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class History extends Component {
  state = {};
  render() {
    return (
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">Confirm hotel's information</Header>
        <p class="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          distinctio libero eum vero alias, quibusdam expedita! Molestiae
          recusandae assumenda inventore eius itaque. Cum distinctio quo,
          voluptatem delectus praesentium nemo veritatis.
        </p>
        <Image
          src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
          style={{ marginTop: "2em" }}
        />
        <div>3 guests</div>
        <div>Nov 29, 2017 --> Nov 30, 2017</div>
        <div>Total (VND) ₫3088120</div>
        <Link to="/history">
          <Button color="green">Confirm book</Button>
        </Link>
      </Container>
    );
  }
}

export default History;
