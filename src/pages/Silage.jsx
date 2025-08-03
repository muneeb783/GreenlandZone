import { useState } from 'react';
import '../styles/silage.css'

const Silage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "Silage Packing Machine",
      description: "Cost-effective silage packing solution",
      features: [
        "It is used to fill, press and pack silage into 25-50kg bags",
        "It is cost effective as bags are much cheaper than silage film",
        "High efficiency packing system"
      ],
      image: "/api/placeholder/600/400",
      category: "Packing"
    },
    {
      id: 2,
      name: "Row Independent Forage Harvester",
      description: "Versatile harvesting for all crop types",
      features: [
        "Used for crops both with rows and without rows",
        "Chop size is adjustable",
        "Note: 85HP is required for this machine"
      ],
      image: "/api/placeholder/600/400",
      category: "Harvesting"
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
      name: "Silage Wrapping Film",
      description: "Premium quality preservation film",
      features: [
        "Premium quality imported film",
        "Available in all sizes and colors",
        "UV resistant for long-term storage"
      ],
      image: "/api/placeholder/600/400",
      category: "Wrapping"
    },
    {
      id: 5,
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
    <div className="silage-container">
      {/* Hero Section */}
      <header className="silage-hero-section silage-full-width">
        <div className="silage-hero-overlay"></div>
        <div className="silage-hero-content">
          <div className="silage-hero-badge">ADVANCED SILAGE TECHNOLOGY</div>
          <h1 className="silage-hero-title">
            Silage Making
            <span className="silage-hero-accent">Solutions</span>
          </h1>
          <p className="silage-hero-description">
            Complete silage production systems for optimal feed preservation and quality
          </p>
          <div className="silage-hero-stats">
            <div className="silage-stat-item">
              <div className="silage-stat-icon">🌾</div>
              <div className="silage-stat-number">90%</div>
              <div className="silage-stat-label">Feed Quality</div>
            </div>
            <div className="silage-stat-item">
              <div className="silage-stat-icon">💰</div>
              <div className="silage-stat-number">50%</div>
              <div className="silage-stat-label">Cost Reduction</div>
            </div>
            <div className="silage-stat-item">
              <div className="silage-stat-icon">⚡</div>
              <div className="silage-stat-number">3x</div>
              <div className="silage-stat-label">Faster Processing</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="silage-features-section silage-full-width" data-navbar-theme="light">
        <div className="silage-features-container">
          <h2 className="silage-features-title">Why Choose Our Silage Solutions?</h2>
          <div className="silage-features-grid">
            <div className="silage-feature-card">
              <div className="silage-feature-icon">🎯</div>
              <h3>Precision Processing</h3>
              <p>Adjustable settings for optimal silage quality and consistency</p>
            </div>
            <div className="silage-feature-card">
              <div className="silage-feature-icon">🔒</div>
              <h3>Quality Preservation</h3>
              <p>Advanced wrapping technology ensures long-term feed quality</p>
            </div>
            <div className="silage-feature-card">
              <div className="silage-feature-icon">🤖</div>
              <h3>Automation</h3>
              <p>Fully automated systems reduce labor and increase efficiency</p>
            </div>
            <div className="silage-feature-card">
              <div className="silage-feature-icon">📊</div>
              <h3>Cost Effective</h3>
              <p>Maximize feed value while minimizing production costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="silage-products-section silage-full-width" data-navbar-theme="light">
        <div className="silage-products-container">
          <h2 className="silage-section-title">Our Product Range</h2>
          <div className="silage-products-grid">
            {products.map(product => (
              <div 
                key={product.id} 
                className="silage-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="silage-product-category">{product.category}</div>
                <div className="silage-product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="silage-product-image"
                  />
                  <div className="silage-product-overlay">
                    <button className="silage-view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="silage-product-content">
                  <h3 className="silage-product-title">{product.name}</h3>
                  <p className="silage-product-description">{product.description}</p>
                  <ul className="silage-product-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="silage-feature-item">
                        <span className="silage-feature-bullet">✓</span>
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
      <section className="silage-cta-section silage-full-width" data-navbar-theme="light">
        <div className="silage-cta-container">
          <h2 className="silage-cta-title">Upgrade Your Silage Production Today</h2>
          <p className="silage-cta-description">
            Get the right equipment for efficient silage making and preservation
          </p>
          <div className="silage-cta-buttons">
            <button className="silage-btn-primary">Get Quote</button>
            <button className="silage-btn-secondary">Download Catalog</button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="silage-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="silage-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="silage-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="silage-modal-grid">
              <div className="silage-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="silage-modal-info">
                <div className="silage-modal-category">{selectedProduct.category}</div>
                <h2 className="silage-modal-title">{selectedProduct.name}</h2>
                <p className="silage-modal-description">{selectedProduct.description}</p>
                <h3 className="silage-modal-features-title">Key Features:</h3>
                <ul className="silage-modal-features">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>
                      <span className="silage-feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="silage-modal-actions">
                  <button className="silage-btn-primary">Request Quote</button>
                  <button className="silage-btn-secondary">Ask Question</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Silage;