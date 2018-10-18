import React from 'react';
import { Menu, Container, Image, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Container>
            <Image id="logo" src="https://news.starbucks.com/uploads/images/Logo/_preview/Starbucks_Logo_Hi-res.jpg"/>
            <Dropdown item text="COFFEE">
              <Dropdown.Menu>
                <Dropdown.Item>Our Coffee</Dropdown.Item>
                <Dropdown.Item>Find Your Perfect Coffee</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="TEA">
              <Dropdown.Menu>
                <Dropdown.Item>Handcrafted Teas</Dropdown.Item>
                <Dropdown.Item>Iced Teas</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="MENU">
              <Dropdown.Menu>
                <Dropdown.Item>Drinks</Dropdown.Item>
                <Dropdown.Item>Food</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="COFFEEHOUSE">
              <Dropdown.Menu>
                <Dropdown.Item>Starbucks Mobile</Dropdown.Item>
                <Dropdown.Item>Online Community</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="SOCIAL IMPACT">
              <Dropdown.Menu>
                <Dropdown.Item>Community</Dropdown.Item>
                <Dropdown.Item>Ethical Sourcing</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="STARBUCKS REWARDS">
              <Dropdown.Menu>
                <Dropdown.Item>View Your Stars</Dropdown.Item>
                <Dropdown.Item>Current Members</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BLOG">
              <Dropdown.Menu>
                <Dropdown.Item>Originals</Dropdown.Item>
                <Dropdown.Item>About Starbucks Channel</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="GIFT CARDS">
              <Dropdown.Menu>
                <Dropdown.Item>Buy a Card</Dropdown.Item>
                <Dropdown.Item>Manage Your Card</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    );
  }
}
