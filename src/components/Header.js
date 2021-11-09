import React from "react";
import "./../assets/css/header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar className="navBar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link activeClassName="current" as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link activeClassName="current" as={NavLink} to="/login">
              <button className="login-button"> Login</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
