import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../styles/footer.css'


export default function Footer() {

    return(
        <>
            <div className="footer-section">
            <Container fluid className="py-5">
                {/* Top row: logo, offices, social icons */}
                <Row className="align-items-start">
                {/* Logo */}
                <Col md={4} className="mb-4 mb-md-0">
                    <img src={logo} alt="Greenland Zone" style={{ maxHeight: 150 }} />
                </Col>

                {/* Office Info */}
                <Col md={5} className="mb-4 mb-md-0">
                    <p className='footer-text'>
                    <strong>HEAD OFFICE:</strong><br/>
                    783 Quaid Block, Bahria Town, Lahore<br/>
                    Phone: 92-345-843-2667<br/>
                    Email: info@greenlandzone.com
                    </p>
                    <p className="footer-text">
                    <strong>SITE OFFICE:</strong><br/>
                    55/5I-2km Sahiwal to Okara Toll Plaza, Main GT Road, Sahiwal<br/>
                    Phone: 92-300-969-2667<br/>
                    Email: info@greenlandzone.com
                    </p>
                </Col>

                {/* Social Icons */}
                <Col md={3} className="social-buttons">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn twitter">
                    <FaTwitter size={32} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn facebook">
                    <FaFacebookF size={32} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn youtube">
                    <FaYoutube size={32} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn linkedin">
                    <FaLinkedinIn size={32} />
                    </a>
                </Col>
                </Row>

                {/* Divider */}
                <hr style={{ borderColor: '#FFA500', opacity: 0.6 }} />

                {/* Bottom row: copyright & small icons */}
                <Row className="pt-3 align-items-center">
                <Col md={6}>
                    <small className='footer-text-2'>© 2025 Greenland Zone | All rights reserved</small>
                </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}