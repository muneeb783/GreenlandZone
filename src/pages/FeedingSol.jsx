import { useState } from 'react';
import '../styles/feeding.css'

const FeedingSol = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "Silage Bale",
      description: "Ready to serve silage wrapped bales",
      features: [
        "Ready to serve silage wrapped bales",
        "Maintains nutritional value",
        "Easy storage and handling"
      ],
      image: "/api/placeholder/600/400",
      category: "Storage"
    },
    {
      id: 2,
      name: "Feeding Trolly",
      description: "Efficient feed distribution system",
      features: [
        "Easy to carry feed",
        "Reduce labor",
        "Durable construction"
      ],
      image: "/api/placeholder/600/400",
      category: "Distribution"
    },
    {
      id: 3,
      name: "Calf Feeding Trolly",
      description: "Specialized milk feeding system for calves",
      features: [
        "Used to maintain temperature of milk for calves",
        "It maintains temperature by indirect heating system",
        "Delivers measured quantity milk by flow meter nozzle"
      ],
      image: "/api/placeholder/600/400",
      category: "Calf Care"
    },
    {
      id: 4,
      name: "Automatic Drinker",
      description: "Fresh water supply system",
      features: [
        "Enables the cattle to drink fresh and clean water",
        "Controls wastage of water",
        "Easy approach of animal"
      ],
      image: "/api/placeholder/600/400",
      category: "Hydration"
    },
    {
      id: 5,
      name: "Milk Feeding Bucket",
      description: "Individual feeding solution for calves",
      features: [
        "Ensures calf health by proper feeding",
        "Each calf gets measured quantity of milk",
        "Easy to clean and maintain"
      ],
      image: "/api/placeholder/600/400",
      category: "Calf Care"
    },
    {
      id: 6,
      name: "Feed Crusher",
      description: "Grain processing equipment",
      features: [
        "Used to crush feed grains",
        "Its rollers are designed to give required particle size",
        "High efficiency crushing"
      ],
      image: "/api/placeholder/600/400",
      category: "Processing"
    }
  ];

  return (
    <div className="feeding-container feeding-full-width">
      {/* Hero Section */}
      <header className="feeding-hero-section">
        <div className="feeding-hero-overlay"></div>
        <div className="feeding-hero-content">
          <div className="feeding-hero-badge">ADVANCED FEEDING SYSTEMS</div>
          <h1 className="feeding-hero-title">
            Feeding Equipment
            <span className="feeding-hero-accent">Solutions</span>
          </h1>
          <p className="feeding-hero-description">
            Complete feeding systems for optimal dairy farm productivity and animal health
          </p>
          <div className="feeding-hero-stats">
            <div className="feeding-stat-item">
              <div className="feeding-stat-icon">🌾</div>
              <div className="feeding-stat-number">40%</div>
              <div className="feeding-stat-label">Feed Efficiency</div>
            </div>
            <div className="feeding-stat-item">
              <div className="feeding-stat-icon">⏱️</div>
              <div className="feeding-stat-number">60%</div>
              <div className="feeding-stat-label">Time Saved</div>
            </div>
            <div className="feeding-stat-item">
              <div className="feeding-stat-icon">💪</div>
              <div className="feeding-stat-number">25%</div>
              <div className="feeding-stat-label">Better Growth</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="feeding-features-section feeding-full-width" data-navbar-theme="light">
        <div className="feeding-features-container">
          <h2 className="feeding-features-title">Why Choose Our Feeding Solutions?</h2>
          <div className="feeding-features-grid">
            <div className="feeding-feature-card">
              <div className="feeding-feature-icon">🎯</div>
              <h3>Precise Feeding</h3>
              <p>Accurate feed distribution ensures optimal nutrition for every animal</p>
            </div>
            <div className="feeding-feature-card">
              <div className="feeding-feature-icon">⚡</div>
              <h3>Labor Efficiency</h3>
              <p>Reduce manual work and streamline your feeding operations</p>
            </div>
            <div className="feeding-feature-card">
              <div className="feeding-feature-icon">📊</div>
              <h3>Feed Management</h3>
              <p>Monitor and control feed consumption for better farm economics</p>
            </div>
            <div className="feeding-feature-card">
              <div className="feeding-feature-icon">🐄</div>
              <h3>Animal Health</h3>
              <p>Consistent feeding schedules improve animal health and productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="feeding-products-section feeding-full-width" data-navbar-theme="light">
        <div className="feeding-products-container">
          <h2 className="feeding-section-title">Our Product Range</h2>
          <div className="feeding-products-grid">
            {products.map(product => (
              <div 
                key={product.id} 
                className="feeding-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="feeding-product-category">{product.category}</div>
                <div className="feeding-product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="feeding-product-image"
                  />
                  <div className="feeding-product-overlay">
                    <button className="feeding-view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="feeding-product-content">
                  <h3 className="feeding-product-title">{product.name}</h3>
                  <p className="feeding-product-description">{product.description}</p>
                  <ul className="feeding-product-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="feeding-feature-item">
                        <span className="feeding-feature-bullet">✓</span>
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
      <section className="feeding-cta-section feeding-full-width" data-navbar-theme="light">
        <div className="feeding-cta-container">
          <h2 className="feeding-cta-title">Optimize Your Feeding Operations Today</h2>
          <p className="feeding-cta-description">
            Get a customized feeding solution that matches your farm's specific needs
          </p>
          <div className="feeding-cta-buttons">
            <button className="feeding-btn-primary">Get Quote</button>
            <button className="feeding-btn-secondary">Download Catalog</button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="feeding-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="feeding-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="feeding-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="feeding-modal-grid">
              <div className="feeding-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="feeding-modal-info">
                <div className="feeding-modal-category">{selectedProduct.category}</div>
                <h2 className="feeding-modal-title">{selectedProduct.name}</h2>
                <p className="feeding-modal-description">{selectedProduct.description}</p>
                <h3 className="feeding-modal-features-title">Key Features:</h3>
                <ul className="feeding-modal-features">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feeding-feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="feeding-modal-actions">
                  <button className="feeding-btn-primary">Request Quote</button>
                  <button className="feeding-btn-secondary">Ask Question</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedingSol;