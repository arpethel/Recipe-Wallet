import React from "react";
import { Menu, Container } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu secondary fixed="top">
      <Container>
        <Menu.Menu position="left">
          <Menu.Item>
            <img src="/assets/signin_logo.png" className="ui small image" />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default NavBar;
