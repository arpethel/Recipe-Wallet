import React from 'react'
import { Menu, Input, Icon, Dropdown } from 'semantic-ui-react';

interface IProps {
    openCreateForm: () => void;
    setCreateMode: (createMode: boolean) => void;
}

const SideBar: React.FC<IProps> = ({openCreateForm, setCreateMode}) => {
  return (
    <Menu
      vertical
      fluid
      style={{
        position: "fixed",
        maxWidth: "200px",
        boxShadow: "none",
        border: "none",
        backgroundColor: "transparent"
      }}
    >

      <Menu.Item>
        Home
        <Menu.Menu>
          <Menu.Item name="search">Your Recipes</Menu.Item>
          <Menu.Item name="add">Favorites</Menu.Item>
          <Menu.Item name="new" onClick={() => setCreateMode(true)}>
            Create New Recipe
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item name="browse">
        <Icon name="grid layout" />
        Browse Cuisines
      </Menu.Item>

      <Dropdown text="More" style={{ marginLeft: "15px" }}>
        <Dropdown.Menu>
          <Dropdown.Item icon="edit" text="Edit Profile" />
          <Dropdown.Item icon="globe" text="Choose Language" />
          <Dropdown.Item icon="settings" text="Account Settings" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default SideBar
