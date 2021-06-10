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
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/vacstats">Vaccination</Nav.Link>
						<Nav.Link href="#">Actuals</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};
