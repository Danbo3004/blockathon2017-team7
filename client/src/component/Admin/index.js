import React, { Component } from "react";
import ReactStars from "react-stars";
import { Segment, Form, Button, Container, TextArea } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

class Admin extends Component {
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
    return (
      <Container text style={{ marginTop: "7em" }}>
        <ReactStars
          count={5}
          onChange={this.ratingChanged}
          size={24}
          color2={"#ffd700"}
        />
        <Form>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            placeholder="Opinion"
          />
        </Form>
        <Link to="/">
          <Button
            color="orange"
            onClick={() => {
              this.addReview();
            }}
          >
            Place you review
          </Button>
        </Link>
      </Container>
    );
  }
}

export default Admin;
