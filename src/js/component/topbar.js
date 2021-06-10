import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, DropdownButton, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Topbar = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">COVID-19 - Data Tracker</Navbar.Brand>
					<Nav className="me-auto">
						<LinkContainer to="/">
							<Nav.Link>Main</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/vacstats">
							<Nav.Link>Vaccination</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/actuals">
							<Nav.Link>Actuals</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};
