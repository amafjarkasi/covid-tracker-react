import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">COVID-19 - Data Tracker</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-danger">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
