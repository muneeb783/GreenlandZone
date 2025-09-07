import { useState } from 'react';
import "../styles/dairyfarmingsol.css";
import fanImage from "../assets/fan.JPG";

const DairyFarmingSol = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Sample product data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "Cooling Fans",
      description: "Climate control for optimal cow comfort",
      features: [
        "Energy efficient operation",
        "Reduces heat stress",
        "Improves milk production"
      ],
      image: fanImage,
      category: "Climate"
    }
  ];

  return (
    <div className="dairy-container" style={{ touchAction: 'pan-y', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <header className="dairy-hero-section dairy-full-width" style={{ touchAction: 'pan-y' }}>
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
          <div className="dairy-hero-stats">
            <div className="dairy-stat-item">
              <div className="dairy-stat-icon">🐄</div>
              <div className="dairy-stat-number">98%</div>
              <div className="dairy-stat-label">Cow Comfort</div>
            </div>
            <div className="dairy-stat-item">
              <div className="dairy-stat-icon">📈</div>
              <div className="dairy-stat-number">35%</div>
              <div className="dairy-stat-label">Increased Yield</div>
            </div>
            <div className="dairy-stat-item">
              <div className="dairy-stat-icon">⚡</div>
              <div className="dairy-stat-number">50%</div>
              <div className="dairy-stat-label">Labor Reduction</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="dairy-features-section dairy-full-width" data-navbar-theme="light">
        <div className="dairy-features-container">
          <h2 className="dairy-features-title">Why Choose Our Solutions?</h2>
          <div className="dairy-features-grid">
            <div className="dairy-feature-card">
              <div className="dairy-feature-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>Hot-dip galvanized construction ensures long-lasting durability</p>
            </div>
            <div className="dairy-feature-card">
              <div className="dairy-feature-icon">🛡️</div>
              <h3>Animal Welfare</h3>
              <p>Designed with cow comfort and safety as top priority</p>
            </div>
            <div className="dairy-feature-card">
              <div className="dairy-feature-icon">💡</div>
              <h3>Innovation</h3>
              <p>Latest technology for efficient farm management</p>
            </div>
            <div className="dairy-feature-card">
              <div className="dairy-feature-icon">🔧</div>
              <h3>Easy Maintenance</h3>
              <p>Simple design for hassle-free cleaning and upkeep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="dairy-products-section dairy-full-width" data-navbar-theme="light">
        <div className="dairy-products-container">
          <h2 className="dairy-section-title">Our Product Range</h2>
          <div className="dairy-products-grid">
            {products.map(product => (
              <div 
                key={product.id} 
                className="dairy-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="dairy-product-category">{product.category}</div>
                <div className="dairy-product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="dairy-product-image"
                  />
                  <div className="dairy-product-overlay">
                    <button className="dairy-view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="dairy-product-content">
                  <h3 className="dairy-product-title">{product.name}</h3>
                  <p className="dairy-product-description">{product.description}</p>
                  <ul className="dairy-product-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="dairy-feature-item">
                        <span className="dairy-feature-bullet">✓</span>
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
      <section className="dairy-cta-section dairy-full-width" data-navbar-theme="light">
        <div className="dairy-cta-container">
          <h2 className="dairy-cta-title">Ready to Modernize Your Dairy Farm?</h2>
          <p className="dairy-cta-description">
            Contact us today for a customized solution that fits your farm's needs
          </p>
          <div className="dairy-cta-buttons">
            <button className="dairy-btn-primary">Get Quote</button>
            <button className="dairy-btn-secondary">Download Catalog</button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="dairy-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="dairy-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="dairy-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="dairy-modal-grid">
              <div className="dairy-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="dairy-modal-info">
                <div className="dairy-modal-category">{selectedProduct.category}</div>
                <h2 className="dairy-modal-title">{selectedProduct.name}</h2>
                <p className="dairy-modal-description">{selectedProduct.description}</p>
                <h3 className="dairy-modal-features-title">Key Features:</h3>
                <ul className="dairy-modal-features">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>
                      <span className="dairy-feature-icon">✓</span>
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

export default DairyFarmingSol;