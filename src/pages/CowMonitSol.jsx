import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import "../styles/cowmonitsol.css";
import s1 from "../assets/s1.jpeg";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpeg";
import rfid from "../assets/rfid.jpeg";
import rfid2 from "../assets/rfid2.jpeg";

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

  const products = [
    {
      id: 1,
      name: "Cow Monitoring System",
      category: "Monitoring",
      shortDesc: "Advanced neck-mounted monitoring system for comprehensive cow health tracking",
      fullDesc: "The cSenseTM Flex neck tag is based on the proven SCR neck tag technology already in use on thousands of farms worldwide. This advanced system delivers precise monitoring of heat detection, health status, and rumination patterns. The comfortable, durable design ensures accurate data collection while maintaining cow comfort throughout lactation.",
      features: [
        "Best-in-class heat detection accuracy (95%+)",
        "Real-time health monitoring and alerts",
        "Rumination and eating behavior tracking",
        "Based on proven SCR technology",
        "Weatherproof and durable construction",
        "Long battery life with easy replacement"
      ],
      image: s2,
      tag: "Neck Tag"
    },
    {
      id: 2,
      name: "RFID Z-Tag",
      category: "Ear Tag",
      shortDesc: "The most advanced ear tag monitoring system available on the market",
      fullDesc: "The eSenseTM Flex ear tag represents the newest breakthrough in cow monitoring technology. As the most advanced ear tag on the market, it provides comprehensive health insights, heat detection, and activity monitoring in a compact, lightweight design. Perfect for farmers who prefer ear tag systems or mixed-use operations.",
      features: [
        "Most advanced ear tag technology available",
        "Superior heat detection capability",
        "Comprehensive health insight monitoring",
        "Lightweight and comfortable for cows",
        "Easy application and management",
        "Seamless integration with farm systems"
      ],
      image: rfid,
      tag: "Ear Tag"
    },
    {
      id: 3,
      name: "RFID Tag",
      category: "Ear Tag",
      shortDesc: "The most advanced ear tag monitoring system available on the market",
      fullDesc: "The eSenseTM Flex ear tag represents the newest breakthrough in cow monitoring technology. As the most advanced ear tag on the market, it provides comprehensive health insights, heat detection, and activity monitoring in a compact, lightweight design. Perfect for farmers who prefer ear tag systems or mixed-use operations.",
      features: [
        "Most advanced ear tag technology available",
        "Superior heat detection capability",
        "Comprehensive health insight monitoring",
        "Lightweight and comfortable for cows",
        "Easy application and management",
        "Seamless integration with farm systems"
      ],
      image: rfid2,
      tag: "Ear Tag"
    },
    {
      id: 4,
      name: "SenseHub System",
      category: "Data Platform",
      shortDesc: "Central hub for actionable farm management insights and data analytics",
      fullDesc: "The SenseHub data platform serves as the brain of the SenseTime monitoring system. It collects, analyzes, and presents real-time data from all monitored cows, providing actionable insights on reproductive status, health conditions, nutritional needs, and overall wellbeing. The intuitive interface makes complex data simple to understand and act upon.",
      features: [
        "Real-time data analytics and insights",
        "Actionable alerts for heat, health, and nutrition",
        "Individual and group monitoring capabilities",
        "Mobile and desktop access",
        "Historical data tracking and reports",
        "Integration with farm management software"
      ],
      image: s3,
      tag: "Platform"
    }
  ];

  return (
    <div className="sensetime-container">
      {/* Hero Section */}
      <section className="hero-section" data-navbar-theme="dark">
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
      <section className="content-section">
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

          {/* Product Showcase */}
          <section className="sensetime-products-section" data-navbar-theme="light">
            <div className="sensetime-products-container">
              <h2 className="sensetime-section-title">Our Product Range</h2>
              <p className="sensetime-section-subtitle">
                Choose the monitoring solution that fits your farm - neck tags, ear tags, or both
              </p>

              <div className="sensetime-products-grid">
                {products.map(product => (
                  <div
                    key={product.id}
                    className="sensetime-product-card"
                    onClick={() => setSelectedImage(product)}
                  >
                    <div className="sensetime-product-image-container">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="sensetime-product-image"
                      />
                      <div className="sensetime-product-category">{product.tag}</div>
                      <div className="sensetime-product-overlay">
                        <button className="sensetime-view-details-btn">
                          View Details
                          <ChevronRight className="btn-icon" size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="sensetime-product-content">
                      <div className="sensetime-product-category-text">{product.category}</div>
                      <h3 className="sensetime-product-title">{product.name}</h3>
                      <p className="sensetime-product-description">{product.shortDesc}</p>
                      <ul className="sensetime-product-features">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="sensetime-feature-item">
                            <ChevronRight className="sensetime-feature-bullet-icon" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Product Detail Modal - Enhanced Design */}
      {selectedImage && (
        <div className="sensetime-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="sensetime-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="sensetime-modal-grid">
              <div className="sensetime-modal-image">
                <img src={selectedImage.image} alt={selectedImage.name} />
              </div>
              <div className="sensetime-modal-info">
                <div className="sensetime-modal-header">
                  <div className="sensetime-modal-category">{selectedImage.category}</div>
                  <span className="sensetime-modal-tag">{selectedImage.tag}</span>
                </div>
                <h2 className="sensetime-modal-title">{selectedImage.name}</h2>
                <p className="sensetime-modal-description">{selectedImage.fullDesc}</p>

                <div className="sensetime-modal-features-section">
                  <h3 className="sensetime-modal-features-title">Key Features</h3>
                  <ul className="sensetime-modal-features">
                    {selectedImage.features.map((feature, index) => (
                      <li key={index}>
                        <ChevronRight className="sensetime-feature-icon" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="sensetime-close-bar" onClick={() => setSelectedImage(null)}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SenseTimePage;