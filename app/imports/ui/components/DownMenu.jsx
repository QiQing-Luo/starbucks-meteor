import React from 'react';
import { Menu, Container, Flag } from 'semantic-ui-react';

export default class DownMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="downmenu">
          <Container>
            <Menu.Item fitted><Flag name='us'/></Menu.Item>
            <Menu.Item fitted>Change Region</Menu.Item>
            <Menu.Item> | </Menu.Item>
            <Menu.Item>English</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
