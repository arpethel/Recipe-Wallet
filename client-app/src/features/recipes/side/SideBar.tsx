import React from 'react'
import { Menu, Input, Icon, Dropdown } from 'semantic-ui-react';

const SideBar = () => {
    return (
      <Menu vertical fluid>
        <Menu.Item>
          <Input placeholder="Search..." />
        </Menu.Item>

        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item
              name="search"
            >
              Your Recipes
            </Menu.Item>
            <Menu.Item
              name="add"
            >
              Favorites
            </Menu.Item>
            <Menu.Item
              name="about"
            >
              Create New Recipe
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          name="browse"
        >
          <Icon name="grid layout" />
          Browse Cuisines
        </Menu.Item>

        <Dropdown item text="More">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Edit Profile" />
            <Dropdown.Item icon="globe" text="Choose Language" />
            <Dropdown.Item icon="settings" text="Account Settings" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>

      
    );
}

export default SideBar
