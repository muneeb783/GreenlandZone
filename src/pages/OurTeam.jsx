import { useState } from 'react';
import { X, MapPin, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import '../styles/ourteam.css';
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import pic9 from "../assets/pic9.png";
import pic10 from "../assets/gc2.png";
import pic11 from "../assets/gc1.png";
import dairyExpo1 from "../assets/dairy-expo-2026-team-celebration.jpeg";
import dairyExpo2 from "../assets/dairy-expo-2026-glz-booth.jpeg";
import dairyExpo3 from "../assets/dairy-expo-2026-industry-leaders.jpeg";
import dairyExpo4 from "../assets/dairy-expo-2026-grand-entrance.jpeg";

const OurTeam = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery items with images, location, description, and date
  const galleryItems = [
    {
      id: 1,
      image: dairyExpo1,
      title: '4th Dairy Asia Expo 2026 - Team Celebration',
      location: 'Expo Center, Lahore',
      date: 'February 2026',
      description: 'Our team celebrating a successful exhibition at the 4th Dairy Asia Expo alongside our international partners including DeBon, Timaz, Nuance, Datamars Livestock, CYB, and Kurtsan.'
    },
    {
      id: 2,
      image: dairyExpo2,
      title: '4th Dairy Asia Expo 2026 - GLZ Booth',
      location: 'Expo Center, Lahore',
      date: 'February 2026',
      description: 'Greenland Zone team at our "From Grass To Glass" exhibition booth, showcasing comprehensive dairy farming solutions to visitors from across Pakistan.'
    },
    {
      id: 3,
      image: dairyExpo3,
      title: '4th Dairy Asia Expo 2026 - Industry Leaders',
      location: 'Expo Center, Lahore',
      date: 'February 2026',
      description: 'Proud to stand among leading dairy industry companies at Pakistan\'s premier dairy exhibition, representing innovation and excellence in dairy farming solutions.'
    },
    {
      id: 4,
      image: dairyExpo4,
      title: '4th Dairy Asia Expo 2026 - Grand Entrance',
      location: 'Expo Center, Lahore',
      date: 'February 2026',
      description: 'The Greenland Zone delegation at the main entrance of the 4th Dairy Asia Expo (13-15 Feb 2026), one of the largest dairy industry events in the region.'
    },
    {
      id: 5,
      image: pic10,
      title: 'Annual Sales Training 2026',
      location: 'Lahore, Punjab',
      date: 'January 2026',
      description: 'Comprehensive sales training session for our team, focusing on product knowledge, customer engagement strategies, and yearly performance reviews to drive excellence in dairy solutions delivery.'
    },
    {
      id: 6,
      image: pic11,
      title: 'Annual Awards & Recognition Ceremony',
      location: 'Lahore, Punjab',
      date: 'January 2026',
      description: 'Celebrating our team\'s outstanding achievements at the annual awards ceremony, recognizing top performers and milestones that contributed to another successful year of serving Pakistan\'s dairy industry.'
    },
    {
      id: 7,
      image: pic1,
      title: 'Lahore Dairy Farm Expo - 2020',
      location: 'Lahore, Punjab',
      date: 'March 2020',
      description: 'Greenland Zone made a strong presence at one of Pakistan\'s largest dairy exhibitions, connecting with farmers and industry professionals while showcasing our comprehensive range of dairy farming solutions and building valuable partnerships.'
    },
    {
      id: 8,
      image: pic2,
      title: 'Forage Harvesting Equipment Setup',
      location: 'Sahiwal, Punjab',
      date: 'February 2020',
      description: 'Successfully delivered and commissioned state-of-the-art forage harvesting equipment, enabling the farm to significantly improve feed quality, reduce harvesting time, and lower overall labor costs for more efficient operations.'
    },
    {
      id: 9,
      image: pic3,
      title: 'Cow Monitoring System Deployment',
      location: 'Multan, Punjab',
      date: 'January 2019',
      description: 'Deployed advanced SenseTime cow monitoring technology across a herd of 300+ cattle, providing real-time health tracking, automated heat detection, and early disease alerts to maximize herd productivity and animal welfare.'
    },
    {
      id: 10,
      image: pic4,
      title: 'Farm Modernization Project',
      location: 'Faisalabad, Punjab',
      date: 'December 2019',
      description: 'Executed a complete dairy farm transformation project, integrating modern cooling systems to combat heat stress, automated feeding equipment for consistent nutrition, and comprehensive hygiene solutions to ensure milk quality standards.'
    },
    {
      id: 11,
      image: pic5,
      title: 'Baler Setup',
      location: 'Okara, Punjab',
      date: 'November 2021',
      description: 'Installed a complete silage production line featuring high-capacity balers and efficient drum movers, enabling the farm to preserve quality feed year-round and reduce dependency on external feed sources during lean seasons.'
    },
    {
      id: 12,
      image: pic6,
      title: 'Milking Parlor Setup',
      location: 'Kasur, Punjab',
      date: 'October 2023',
      description: 'Designed and installed a modern herringbone milking parlor with integrated herd management software, improving milking efficiency, reducing labor requirements, and enabling precise tracking of individual cow performance and milk yields.'
    },
    {
      id: 13,
      image: pic7,
      title: 'Dairy Machinery Expo - Beijing',
      location: 'Beijing, China',
      date: 'September 2019',
      description: 'Attended one of the world\'s premier dairy machinery exhibitions in Beijing, exploring cutting-edge technologies and strengthening relationships with international equipment manufacturers to bring the latest innovations to Pakistani farms.'
    },
    {
      id: 14,
      image: pic8,
      title: 'Farm Consultation & Planning',
      location: 'Sheikhupura, Punjab',
      date: 'August 2024',
      description: 'Provided comprehensive farm consultation services including site assessment, optimal layout design, equipment selection guidance, and a detailed implementation roadmap tailored to the client\'s production goals and budget requirements.'
    },
    {
      id: 15,
      image: pic9,
      title: 'South Punjab Dairy Expo',
      location: 'Bahawalnagar, Punjab',
      date: 'July 2024',
      description: 'Represented Greenland Zone at one of South Punjab\'s largest dairy exhibitions, engaging with local farmers, demonstrating our solutions, and reinforcing our commitment to supporting dairy development across all regions of Pakistan.'
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
