import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu secondary fixed="top">
      <Container>
        <Menu.Menu position="left">
            <Menu.Item>
                <img src='/assets/signin_logo.png' className="ui small image"/>
            </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          {/* <Menu.Item>
            <Button primary>Sign up</Button>
          </Menu.Item>

          <Menu.Item>
            <Button>Log-in</Button>
          </Menu.Item> */}
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default NavBar;
