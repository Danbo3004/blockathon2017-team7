import React, { Component } from "react";
import { Container, Image, Header } from "semantic-ui-react";
import Picker from "./Picker";

class Book extends Component {
  state = {};
  render() {
    return (
      <div>
        <Picker />
        <Container text style={{ marginTop: "7em" }}>
          <Header as="h1">CHARMING, VERY SPACIOUS & BEST LOCATED</Header>
          <p>
            This is a basic fixed menu template using fixed size containers.
          </p>
          <p>
            A text container is used for the main container, which is useful for
            single column layouts.
          </p>

          <Image
            src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
        </Container>
      </div>
    );
  }
}

export default Book;
