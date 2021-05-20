import React from 'react';

import Header from './Header';
import Footer from './Footer';
// import GoogleAnalytics from './GoogleAnalytics';

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