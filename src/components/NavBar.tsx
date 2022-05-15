import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
const NavBar = () => {
    const [active, setActive] = useState(false);
    return (
        <div>
            <Navbar
                collapseOnSelect
                // fixed="top"
                expand="sm"
                bg="primary"
                variant="dark"
            >
                {/* <Container> */}
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/wishlist">Your Wish List</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    );
};

export default NavBar;
