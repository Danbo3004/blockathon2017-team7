import React, { Component } from "react";
import { Menu, Container, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Link to="/">
            <Menu.Item as="a" header>
              <Image
                size="mini"
                src="https://yt3.ggpht.com/-PfvLQoMp6DE/AAAAAAAAAAI/AAAAAAAAAAA/4uqLpt3FM4A/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
                style={{ marginRight: "1.5em" }}
              />
              Project Name
            </Menu.Item>
          </Link>
          <Menu.Item as="a">Home</Menu.Item>

          <Dropdown item simple text="Dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    );
  }
}

export default Header;
