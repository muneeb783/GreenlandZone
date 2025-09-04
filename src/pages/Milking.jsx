import { useState } from 'react';
import '../styles/milking.css';
import dbdc from "../assets/dbdc.JPG";

const Milking = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "Mobile Milking Machine",
      description: "Portable milking solution for flexible operations",
      features: [
        "Electronic Pulsator",
        "Oil type vacuum pump with two years warranty",
        "Stainless steel bucket (40 Kg) with cut off system",
        "Can milk 16-20 animals / hour"
      ],
      image: "/api/placeholder/600/400",
      category: "Mobile"
    },
    {
      id: 2,
      name: "Rooster Group",
      description: "Efficient group milking system",
      features: [
        "Electronic Pulsator",
        "Vacuum pump is oil type with two years warranty",
        "Stainless steel bucket (30 Kg) with cut off system",
        "Can milk 16-20 animals / hour"
      ],
      image: "/api/placeholder/600/400",
      category: "Group"
    },
    {
      id: 3,
      name: "Mobile Milking Master",
      description: "Advanced mobile milking station",
      features: [
        "It can milk 8 animals at one time",
        "You can move it at your desired milking shed",
        "It pumps milk directly to chiller after milking",
        "Easy to operate"
      ],
      image: "/api/placeholder/600/400",
      category: "Mobile"
    },
    {
      id: 4,
      name: "Double Bucket Double Cluster",
      description: "High-capacity mobile milking solution",
      features: [
        "Electronic pulsator",
        "Vacuum pump is oil type with two years warranty",
        "Stainless steel bucket (30 Kg) with cut off system",
        "Can milk 16-20 animals / hour"
      ],
      image: dbdc,
      category: "Mobile"
    },
    {
      id: 5,
      name: "IN/ONE",
      description: "Compact milking parlour solution",
      features: [
        "Traits With inOne, it is very easy to have your dream milking parlour",
        "Compact design and one day installation",
        "Complete integrated system"
      ],
      image: "/api/placeholder/600/400",
      category: "Parlour"
    },
    {
      id: 6,
      name: "Polypropylene Milk Cans",
      description: "Food-grade milk storage solution",
      features: [
        "Food grade polypropylene milk cans for milking machines",
        "Easy to wash",
        "Durable construction"
      ],
      image: "/api/placeholder/600/400",
      category: "Storage"
    },
    {
      id: 7,
      name: "Automatic Churn",
      description: "Automated butter production equipment",
      features: [
        "It is used to make butter",
        "Automatic operation",
        "Consistent quality output"
      ],
      image: "/api/placeholder/600/400",
      category: "Processing"
    },
    {
      id: 8,
      name: "Plastic Milk Cans",
      description: "Lightweight milk storage containers",
      features: [
        "Durable plastic construction",
        "Easy to handle and clean",
        "Multiple size options available"
      ],
      image: "/api/placeholder/600/400",
      category: "Storage"
    },
    {
      id: 9,
      name: "Bucket with Milking Cluster",
      description: "Extension solution for milk lines",
      features: [
        "Used to extend milk line",
        "Compatible with existing systems",
        "Easy installation"
      ],
      image: "/api/placeholder/600/400",
      category: "Accessories"
    },
    {
      id: 10,
      name: "Herringbone Milking Parlor",
      description: "Efficient parlor design with management system",
      features: [
        "Best milking parlors with herd management system",
        "Ensures fast and hygienic milking",
        "Optimized cow flow"
      ],
      image: "/api/placeholder/600/400",
      category: "Parlour"
    },
    {
      id: 11,
      name: "Fast Exit Milking Parlor",
      description: "Advanced parlor with quick release system",
      features: [
        "Complete parlor with herd management system",
        "Provides heat detection, rumination and health management",
        "Rapid cow turnover"
      ],
      image: "/api/placeholder/600/400",
      category: "Parlour"
    }
  ];

  return (
    <div className="milking-container milking-full-width">
      {/* Hero Section */}
      <header className="milking-hero-section">
        <div className="milking-hero-overlay"></div>
        <div className="milking-hero-content">
          <div className="milking-hero-badge">ADVANCED MILKING TECHNOLOGY</div>
          <h1 className="milking-hero-title">
            Milking Equipment
            <span className="milking-hero-accent">Solutions</span>
          </h1>
          <p className="milking-hero-description">
            Complete milking systems for efficient, hygienic, and profitable dairy operations
          </p>
          <div className="milking-hero-stats">
            <div className="milking-stat-item">
              <div className="milking-stat-icon">🥛</div>
              <div className="milking-stat-number">2x</div>
              <div className="milking-stat-label">Faster Milking</div>
            </div>
            <div className="milking-stat-item">
              <div className="milking-stat-icon">✨</div>
              <div className="milking-stat-number">99%</div>
              <div className="milking-stat-label">Hygiene Level</div>
            </div>
            <div className="milking-stat-item">
              <div className="milking-stat-icon">📈</div>
              <div className="milking-stat-number">30%</div>
              <div className="milking-stat-label">Yield Increase</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="milking-features-section milking-full-width" data-navbar-theme="light">
        <div className="milking-features-container">
          <h2 className="milking-features-title">Why Choose Our Milking Solutions?</h2>
          <div className="milking-features-grid">
            <div className="milking-feature-card">
              <div className="milking-feature-icon">🎯</div>
              <h3>Precision Technology</h3>
              <p>Electronic pulsators and automated systems for consistent milking</p>
            </div>
            <div className="milking-feature-card">
              <div className="milking-feature-icon">🛡️</div>
              <h3>Hygiene First</h3>
              <p>Stainless steel construction and easy cleaning for milk quality</p>
            </div>
            <div className="milking-feature-card">
              <div className="milking-feature-icon">⚡</div>
              <h3>High Efficiency</h3>
              <p>Milk up to 20 animals per hour with mobile solutions</p>
            </div>
            <div className="milking-feature-card">
              <div className="milking-feature-icon">🔧</div>
              <h3>Flexible Options</h3>
              <p>From mobile units to complete parlor installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="milking-products-section milking-full-width" data-navbar-theme="light">
        <div className="milking-products-container">
          <h2 className="milking-section-title">Our Product Range</h2>
          <div className="milking-products-grid">
            {products.map(product => (
              <div 
                key={product.id} 
                className="milking-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="milking-product-category">{product.category}</div>
                <div className="milking-product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="milking-product-image"
                  />
                  <div className="milking-product-overlay">
                    <button className="milking-view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="milking-product-content">
                  <h3 className="milking-product-title">{product.name}</h3>
                  <p className="milking-product-description">{product.description}</p>
                  <ul className="milking-product-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="milking-feature-item">
                        <span className="milking-feature-bullet">✓</span>
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
      <section className="milking-cta-section milking-full-width" data-navbar-theme="light">
        <div className="milking-cta-container">
          <h2 className="milking-cta-title">Transform Your Milking Operations</h2>
          <p className="milking-cta-description">
            Get the right milking equipment for your farm's specific needs and scale
          </p>
          <div className="milking-cta-buttons">
            <button className="milking-btn-primary">Get Quote</button>
            <button className="milking-btn-secondary">Download Catalog</button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="milking-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="milking-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="milking-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="milking-modal-grid">
              <div className="milking-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="milking-modal-info">
                <div className="milking-modal-category">{selectedProduct.category}</div>
                <h2 className="milking-modal-title">{selectedProduct.name}</h2>
                <p className="milking-modal-description">{selectedProduct.description}</p>
                <h3 className="milking-modal-features-title">Key Features:</h3>
                <ul className="milking-modal-features">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>
                      <span className="milking-feature-icon">✓</span>
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

export default Milking;