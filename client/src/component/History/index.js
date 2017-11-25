import React, { Component } from "react";
import {
  Container,
  Header,
  Image,
  Button,
  Menu,
  Label,
  Icon,
  Segment,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class History extends Component {
  state = { loading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  }

  render() {
    return this.state.loading ? (
      <Segment loading padded />
    ) : (
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">Book your trip</Header>
        <p class="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          distinctio libero eum vero alias, quibusdam expedita! Molestiae
          recusandae assumenda inventore eius itaque. Cum distinctio quo,
          voluptatem delectus praesentium nemo veritatis.
        </p>
        <Header as="h2">Review house rules</Header>
        <Menu compact>
          <Menu.Item as="a">
            <Icon name="ban" /> No Smoking
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="paw" /> Allowing pet
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="lightbulb" /> No party or event
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="key" /> Check-in is anytime after 4PM
          </Menu.Item>
        </Menu>
        <Menu compact>
          <Menu.Item as="a">
            <Icon name="key" /> Check out by 11AM
          </Menu.Item>
        </Menu>
        <Header>3 guests</Header>
        <Header>
          Nov 29, 2017 <Icon name="arrow right" /> Nov 30, 2017
        </Header>
        <Header>Total (VND): ₫3088120</Header>
        <Link to="/review">
          <Button color="orange">Write a review</Button>
        </Link>
      </Container>
    );
  }
}

export default History;
