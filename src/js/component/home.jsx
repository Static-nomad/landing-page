import React from "react";

import Navbar from "./Navbar.jsx";

import Jumbotron from "./Jumbotron.jsx";

import Cards from "./Cards.jsx";

import Footer from "./Footer.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="main">
				<Navbar />
				<Jumbotron />
				<Cards />
				<Footer />
			</div>
		);
	}
}
