import React from 'react';
import Footer from './Footer';

import Header from './Header';

const Main = (props) => (
  <div id="wrapper">
    <Header />
    <div id="main">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Main;