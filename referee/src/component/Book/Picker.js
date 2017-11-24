import React, { Component } from "react";
import { Menu, Icon, Dropdown, Button } from "semantic-ui-react";

import Flatpickr from "react-flatpickr";

const overlayStyle = {
  float: "left",
  margin: "0em 3em 1em 0em"
};
const fixedOverlayStyle = {
  ...overlayStyle,
  position: "fixed",
  top: "80px",
  right: "0px",
  zIndex: 10
};

const guestOptions = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" }
];
class Picker extends Component {
  state = { date: new Date(), guest: 1 };
  render() {
    return (
      <div style={fixedOverlayStyle}>
        <Menu icon="labeled" style={fixedOverlayStyle} vertical>
          <Menu.Item>
            <Dropdown
              placeholder="Guests"
              search
              selection
              options={guestOptions}
            />
          </Menu.Item>
          <Flatpickr
            data-enable-time
            value={this.state.date}
            onChange={date => {
              this.setState({ date });
            }}
          />
          <div>
            ₫2,756,409 x 1 night ₫2,756,409 Service fee ₫350,391 Total
            ₫3,106,800
          </div>
          <Button color="red">Request to book</Button>
        </Menu>
      </div>
    );
  }
}

export default Picker;
