import { useState } from 'react';
import '../styles/farmbiosec.css'

const FarmBiosecuritySol = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "Dezinfex Doxi 351",
      description: "Powerful peracetic acid-based disinfectant",
      features: [
        "Peracetic Acid < 5% & Hydrogen Peroxide < 25%",
        "Powerful disinfectant for cleaning",
        "Disinfects shelters, walls, ground(footbath & wheelbath)"
      ],
      image: "/api/placeholder/600/400",
      category: "Disinfectant"
    },
    {
      id: 2,
      name: "Dezinfex DLDT 371",
      description: "Glutaraldehyde-based surface disinfectant",
      features: [
        "Glutaraldehyde 15% Benzalkonium Chloride 10%",
        "For disinfecting dairy farm walls, grounds and all kind of surfaces",
        "Long-lasting antimicrobial protection"
      ],
      image: "/api/placeholder/600/400",
      category: "Disinfectant"
    },
    {
      id: 3,
      name: "Benzil %20",
      description: "Public area detergent for complete hygiene",
      features: [
        "Public area detergent eliminating the factors causing the disease in a fast, effective and safe way",
        "Ensures hygienic condition for health & high efficiency for all animals",
        "Safe for frequent use"
      ],
      image: "/api/placeholder/600/400",
      category: "Detergent"
    },
    {
      id: 4,
      name: "Dezinfax Hoof Care",
      description: "Specialized hoof treatment solution",
      features: [
        "Used for foot cleaning & care as a footbath for cattle, sheep and horses",
        "Prevents and treats hoof diseases",
        "Easy to apply and long-lasting"
      ],
      image: "/api/placeholder/600/400",
      category: "Hoof Care"
    }
  ];

  return (
    <div className="biosec-container biosec-full-width">
      {/* Hero Section */}
      <header className="biosec-hero-section">
        <div className="biosec-hero-overlay"></div>
        <div className="biosec-hero-content">
          <div className="biosec-hero-badge">FARM BIOSECURITY SOLUTIONS</div>
          <h1 className="biosec-hero-title">
            Farm Biosecurity
            <span className="biosec-hero-accent">Solutions</span>
          </h1>
          <p className="biosec-hero-description">
            Complete disinfection and hygiene systems for disease prevention and farm health
          </p>
          <div className="biosec-hero-stats">
            <div className="biosec-stat-item">
              <div className="biosec-stat-icon">🛡️</div>
              <div className="biosec-stat-number">99.9%</div>
              <div className="biosec-stat-label">Pathogen Control</div>
            </div>
            <div className="biosec-stat-item">
              <div className="biosec-stat-icon">🏥</div>
              <div className="biosec-stat-number">85%</div>
              <div className="biosec-stat-label">Disease Reduction</div>
            </div>
            <div className="biosec-stat-item">
              <div className="biosec-stat-icon">💰</div>
              <div className="biosec-stat-number">40%</div>
              <div className="biosec-stat-label">Cost Savings</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="biosec-features-section biosec-full-width">
        <div className="biosec-features-container">
          <h2 className="biosec-features-title">Why Choose Our Biosecurity Solutions?</h2>
          <div className="biosec-features-grid">
            <div className="biosec-feature-card">
              <div className="biosec-feature-icon">🧪</div>
              <h3>Proven Formulations</h3>
              <p>Scientifically developed products for maximum effectiveness</p>
            </div>
            <div className="biosec-feature-card">
              <div className="biosec-feature-icon">🌿</div>
              <h3>Safe & Eco-Friendly</h3>
              <p>Animal-safe formulations with minimal environmental impact</p>
            </div>
            <div className="biosec-feature-card">
              <div className="biosec-feature-icon">💪</div>
              <h3>Broad Spectrum</h3>
              <p>Effective against bacteria, viruses, and fungi</p>
            </div>
            <div className="biosec-feature-card">
              <div className="biosec-feature-icon">⚡</div>
              <h3>Fast Action</h3>
              <p>Quick-acting formulas for immediate protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="biosec-products-section biosec-full-width">
        <div className="biosec-products-container">
          <h2 className="biosec-section-title">Our Product Range</h2>
          <div className="biosec-products-grid">
            {products.map(product => (
              <div 
                key={product.id} 
                className="biosec-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="biosec-product-category">{product.category}</div>
                <div className="biosec-product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="biosec-product-image"
                  />
                  <div className="biosec-product-overlay">
                    <button className="biosec-view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="biosec-product-content">
                  <h3 className="biosec-product-title">{product.name}</h3>
                  <p className="biosec-product-description">{product.description}</p>
                  <ul className="biosec-product-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="biosec-feature-item">
                        <span className="biosec-feature-bullet">✓</span>
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
      <section className="biosec-cta-section biosec-full-width">
        <div className="biosec-cta-container">
          <h2 className="biosec-cta-title">Protect Your Farm Today</h2>
          <p className="biosec-cta-description">
            Get a customized biosecurity plan for your farm's specific needs
          </p>
          <div className="biosec-cta-buttons">
            <button className="biosec-btn-primary">Get Quote</button>
            <button className="biosec-btn-secondary">Download Catalog</button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="biosec-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="biosec-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="biosec-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="biosec-modal-grid">
              <div className="biosec-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="biosec-modal-info">
                <div className="biosec-modal-category">{selectedProduct.category}</div>
                <h2 className="biosec-modal-title">{selectedProduct.name}</h2>
                <p className="biosec-modal-description">{selectedProduct.description}</p>
                <h3 className="biosec-modal-features-title">Key Features:</h3>
                <ul className="biosec-modal-features">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>
                      <span className="biosec-feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="biosec-modal-actions">
                  <button className="biosec-btn-primary">Request Quote</button>
                  <button className="biosec-btn-secondary">Ask Question</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmBiosecuritySol;