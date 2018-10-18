import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

export default class StarbucksImage extends React.Component {
  render() {
    return (
        <div className="starbucks-background">
          <Grid container columns="2">
            <Grid.Column>
              <h1 id="left-txt">Taste caramel &amp; mocha at their best</h1>
              <h2 id="right-txt">One sip of this delicious combination of caramel, mocha &amp; salt and you wonder how
                you ever had them
                without each other before.</h2>
              <Button inverted id="button">Drink up</Button>
            </Grid.Column>
          </Grid>

        </div>
    );
  }
}
