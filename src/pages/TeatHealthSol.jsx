import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/teathealth.css';

const TeatHealthSol = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: "Pre Dip Teat Foam",
      description: "Cubicles are animal rest areas",
      features: [
        "Acetic acid based & Iodine based",
        "Contains provitamine B5, glycerine & lanolin",
        "Softens the udder skin and hydrate it during milking"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Post Dip Solution",
      description: "Post Dip Solution",
      features: [
        "Have same active properties & ingrediants as Herbafilm",
        "Does not create a peelable film",
        "Creates a very thin waxy barrier on the teat skin which comes off easily when you wipe it"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Post Dip Film",
      description: "Post Dip Film",
      features: [
        "Post dip anti-becterial which protects teat orrifice between two milking",
        "Fly repellent",
        "Enriched with glycerine and lanoline to prevent irritation",
        "Contains skin softener  & substances with moisturizing cosmetic properties"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      name: "Post Dip Solution/Spray",
      description: "Post Dip Solution/Spray",
      features: [
        "Ready to use post milking disinfectant which kills bacteria that causes mastits",
        "Contains 5.5% active iodine",
        "Enriched with glycerine and lanoline to prevent irritation and protects integrity of teat",
        "Dries on teat and creates a barrier"
      ],
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredProducts = 
    filter === 'all' 
      ? products 
      : products.filter(p => p.name.toLowerCase().includes(filter));

  return (
    <div className="farmbiosec-container farmbiosec-full-width">
      {/* Hero Section */}
      <header className="farmbiosec-hero-section">
        <div className="farmbiosec-hero-overlay"></div>
        <div className="farmbiosec-hero-content">
          <h1 className="farmbiosec-hero-title">
            Teat & Udder Health
            <span className="farmbiosec-hero-accent">Solutions</span>
          </h1>
          <p className="farmbiosec-hero-description">
            Effective teat care products to ensure animal well-being and milk quality
          </p>
        </div>
      </header>

      {/* Filter Section */}
      <section className="farmbiosec-filter-section farmbiosec-full-width" data-navbar-theme="light">
        <div className="farmbiosec-filter-container">
          <h2 className="farmbiosec-filter-title">Our Product Solutions</h2>
          <div className="farmbiosec-filter-buttons">
            <button
              className={`farmbiosec-filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            {products.map(p => (
              <button
                key={p.id}
                className={`farmbiosec-filter-button ${filter === p.name.toLowerCase() ? 'active' : ''}`}
                onClick={() => setFilter(p.name.toLowerCase())}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="farmbiosec-products-section farmbiosec-full-width" data-navbar-theme="light">
        <div className="farmbiosec-products-container">
          <h2 className="farmbiosec-section-title">Products</h2>
          <div className="farmbiosec-products-grid">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="farmbiosec-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="farmbiosec-product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="farmbiosec-product-image"
                  />
                  <div className="farmbiosec-product-overlay">
                    <button className="farmbiosec-view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="farmbiosec-product-content">
                  <h3 className="farmbiosec-product-title">{product.name}</h3>
                  <p className="farmbiosec-product-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="farmbiosec-cta-section farmbiosec-full-width" data-navbar-theme="light">
        <div className="farmbiosec-cta-container">
          <h2 className="farmbiosec-cta-title">Ensure Optimal Teat Health</h2>
          <p className="farmbiosec-cta-description">
            Contact us for tailored teat health protocols.
          </p>
          <div className="farmbiosec-cta-buttons">
            <Link to="/contact" className="farmbiosec-btn-primary">Get Quote</Link>
            <a href="/catalog.pdf" className="farmbiosec-btn-secondary">Download Catalog</a>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="farmbiosec-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="farmbiosec-modal-content" onClick={e => e.stopPropagation()}>
            <button className="farmbiosec-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="farmbiosec-modal-grid">
              <div className="farmbiosec-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="farmbiosec-modal-info">
                <h2 className="farmbiosec-modal-title">{selectedProduct.name}</h2>
                <p className="farmbiosec-modal-description">{selectedProduct.description}</p>
                <h3 className="farmbiosec-modal-features-title">Key Features:</h3>
                <ul className="farmbiosec-modal-features">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="farmbiosec-feature-item">{feature}</li>
                  ))}
                </ul>
                <div className="farmbiosec-modal-actions">
                  <button className="farmbiosec-btn-primary">Request Quote</button>
                  <button className="farmbiosec-btn-secondary">Ask Question</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeatHealthSol;
