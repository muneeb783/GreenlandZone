import { useState } from 'react';
import '../styles/milkhygiene.css'

const MilkHygiene = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "Cleaning Alkaline CIP",
      description: "Industrial-grade alkaline cleaning solution",
      features: [
        "Peracetic Acid < 5%",
        "Designed for cleaning & hygiene of milking machines, cooling tanks, pipes, brushes etc",
        "Powerful degreasing action"
      ],
      image: "/api/placeholder/600/400",
      category: "CIP Cleaning"
    },
    {
      id: 2,
      name: "Cleaning Acidic CIP",
      description: "Acidic cleaning solution for mineral deposits",
      features: [
        "Designed for cleaning of milking machines, milk containers & for surfaces in contact with milk",
        "Removes milk stone and mineral deposits",
        "Prevents bacterial growth"
      ],
      image: "/api/placeholder/600/400",
      category: "CIP Cleaning"
    },
    {
      id: 3,
      name: "Acid Per Acetic",
      description: "Fast-acting disinfectant solution",
      features: [
        "It is a powerful disinfectant and also used to clean the milking clusters just before moving to the next animal",
        "Rapid antimicrobial action",
        "Safe for equipment"
      ],
      image: "/api/placeholder/600/400",
      category: "Disinfectant"
    },
    {
      id: 4,
      name: "Cleaner Surface Foamy",
      description: "Foaming surface cleaner for equipment",
      features: [
        "Designed for surface cleaning like bulk tanks, milk silos, farm equipment, surfaces of milking machine clusters, pipes & other equipment",
        "Long-lasting foam action",
        "Easy rinse formula"
      ],
      image: "/api/placeholder/600/400",
      category: "Surface Cleaner"
    }
  ];

  return (
    <div className="hygiene-container hygiene-full-width">
      {/* Hero Section */}
      <header className="hygiene-hero-section">
        <div className="hygiene-hero-overlay"></div>
        <div className="hygiene-hero-content">
          <div className="hygiene-hero-badge">MILK QUALITY ASSURANCE</div>
          <h1 className="hygiene-hero-title">
            Milk Hygiene
            <span className="hygiene-hero-accent">Solutions</span>
          </h1>
          <p className="hygiene-hero-description">
            Complete cleaning and sanitization systems for premium milk quality
          </p>
          <div className="hygiene-hero-stats">
            <div className="hygiene-stat-item">
              <div className="hygiene-stat-icon">🥛</div>
              <div className="hygiene-stat-number">99.9%</div>
              <div className="hygiene-stat-label">Bacteria Reduction</div>
            </div>
            <div className="hygiene-stat-item">
              <div className="hygiene-stat-icon">⭐</div>
              <div className="hygiene-stat-number">A+</div>
              <div className="hygiene-stat-label">Milk Grade</div>
            </div>
            <div className="hygiene-stat-item">
              <div className="hygiene-stat-icon">📈</div>
              <div className="hygiene-stat-number">30%</div>
              <div className="hygiene-stat-label">Longer Shelf Life</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="hygiene-features-section hygiene-full-width" data-navbar-theme="light">
        <div className="hygiene-features-container">
          <h2 className="hygiene-features-title">Why Choose Our Hygiene Solutions?</h2>
          <div className="hygiene-features-grid">
            <div className="hygiene-feature-card">
              <div className="hygiene-feature-icon">🧪</div>
              <h3>Food-Grade Quality</h3>
              <p>All products meet stringent dairy industry standards</p>
            </div>
            <div className="hygiene-feature-card">
              <div className="hygiene-feature-icon">💎</div>
              <h3>Premium Results</h3>
              <p>Ensures highest milk quality and extended shelf life</p>
            </div>
            <div className="hygiene-feature-card">
              <div className="hygiene-feature-icon">🔄</div>
              <h3>Complete System</h3>
              <p>From pre-milking to storage tank cleaning</p>
            </div>
            <div className="hygiene-feature-card">
              <div className="hygiene-feature-icon">✅</div>
              <h3>Easy Application</h3>
              <p>Simple procedures with effective results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="hygiene-products-section hygiene-full-width" data-navbar-theme="light">
        <div className="hygiene-products-container">
          <h2 className="hygiene-section-title">Our Product Range</h2>
          <div className="hygiene-products-grid">
            {products.map(product => (
              <div 
                key={product.id} 
                className="hygiene-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="hygiene-product-category">{product.category}</div>
                <div className="hygiene-product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="hygiene-product-image"
                  />
                  <div className="hygiene-product-overlay">
                    <button className="hygiene-view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="hygiene-product-content">
                  <h3 className="hygiene-product-title">{product.name}</h3>
                  <p className="hygiene-product-description">{product.description}</p>
                  <ul className="hygiene-product-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="hygiene-feature-item">
                        <span className="hygiene-feature-bullet">✓</span>
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
      <section className="hygiene-cta-section hygiene-full-width" data-navbar-theme="light">
        <div className="hygiene-cta-container">
          <h2 className="hygiene-cta-title">Ensure Premium Milk Quality</h2>
          <p className="hygiene-cta-description">
            Get a customized hygiene protocol for your dairy operation
          </p>
          <div className="hygiene-cta-buttons">
            <button className="hygiene-btn-primary">Get Quote</button>
            <button className="hygiene-btn-secondary">Download Catalog</button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="hygiene-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="hygiene-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="hygiene-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="hygiene-modal-grid">
              <div className="hygiene-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="hygiene-modal-info">
                <div className="hygiene-modal-category">{selectedProduct.category}</div>
                <h2 className="hygiene-modal-title">{selectedProduct.name}</h2>
                <p className="hygiene-modal-description">{selectedProduct.description}</p>
                <h3 className="hygiene-modal-features-title">Key Features:</h3>
                <ul className="hygiene-modal-features">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>
                      <span className="hygiene-feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="hygiene-modal-actions">
                  <button className="hygiene-btn-primary">Request Quote</button>
                  <button className="hygiene-btn-secondary">Ask Question</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MilkHygiene;