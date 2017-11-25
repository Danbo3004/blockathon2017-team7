import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

class History extends Component {
  render() {
    return (
      <Container text style={{ marginTop: "7em" }}>
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>Matthew Harris</Card.Header>
              <Card.Meta>Co-Worker</Card.Meta>
              <Card.Description>
                Matthew is a pianist living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header content="Jake Smith" />
              <Card.Meta content="Musicians" />
              <Card.Description content="Jake is a drummer living in New York." />
            </Card.Content>
          </Card>

          <Card>
            <Card.Content
              header="Elliot Baker"
              meta="Friend"
              description="Elliot is a music producer living in Chicago."
            />
          </Card>

          <Card
            header="Jenny Hess"
            meta="Friend"
            description="Jenny is a student studying Media Management at the New School"
          />

          <Card
            header="Jenny Hess"
            meta="Friend"
            description="Jenny is a student studying Media Management at the New School"
          />
          <Card
            header="Jenny Hess"
            meta="Friend"
            description="Jenny is a student studying Media Management at the New School"
          />
          <Card
            header="Jenny Hess"
            meta="Friend"
            description="Jenny is a student studying Media Management at the New School"
          />
        </Card.Group>
      </Container>
    );
  }
}

export default History;
