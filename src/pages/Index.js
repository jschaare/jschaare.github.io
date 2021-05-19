import React from 'react';

import Main from '../components/Main';

import profilePic from "../data/images/me.jpg";

const Index = () => (
	<Main>
		<section id="banner">
			<div className="content">
				<header>
					<h2>Justin Schaare</h2>
					<p>
						Software Engineer
					</p>
				</header>
				<span className="image"><img src={profilePic} alt="" /></span>
			</div>
		</section>
		<section id="four" className="wrapper style1 special fade-up">
			<div className="container">
				<header className="major">
					<h2>PLACEHOLDER TEXT</h2>
					<p>PLACEHOLDER TEXT PLACEHOLDER TEXT PLACEHOLDER TEXT PLACEHOLDER TEXT PLACEHOLDER TEXT</p>
				</header>
				<div className="box alt">
					<div className="row gtr-uniform">
						<section className="col-4 col-6-medium col-12-xsmall">
							<span className="icon solid alt major fa-chart-area"></span>
							<h3>Ipsum sed commodo</h3>
							<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
						</section>
						<section className="col-4 col-6-medium col-12-xsmall">
							<span className="icon solid alt major fa-comment"></span>
							<h3>Eleifend lorem ornare</h3>
							<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
						</section>
						<section className="col-4 col-6-medium col-12-xsmall">
							<span className="icon solid alt major fa-flask"></span>
							<h3>Cubilia cep lobortis</h3>
							<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
						</section>
						<section className="col-4 col-6-medium col-12-xsmall">
							<span className="icon solid alt major fa-paper-plane"></span>
							<h3>Non semper interdum</h3>
							<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
						</section>
						<section className="col-4 col-6-medium col-12-xsmall">
							<span className="icon solid alt major fa-file"></span>
							<h3>Odio laoreet accumsan</h3>
							<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
						</section>
						<section className="col-4 col-6-medium col-12-xsmall">
							<span className="icon solid alt major fa-lock"></span>
							<h3>Massa arcu accumsan</h3>
							<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
						</section>
					</div>
				</div>
			</div>
		</section>
	</Main>
);

export default Index;