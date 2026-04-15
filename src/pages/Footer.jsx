import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/footer.css';

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <img src={logo} alt="Greenland Zone" />
            <p className="footer-tagline">From Grass to Glass</p>
            <p className="footer-brand-desc">
              Empowering Pakistani farmers with 20 years of expertise in dairy,
              agriculture, and livestock solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer-heading">Quick Links</p>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <p className="footer-heading">Our Offices</p>
            <div className="footer-office">
              <p className="footer-office-label">Head Office</p>
              <p>
                Ghaznavi Block Plot #29, Commercial Area,<br />
                Bahria Town, Lahore<br />
                <a href="tel:03458432667">0345-8432667</a><br />
                <a href="mailto:info@greenlandzone.com">info@greenlandzone.com</a>
              </p>
            </div>
            <div className="footer-office">
              <p className="footer-office-label">Site Office</p>
              <p>
                55/5I-2km Sahiwal to Okara Toll Plaza,<br />
                Main GT Road, Sahiwal<br />
                <a href="tel:923009692667">92-300-969-2667</a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="footer-social">
            <p className="footer-heading">Connect</p>
            <div className="social-buttons">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn twitter" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="https://www.facebook.com/greenlandzone/" target="_blank" rel="noreferrer" className="social-btn facebook" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.youtube.com/@greenlandzone/videos" target="_blank" rel="noreferrer" className="social-btn youtube" aria-label="YouTube">
                <FaYoutube size={18} />
              </a>
              <a href="https://www.linkedin.com/company/greenland-zone/?originalSubdomain=pk" target="_blank" rel="noreferrer" className="social-btn linkedin" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-copyright">© 2025 Greenland Zone PVT LTD — All rights reserved</span>
          <span className="footer-bottom-tagline">From Grass to Glass</span>
        </div>
      </div>
    </div>
  );
}
