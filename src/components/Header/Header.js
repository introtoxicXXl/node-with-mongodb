import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/adduser">User</Nav.Link>
        <Nav.Link as={Link} to="login">Log In</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </>
  );
};

export default Header;