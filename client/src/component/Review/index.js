import React, { Component } from "react";
import ReactStars from "react-stars";
import {
  Segment,
  Form,
  Button,
  Container,
  TextArea,
  Header
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

class Review extends Component {
  state = {};

  ratingChanged() {}

  addReview() {
    axios
      .post("/addReview", {
        roomId: "123456",
        rate: 4,
        comment: "OK it's great"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">CHARMING, VERY SPACIOUS & BEST LOCATED</Header>
        <ReactStars count={5} onChange={this.ratingChanged} size={50} color2={"#ffd700"} />
        <Form>
          <Form.Field id="form-textarea-control-opinion" control={TextArea} placeholder="Place your opinion" style={{ minHeight: 250 }} />
        </Form>
        <Link to="/">
          <Button color="green" onClick={() => {
              this.addReview();
            }} style={{ marginTop: 15 }}
            floated="right">
            Place you review
          </Button>
        </Link>
      </Container>;
  }
}

export default Review;
