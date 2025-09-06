import { useState } from 'react';
import '../styles/foragesol.css'

const ForageSol = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "Forage Harvester For Grass",
      description: "High-performance grass harvesting equipment",
      features: [
        "Cuts all kind of grasses(Lucern, Rai grass, Rhode grass, Jodal)",
        "Adjustable chop size",
        "Note: 40 HP tractor required"
      ],
      image: "/api/placeholder/600/400",
      category: "Harvesting"
    },
    {
      id: 2,
      name: "Drum Movers",
      description: "Efficient grass cutting solution",
      features: [
        "It is used to cut grasses like Barseem, Lucern and Rhodes grass",
        "Note: 40 HP tractor required",
        "Durable construction"
      ],
      image: "/api/placeholder/600/400",
      category: "Cutting"
    },
    {
      id: 3,
      name: "Single Row Forage Harvester",
      description: "Efficient single-row harvesting solution",
      features: [
        "Used in field for cutting and harvesting",
        "Chop size is adjustable",
        "Note: 40 HP tractor is required for this machine"
      ],
      image: "/api/placeholder/600/400",
      category: "Harvesting"
    },
    {
      id: 4,
      name: "Small Silage Baler and Wrapper",
      description: "Automated baling and wrapping system",
      features: [
        "Fully automatic machine with ABB motors and Siemens PLC system",
        "Wrapping table is equipped with invertor system",
        "Smooth wrapping & less breakdown of wrapping table",
        "Adjustable baler chamber",
        "Provides bale size from 60kg - 100kg",
        "Less manpower required"
      ],
      image: "/api/placeholder/600/400",
      category: "Baling"
    }
  ];

  return (
    <div className="forage-container forage-full-width">
      {/* Hero Section */}
      <header className="forage-hero-section">
        <div className="forage-hero-overlay"></div>
        <div className="forage-hero-content">
          <div className="forage-hero-badge">FORAGE & SILAGE MAKING EQUIPMENT</div>
          <h1 className="forage-hero-title">
            Forage & SILAGE Making
            <span className="forage-hero-accent">Solutions</span>
          </h1>
          <p className="forage-hero-description">
            Advanced equipment for efficient forage harvesting and silage making
          </p>
          <div className="forage-hero-stats">
            <div className="forage-stat-item">
              <div className="forage-stat-icon">🌾</div>
              <div className="forage-stat-number">70%</div>
              <div className="forage-stat-label">Faster Harvesting</div>
            </div>
            <div className="forage-stat-item">
              <div className="forage-stat-icon">📈</div>
              <div className="forage-stat-number">90%</div>
              <div className="forage-stat-label">Feed Quality</div>
            </div>
            <div className="forage-stat-item">
              <div className="forage-stat-icon">💪</div>
              <div className="forage-stat-number">80%</div>
              <div className="forage-stat-label">Labor Savings</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="forage-features-section forage-full-width" data-navbar-theme="light">
        <div className="forage-features-container">
          <h2 className="forage-features-title">Why Choose Our Forage & Silage Solutions?</h2>
          <div className="forage-features-grid">
            <div className="forage-feature-card">
              <div className="forage-feature-icon">🚜</div>
              <h3>Tractor Compatible</h3>
              <p>Designed to work seamlessly with standard farm tractors</p>
            </div>
            <div className="forage-feature-card">
              <div className="forage-feature-icon">⚡</div>
              <h3>High Efficiency</h3>
              <p>Maximum output with minimum fuel consumption and time</p>
            </div>
            <div className="forage-feature-card">
              <div className="forage-feature-icon">🎯</div>
              <h3>Precision Cutting</h3>
              <p>Adjustable settings for optimal forage quality & silage quality</p>
            </div>
            <div className="forage-feature-card">
              <div className="forage-feature-icon">🤖</div>
              <h3>Automation</h3>
              <p>Fully automated systems reduce labor and increase efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="forage-products-section forage-full-width" data-navbar-theme="light">
        <div className="forage-products-container">
          <h2 className="forage-section-title">Our Product Range</h2>
          <div className="forage-products-grid">
            {products.map(product => (
              <div 
                key={product.id} 
                className="forage-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="forage-product-category">{product.category}</div>
                <div className="forage-product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="forage-product-image"
                  />
                  <div className="forage-product-overlay">
                    <button className="forage-view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="forage-product-content">
                  <h3 className="forage-product-title">{product.name}</h3>
                  <p className="forage-product-description">{product.description}</p>
                  <ul className="forage-product-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="forage-feature-item">
                        <span className="forage-feature-bullet">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="forage-cta-section forage-full-width" data-navbar-theme="light">
        <div className="forage-cta-container">
          <h2 className="forage-cta-title">Maximize Your Forage Production</h2>
          <p className="forage-cta-description">
            Get the right equipment for your farm's forage and hay making needs
          </p>
          <div className="forage-cta-buttons">
            <button className="forage-btn-primary">Get Quote</button>
            <button className="forage-btn-secondary">Download Catalog</button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="forage-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="forage-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="forage-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="forage-modal-grid">
              <div className="forage-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="forage-modal-info">
                <div className="forage-modal-category">{selectedProduct.category}</div>
                <h2 className="forage-modal-title">{selectedProduct.name}</h2>
                <p className="forage-modal-description">{selectedProduct.description}</p>
                <h3 className="forage-modal-features-title">Key Features:</h3>
                <ul className="forage-modal-features">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>
                      <span className="forage-feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForageSol;