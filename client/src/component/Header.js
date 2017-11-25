import React, { Component } from "react";
import { Menu, Container, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src="https://yt3.ggpht.com/-PfvLQoMp6DE/AAAAAAAAAAI/AAAAAAAAAAA/4uqLpt3FM4A/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
              style={{ marginRight: "1.5em" }}
            />
            STRANGERS
            </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Header;
