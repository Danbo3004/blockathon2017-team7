import React, { Component } from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
class RoomCell extends Component {
  state = {};
  render() {
    return (
      <Grid column={3}>
        <Grid.Column width={2}>
          <Image
            src="http://www.euneighbours.eu/sites/default/files/2017-01/placeholder.png"
            size="medium"
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Image
            src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
            size="large"
          />
        </Grid.Column>
        <Grid.Column width={1} verticalAlign="middle">
          <Button.Group>
            <Button>View</Button>
            <Button.Or />
            <Link to="/book">
              <Button positive>Book</Button>
            </Link>
          </Button.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

export default RoomCell;
