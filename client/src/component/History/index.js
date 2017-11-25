import React, { Component } from "react";
import { Card, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class History extends Component {
  renderCard() {
    const content = [];
    for (let index = 0; index < 5; index++) {
      content.push(
        <Card>
          <Card.Content
            header="Elliot Baker"
            meta="Friend"
            description="Elliot is a music producer living in Chicago."
          />
          <Link to="/review">
            <Button color="orange" style={{ margin: 5 }}>
              Write a review
            </Button>
          </Link>
        </Card>
      );
    }
    return content;
  }
  render() {
    return (
      <Container text style={{ marginTop: "7em" }}>
        <Card.Group>{this.renderCard()}</Card.Group>
      </Container>
    );
  }
}

export default History;
