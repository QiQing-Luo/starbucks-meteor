import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item position="right"><Icon name="map marker alternate"/></Menu.Item>
            <Menu.Item fitted>Find a Store</Menu.Item>
            <Menu.Item> | </Menu.Item>
            <Menu.Item>Sign In</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
