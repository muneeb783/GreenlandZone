import { useState } from 'react';
import "../styles/cowmonitsol.css";

const SenseTimePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const features = [
    {
      icon: "🌡️",
      title: "Heat Detection",
      description: "Best-in-class heat detection for optimal breeding timing"
    },
    {
      icon: "📊",
      title: "Health Insights",
      description: "Real-time health monitoring and early disease detection"
    },
    {
      icon: "🏷️",
      title: "Flexible Tagging",
      description: "Choose between ear tags or neck tags based on your preference"
    },
    {
      icon: "📱",
      title: "Data-Driven",
      description: "Actionable insights on reproductive, health, and nutritional status"
    }
  ];

  const images = [
    {
      id: 1,
      src: "/api/placeholder/400/300",
      alt: "Cow with monitoring tag",
      caption: "SenseTM Flex neck tag in action"
    },
    {
      id: 2,
      src: "/api/placeholder/400/300",
      alt: "Close-up of monitoring system",
      caption: "Advanced monitoring technology"
    },
    {
      id: 3,
      src: "/api/placeholder/400/300",
      alt: "eSenseTM Flex ear tag",
      caption: "eSenseTM Flex ear tag device"
    }
  ];

  return (
    <div className="sensetime-container">
      {/* Hero Section */}
      <section className="hero-section hero-full-width">
        <div className="hero-background-pattern"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">ADVANCED MONITORING TECHNOLOGY</div>
            <h1 className="hero-title">
              SenseTime Cow<br/>
              <span className="hero-accent">Monitoring System</span>
            </h1>
            <p className="hero-description">
              Revolutionary Technology for Modern Dairy Farming
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Heat Detection Rate</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Real-Time Monitoring</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Farms Worldwide</div>
              </div>
            </div>
            <div className="hero-cta">
              <button className="hero-btn-primary">Get Started</button>
              <button className="hero-btn-secondary">Watch Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <svg className="hero-svg" viewBox="0 0 400 300">
                {/* Cow silhouette with tech overlay */}
                <path d="M100 150 Q150 100 200 150 T300 150" stroke="#16a34a" strokeWidth="2" fill="none" opacity="0.3"/>
                <circle cx="150" cy="150" r="5" fill="#16a34a" className="pulse-dot"/>
                <circle cx="250" cy="150" r="5" fill="#16a34a" className="pulse-dot" style={{animationDelay: '0.5s'}}/>
                <circle cx="200" cy="120" r="5" fill="#16a34a" className="pulse-dot" style={{animationDelay: '1s'}}/>
                
                {/* Data visualization elements */}
                <path d="M50 200 L100 180 L150 190 L200 170 L250 175 L300 160" stroke="#3b82f6" strokeWidth="2" fill="none" className="data-line"/>
                <rect x="320" y="140" width="60" height="40" rx="4" fill="#1f2937" opacity="0.8"/>
                <text x="350" y="165" fill="white" fontSize="12" textAnchor="middle">Live Data</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section" data-navbar-theme="light">
        <div className="content-wrapper">
          {/* Introduction */}
          <div className="intro-section">
            <div className="green-accent"></div>
            <div className="intro-content">
              <p className="lead-text">
              The revolutionary SenseTimeTM cow monitoring solution delivers proven best-in-class heat detection and health insight, a choice of ear tags or neck tags and inherent simplicity for maximized productivity.
              SenseTime is a sophisticated, modular cow monitoring solution that delivers data-driven, actionable information on the reproductive, health, nutritional and wellbeing status of individual cows and groups, for more productive farm management and operations.
              </p>
              <p className="description-text">
              Highly flexible, it is the first cow monitoring system that allows farmers to use either ear tags or neck tags, according to their preference. The cSenseTM Flex (neck) tags are based on the SCR neck tags already in use on thousands of farms worldwide, and the eSenseTM Flex (ear) tags are the newest and most advanced ear tags on the market.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="features-section">
            <h2 className="section-title">Key Features</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="gallery-section">
            <h2 className="section-title">See It In Action</h2>
            <div className="image-gallery">
              {images.map((image) => (
                <div 
                  key={image.id} 
                  className="gallery-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className="image-overlay">
                    <p className="image-caption">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2 className="cta-title">Ready to Transform Your Farm?</h2>
            <p className="cta-description">
              Join thousands of farmers worldwide who are already benefiting from SenseTime technology
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p className="modal-caption">{selectedImage.caption}</p>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SenseTimePage;