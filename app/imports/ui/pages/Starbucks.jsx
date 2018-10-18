import React from 'react';
import TopMenu from '../components/TopMenu';
import MiddleMenu from '../components/MiddleMenu';
import StarbucksImage from '../components/StarbucksImage';
import FooterMenu from '../components/FooterMenu';

export default class StarBucksReact extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <StarbucksImage/>
          <FooterMenu/>
        </div>
    );
  }
}
