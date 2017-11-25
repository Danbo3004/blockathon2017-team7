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
  state = { date: new Date(), guest: 1 };
  render() {
    return (
      <Menu icon="labeled" vertical>
        <Slideshow />
        <Header size="large">
          ₫5,349,301 <Label>per night</Label>
        </Header>
        <Menu.Item>
          <Dropdown
            placeholder="Guests"
            search
            selection
            options={guestOptions}
            upward
          />
        </Menu.Item>

        <Label>
          <Icon name="marker" />
          <Flatpickr
            data-enable-time
            value={this.state.date}
            onChange={date => {
              this.setState({ date });
            }}
          />
        </Label>

        <Label>
          <Icon name="location arrow" />
          <Flatpickr
            data-enable-time
            value={this.state.date}
            onChange={date => {
              this.setState({ date });
            }}
          />
        </Label>

        <Link to="/login">
          <Button color="red">Request to book</Button>
        </Link>
      </Menu>
    );
  }
}

export default Picker;
