import React from 'react';
import Footer from './Footer';

import NavBar from './NavBar';
import MobileBar from './MobileBar';

const Main = (props) => (
	<div id="page-wrapper">
		<NavBar />
		<div id="main">
			{props.children}
		</div>
		<Footer />
		<MobileBar />
	</div>
);

export default Main;