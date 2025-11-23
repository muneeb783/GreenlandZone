import { useState } from 'react';
import { X, MapPin, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import '../styles/ourteam.css';

const OurTeam = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery items with images, location, description, and date
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
      title: 'Dairy Farm Installation - Lahore',
      location: 'Lahore, Punjab',
      date: 'March 2024',
      description: 'Successfully installed complete milking parlor system with automated cleaning and cooling solutions for a 200-cow operation.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      title: 'Forage Harvesting Equipment Setup',
      location: 'Sahiwal, Punjab',
      date: 'February 2024',
      description: 'Delivered and commissioned advanced forage harvesting equipment, significantly improving feed quality and reducing labor costs.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800',
      title: 'Cow Monitoring System Deployment',
      location: 'Multan, Punjab',
      date: 'January 2024',
      description: 'Implemented SenseTime monitoring system across 300+ cows, enabling real-time health tracking and heat detection.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800',
      title: 'Farm Modernization Project',
      location: 'Faisalabad, Punjab',
      date: 'December 2023',
      description: 'Complete farm transformation including cooling systems, feeding equipment, and hygiene solutions.'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=800',
      title: 'Milking Parlor Upgrade',
      location: 'Okara, Punjab',
      date: 'November 2023',
      description: 'Upgraded existing milking infrastructure with herringbone parlor design and herd management integration.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800',
      title: 'Feed Additives Training Session',
      location: 'Kasur, Punjab',
      date: 'October 2023',
      description: 'Conducted comprehensive training on proper feed additive usage and nutritional optimization strategies.'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800',
      title: 'Silage Making Equipment Installation',
      location: 'Gujranwala, Punjab',
      date: 'September 2023',
      description: 'Installed complete silage making equipment line including balers and drum movers for optimal feed preservation.'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800',
      title: 'Farm Consultation & Planning',
      location: 'Sheikhupura, Punjab',
      date: 'August 2023',
      description: 'Provided expert consultation for new dairy farm setup, including layout design and equipment selection.'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800',
      title: 'Climate Control System Setup',
      location: 'Bahawalnagar, Punjab',
      date: 'July 2023',
      description: 'Deployed advanced climate control and cooling fan systems to combat heat stress in dairy sheds.'
    }
  ];

  return (
    <div className="ourteam-container">
      <SEO
        title="Our Team - Field Operations & Projects"
        description="See Greenland Zone in action across Pakistan. Our team delivers and installs dairy farming solutions at farms nationwide. View our project gallery and field operations."
        keywords="dairy team Pakistan, farm installations, dairy projects, field operations, farm equipment installation, dairy consultancy team"
        url="https://greenlandzone.com/team"
      />

      {/* Hero Section */}
      <section className="ourteam-hero" data-navbar-theme="dark">
        <div className="ourteam-hero-overlay"></div>
        <div className="ourteam-hero-content">
          <div className="ourteam-hero-badge">OUR PRESENCE</div>
          <h1 className="ourteam-hero-title">
            Our Team in
            <span className="ourteam-hero-accent">Action</span>
          </h1>
          <p className="ourteam-hero-description">
            From installation to training, our dedicated team brings excellence to dairy farms across Pakistan
          </p>
          <div className="ourteam-hero-stats">
            <div className="ourteam-stat-item">
              <div className="ourteam-stat-number">500+</div>
              <div className="ourteam-stat-label">Projects Completed</div>
            </div>
            <div className="ourteam-stat-divider"></div>
            <div className="ourteam-stat-item">
              <div className="ourteam-stat-number">25+</div>
              <div className="ourteam-stat-label">Districts Covered</div>
            </div>
            <div className="ourteam-stat-divider"></div>
            <div className="ourteam-stat-item">
              <div className="ourteam-stat-number">9</div>
              <div className="ourteam-stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="ourteam-intro-section" data-navbar-theme="light">
        <div className="ourteam-intro-container">
          <h2 className="ourteam-section-title">Excellence in Every Installation</h2>
          <p className="ourteam-section-description">
            Our skilled team of technicians, engineers, and consultants work tirelessly across Pakistan
            to deliver world-class dairy farming solutions. From the initial consultation to final installation
            and ongoing support, we ensure every project meets the highest standards of quality and efficiency.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="ourteam-gallery-section" data-navbar-theme="light">
        <div className="ourteam-gallery-container">
          <div className="ourteam-gallery-grid">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="ourteam-gallery-card"
                onClick={() => setSelectedImage(item)}
              >
                <div className="ourteam-gallery-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="ourteam-gallery-image"
                  />
                  <div className="ourteam-gallery-overlay">
                    <div className="ourteam-gallery-overlay-content">
                      <h3 className="ourteam-gallery-title">{item.title}</h3>
                      <div className="ourteam-gallery-meta">
                        <span className="ourteam-gallery-location">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                        <span className="ourteam-gallery-date">
                          <Calendar size={14} />
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="ourteam-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="ourteam-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="ourteam-modal-close" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <div className="ourteam-modal-grid">
              <div className="ourteam-modal-image-section">
                <img src={selectedImage.image} alt={selectedImage.title} />
              </div>
              <div className="ourteam-modal-info-section">
                <h2 className="ourteam-modal-title">{selectedImage.title}</h2>
                <div className="ourteam-modal-meta">
                  <div className="ourteam-modal-meta-item">
                    <MapPin size={18} />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="ourteam-modal-meta-item">
                    <Calendar size={18} />
                    <span>{selectedImage.date}</span>
                  </div>
                </div>
                <p className="ourteam-modal-description">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
