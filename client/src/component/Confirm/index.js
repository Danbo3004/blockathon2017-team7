import React, { Component } from "react";
import {
  Container,
  Header,
  Image,
  Button,
  Menu,
  Label,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

class History extends Component {
  state = {};

  confirmBook() {
    axios
      .post("/addNewBooking", {
        userId: "123456",
        isBreakfast: true,
        isWindowsView: true,
        isSmoking: true,
        isFreeCancellation: true,
        numOfSingleBeds: 2,
        numOfDoubleBeds: 0,
        numOfAdults: 0,
        numOfChildren: 0,
        area: 20,
        fromDate: "2017/11/20",
        toDate: "2017/11/22",
        finalPrice: 2000000,
        refereeAddr: "0x2903ad3bb2d6d1eeec2ed32c6ca98bc20301d653"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">CONFIRM YOUR REVERSATION</Header>
        <p style={{textAlign: 'justify'}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          distinctio libero eum vero alias, quibusdam expedita! Molestiae
          recusandae assumenda inventore eius itaque. Cum distinctio quo,
          voluptatem delectus praesentium nemo veritatis.
        </p>
        <Image
          src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
          style={{ marginTop: "2em" }}
        />
        <Link to="/history">
          <Button
            color="green"
            onClick={() => this.confirmBook()}
            floated="right"
          >
            Yah, I want to book now
          </Button>
        </Link>
      </Container>
    );
  }
}

export default History;