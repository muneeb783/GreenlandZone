import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/navbar.css';

export default function GlobalNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add this state after your existing states
const [isLightBg, setIsLightBg] = useState(false);

useEffect(() => {
  const checkTheme = () => {
    const sections = document.querySelectorAll('[data-navbar-theme]');
    const scrollPosition = window.scrollY + 100;
    const isMobile = window.matchMedia("(max-width: 991px)").matches; // Using 991px to match Bootstrap's lg breakpoint
    
    let foundMatch = false;
    
    for (let section of sections) {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const theme = section.dataset.navbarTheme;
        
        if (isMobile) {
          // On mobile: only change hamburger icon theme
          setIsLightBg(theme === 'light');
          // Add mobile-specific class
          document.querySelector('.navbar')?.classList.add('mobile-theme');
        } else {
          // On desktop: change entire navbar theme
          setIsLightBg(theme === 'light');
          document.querySelector('.navbar')?.classList.remove('mobile-theme');
        }
        
        foundMatch = true;
        break;
      }
    }
    
    // If no section matched, default to dark
    if (!foundMatch) {
      setIsLightBg(false);
    }
  };

  window.addEventListener('scroll', checkTheme);
  checkTheme(); // Check immediately on mount

  return () => window.removeEventListener('scroll', checkTheme);
}, []);

  return (
    <Navbar className={`navbar ${scrolled ? 'scrolled' : ''} ${isLightBg ? 'light-bg' : 'dark-bg'}`} bg="transparent" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Greenland Zone"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav">
          <span className="navbar-toggler-icon">
            <span></span>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About Us
            </Nav.Link>
            <NavDropdown 
              title="Products" 
              id="products-dropdown"
              className={location.pathname.startsWith('/products') ? 'active' : ''}
            >
              <NavDropdown.Item as={Link} to="/products/dairy">
                Dairy Farming Solutions
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/parts">
                Dairy Parts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/forage">
                Forage and Silage Making Solutions
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/milking">
                Milking Solutions
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/hygiene">
                Milk Hygiene Solutions
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/teat">
                Teat and Udder Health Solutions
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/monitoring">
                Sensetime Cow Monitoring System
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/feed">
                Feed Additives
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}