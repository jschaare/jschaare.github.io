import React from 'react';

import GoogleAnalytics from './GoogleAnalytics';
import Header from './Header';
import Footer from './Footer';


const Main = (props) => (
  <div id="wrapper">
    {/* <GoogleAnalytics /> */}
    <Header />
    <div id="main">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Main;