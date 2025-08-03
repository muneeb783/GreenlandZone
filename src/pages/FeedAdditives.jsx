import { useState } from 'react';
import "../styles/feedadditives.css";

const FeedAdditivesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState('toxin');

  const products = {
    toxin: {
      title: "TOXIN BINDER",
      subtitle: "Novasil Plus",
      description: "Natural clay of the smectite group that specifically binds aflatoxins, it is 2:1 layer-lattice phyllosilicate clay rich in calcium montmorillonite.",
      benefits: [
        "Specifically binds aflatoxins",
        "Natural smectite clay",
        "Rich in calcium montmorillonite",
        "2:1 layer-lattice phyllosilicate structure"
      ],
      dosage: {
        title: "Dosage",
        instructions: [
          "0.1 to 0.5% depending on aflatoxin and animals",
          "0.1% :Aflatoxin level 80-100ppb",
          "0.25% :Aflatoxin level 3,750ppb",
          "0.5% :Aflatoxin level 7,500ppbf"
        ]
      },
      image: "/api/placeholder/400/300"
    },
    mineral: {
      title: "MINERAL PREMIX",
      subtitle: "Complete Nutrition Solution",
      description: "Advanced mineral premix formulation designed to optimize animal health and productivity through balanced nutrition.",
      benefits: [
        "IMPROVED: Digestive comfort",
        "INCREASED: Production",
        "BALANCED: Nutrition intake",
        "DECREASED: Medical cost"
      ],
      dosage: {
        title: "Dosage",
        instructions: [
          "Cow, Buffaloes, Horse, Camel: 100-125 gm/day",
          "Calves, Sheep and Goat: 50 gm/day"
        ]
      },
      image: "/api/placeholder/400/300"
    }
  };

  const currentProduct = products[selectedProduct];

  return (
    <div className="feed-additives-container" >
      {/* Header Section */}
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">Feed Additives</h1>
          <p className="page-subtitle">Premium nutrition solutions for optimal animal health and productivity</p>
        </div>
      </header>

      {/* Product Selector */}
      <section className="product-selector" data-navbar-theme="light">
        <div className="selector-container">
          <button 
            className={`selector-btn ${selectedProduct === 'toxin' ? 'active' : ''}`}
            onClick={() => setSelectedProduct('toxin')}
          >
            <span className="selector-icon">🛡️</span>
            <span>Toxin Binder</span>
          </button>
          <button 
            className={`selector-btn ${selectedProduct === 'mineral' ? 'active' : ''}`}
            onClick={() => setSelectedProduct('mineral')}
          >
            <span className="selector-icon">💎</span>
            <span>Mineral Premix</span>
          </button>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="product-detail" data-navbar-theme="light">
        <div className="detail-container">
          <div className="product-grid">
            {/* Product Image */}
            <div className="product-image-section">
              <div className="image-container">
                <img src={currentProduct.image} alt={currentProduct.title} />
                <div className="product-badge">{currentProduct.subtitle}</div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-section">
              <h2 className="feed-product-title">{currentProduct.title}</h2>
              <p className="product-description">{currentProduct.description}</p>
              
              {/* Benefits */}
              <div className="benefits-section">
                <h3 className="feed-section-title">Key Benefits</h3>
                <ul className="benefits-list">
                  {currentProduct.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      <span className="benefit-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dosage */}
              <div className="dosage-section">
                <h3 className="feed-section-title">{currentProduct.dosage.title}</h3>
                <div className="dosage-content">
                  {currentProduct.dosage.instructions.map((instruction, index) => (
                    <p key={index} className="dosage-item">{instruction}</p>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="feed-cta-section">
                <button className="feed-btn-primary">Get Quote</button>
                <button className="btn-secondary">Download Brochure</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Products Gallery */}
      <section className="products-gallery" data-navbar-theme="light">
        <div className="gallery-container">
          <h2 className="gallery-title">Complete Product Range</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/api/placeholder/300/200" alt="Toxin Binder Package" />
              <p>Toxin Binder Range</p>
            </div>
            <div className="gallery-item">
              <img src="/api/placeholder/300/200" alt="Mineral Premix Range" />
              <p>Mineral Premix Collection</p>
            </div>
            <div className="gallery-item">
              <img src="/api/placeholder/300/200" alt="Custom Solutions" />
              <p>Custom Formulations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedAdditivesPage;