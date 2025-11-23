import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/navbar.css';

export default function GlobalNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close navbar when route changes
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  // Navbar theme state - default to light (dark text)
  const [isLightBg, setIsLightBg] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const sections = document.querySelectorAll('[data-navbar-theme]');
      const isMobile = window.matchMedia("(max-width: 991px)").matches;

      let currentTheme = 'light'; // Default theme
      let closestSection = null;
      let closestDistance = Infinity;

      for (let section of sections) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (rect.top <= 0 && rect.bottom > 0) {
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        } else if (rect.top > 0 && rect.top < 200) {
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      }

      if (closestSection) {
        currentTheme = closestSection.dataset.navbarTheme;
      }

      if (isMobile) {
        setIsLightBg(currentTheme === 'light');
        document.querySelector('.navbar')?.classList.add('mobile-theme');
      } else {
        setIsLightBg(currentTheme === 'light');
        document.querySelector('.navbar')?.classList.remove('mobile-theme');
      }
    };

    const scrollHandler = () => {
      checkTheme();
    };

    window.addEventListener('scroll', scrollHandler, true);
    document.addEventListener('scroll', scrollHandler, true);
    window.addEventListener('resize', checkTheme);
    checkTheme();

    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
      document.removeEventListener('scroll', scrollHandler, true);
      window.removeEventListener('resize', checkTheme);
    };
  }, []);

  return (
    <Navbar
      className={`navbar ${scrolled ? 'scrolled' : ''} ${isLightBg ? 'light-bg' : 'dark-bg'}`}
      bg="transparent"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
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
            <Nav.Link
              as={Link}
              to="/team"
              className={location.pathname === '/team' ? 'active' : ''}
            >
              Our Team
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              className={location.pathname.startsWith('/products') ? 'active' : ''}
            >
              Products
            </Nav.Link>
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