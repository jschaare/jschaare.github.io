import React from 'react';
import Footer from './Footer';

import NavBar from './NavBar';

const Main = (props) => (
    <div id="page-wrapper">
        <NavBar />
        <div id="main">
            {props.children}
        </div>
        <Footer />
    </div>
);

export default Main;