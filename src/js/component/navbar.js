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
					<button type="button" className="btn btn-danger position-relative">
						More data{" "}
						<span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-primary p-2">
							<span className="visually-hidden" />
						</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};
