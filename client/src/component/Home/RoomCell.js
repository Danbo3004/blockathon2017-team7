import React, { Component } from "react";
import {
  Grid,
  Image,
  Button,
  Container,
  Icon,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class RoomCell extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid column={3}>
          <Grid.Column width={3}>
            <Image
              src="https://www.hotel-icon.com/public/room/images/2/Hotel_ICON_36type_Harbour.jpg"
              size="large"
              fluid
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Container fluid>
              <p>
                <Icon name="home" />City View
              </p>
              <p>
                <Icon name="resize horizontal" />20 m²/215 ft²
              </p>
              <p>
                <Icon name="ban" />Free cancellation
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column width={3}>
            <Container fluid>
              <p>
                <Icon name="hotel" />1 king bed or 2 single beds
              </p>
              <p>
                <Icon name="s15" />Separate shower/bathtub
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column width={1} verticalAlign="middle">
            <Button.Group>
              <Button>263 ETH</Button>
              <Button.Or text="&" />
              <Link to="/book">
                <Button positive>Book</Button>
              </Link>
            </Button.Group>
          </Grid.Column>
        </Grid>
        <Divider />
      </div>
    );
  }
}

export default RoomCell;
