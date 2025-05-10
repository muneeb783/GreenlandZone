import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/navbar.css'

export default function GlobalNavBar() {
  return (
    <Navbar className="navbar" bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="80"
            alt="Greenland Zone"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <NavDropdown title="Products" id="products-dropdown">
              <NavDropdown.Item as={Link} to="/products/dairy">
                Dairy Farming Solutions
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/feeding">
                Feeding Solutions
              </NavDropdown.Item>
              {/* …add the rest of your product links here… */}
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}