import React from 'react';
import { Grid, List } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns="5">
            <Grid.Column>
              ABOUT US
              <hr/>
              <List>
                <List.Item>Our Company</List.Item>
                <List.Item>Investor Relations</List.Item>
                <List.Item>Newsroom</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              CAREER CENTER
              <hr/>
              <List>
                <List.Item>Working at Starbucks</List.Item>
                <List.Item>College Plan</List.Item>
                <List.Item>Current Partners</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              FOR BUSINESS
              <hr/>
              <List>
                <List.Item>Office Coffee</List.Item>
                <List.Item>Starbucks Coffee International</List.Item>
                <List.Item>Foodservice</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              ONLINE COMMUNITY
              <hr/>
              <List>
                <List.Item>Twitter</List.Item>
                <List.Item>Facebook</List.Item>
                <List.Item>Instagram</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              QUICK LINKS
              <hr/>
              <List>
                <List.Item>My Account</List.Item>
                <List.Item>Store Locator</List.Item>
                <List.Item>Nutrition Info</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
