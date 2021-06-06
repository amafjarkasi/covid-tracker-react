import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">COVID-19 - Data Tracker</span>
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo"> */}
					<DropdownButton variant="danger" id="dropdown-basic-button" title="Other Options">
						<LinkContainer to="/demo">
							<Dropdown.Item>Action</Dropdown.Item>
						</LinkContainer>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</DropdownButton>
					{/* </Link> */}
				</div>
			</nav>
		</>
	);
};
