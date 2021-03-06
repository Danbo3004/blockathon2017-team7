import React, { Component } from "react";
import { Menu, Icon, Dropdown, Button, Header, Label } from "semantic-ui-react";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import Slideshow from "./Slideshow";

const guestOptions = [
  { key: "1", text: "1 Guest", value: "1" },
  { key: "2", text: "2 Guests", value: "2" },
  { key: "3", text: "3 Guests", value: "3" },
  { key: "4", text: "4 Guests", value: "4" }
];
class Picker extends Component {
  state = { dateCome: new Date(), dateGo: new Date(), guest: 1 };
  render() {
    return (
      <Link to="/login">
        <Button color="green">Reverse Now</Button>
      </Link>
    );
  }
}

export default Picker;
