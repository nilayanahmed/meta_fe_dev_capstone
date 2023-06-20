import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Little Lemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" href="#home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/menu">Menu</Nav.Link>
            <Nav.Link as={NavLink} to="/reserve">Reserve Table</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </Container>
    </Navbar>
  );
}