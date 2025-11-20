import { useState } from 'react';
import { ChevronRight, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import '../styles/common-styles.css';
import "../styles/dairyfarmingsol.css";
import fanImage from "../assets/fan.JPG";

const DairyFarmingSol = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Dairy Shed Fans",
      category: "Climate",
      shortDesc: "High-efficiency cooling systems for optimal cow comfort",
      fullDesc: "Combat heat stress with our advanced cooling fan systems. Energy-efficient operation combined with strategic airflow design creates the perfect barn environment. Proven to reduce heat stress and improve milk production during hot months.",
      features: [
        "Energy efficient operation",
        "Reduces heat stress by up to 40%",
        "Improves milk production 15-20%",
        "Variable speed control",
        "Weatherproof construction",
        "Low maintenance design"
      ],
      image: fanImage,
      tag: "Climate"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Hot-dip galvanized construction ensures long-lasting durability in the toughest farm environments"
    },
    {
      icon: Users,
      title: "Animal Welfare",
      description: "Designed with cow comfort and safety as top priority, improving overall herd health and productivity"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our solutions have helped farms increase productivity by an average of 35% while reducing labor costs"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Latest technology for efficient farm management, keeping you ahead of the competition"
    }
  ];

  const stats = [
    { value: "98%", label: "Cow Comfort Rating" },
    { value: "35%", label: "Average Yield Increase" },
    { value: "50%", label: "Labor Reduction" }
  ];

  return (
    <div className="dairy-container">
      {/* Hero Section */}
      <header className="dairy-hero-section" data-navbar-theme="dark">
        <div className="dairy-hero-overlay"></div>
        <div className="dairy-hero-content">
          <div className="dairy-hero-badge">PREMIUM DAIRY EQUIPMENT</div>
          <h1 className="dairy-hero-title">
            Dairy Farm Equipment
            <span className="dairy-hero-accent">Solutions</span>
          </h1>
          <p className="dairy-hero-description">
            Comprehensive solutions for modern dairy farming - from comfort to productivity
          </p>

          {/* Stats Grid */}
          <div className="dairy-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="dairy-stat-item">
                <div className="dairy-stat-number">{stat.value}</div>
                <div className="dairy-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="dairy-features-section" data-navbar-theme="light">
        <div className="dairy-features-container">
          <h2 className="dairy-features-title">Why Choose Our Solutions?</h2>
          <div className="dairy-features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="dairy-feature-card">
                  <div className="dairy-feature-icon-wrapper">
                    <IconComponent className="dairy-feature-icon-svg" size={48} strokeWidth={1.5} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid - Modern Card Design */}
      <section className="dairy-products-section" data-navbar-theme="light">
        <div className="dairy-products-container">
          <h2 className="dairy-section-title">Our Product Range</h2>
          <p className="dairy-section-subtitle">
            Comprehensive equipment solutions for every aspect of your dairy operation
          </p>

          <div className="dairy-products-grid">
            {products.map(product => (
              <div
                key={product.id}
                className="dairy-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="dairy-product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="dairy-product-image"
                  />
                  <div className="dairy-product-category">{product.tag}</div>
                  <div className="dairy-product-overlay">
                    <button className="dairy-view-details-btn">
                      View Details
                      <ChevronRight className="btn-icon" size={16} />
                    </button>
                  </div>
                </div>
                <div className="dairy-product-content">
                  <div className="dairy-product-category-text">{product.category}</div>
                  <h3 className="dairy-product-title">{product.name}</h3>
                  <p className="dairy-product-description">{product.shortDesc}</p>
                  <ul className="dairy-product-features">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="dairy-feature-item">
                        <ChevronRight className="dairy-feature-bullet-icon" size={16} />
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

      {/* Product Detail Modal - Enhanced Design */}
      {selectedProduct && (
        <div className="dairy-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="dairy-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="dairy-modal-grid">
              <div className="dairy-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="dairy-modal-info">
                <div className="dairy-modal-header">
                  <div className="dairy-modal-category">{selectedProduct.category}</div>
                  <span className="dairy-modal-tag">{selectedProduct.tag}</span>
                </div>
                <h2 className="dairy-modal-title">{selectedProduct.name}</h2>
                <p className="dairy-modal-description">{selectedProduct.fullDesc}</p>

                <div className="dairy-modal-features-section">
                  <h3 className="dairy-modal-features-title">Key Features</h3>
                  <ul className="dairy-modal-features">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>
                        <ChevronRight className="dairy-feature-icon" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="dairy-close-bar" onClick={() => setSelectedProduct(null)}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DairyFarmingSol;
