import { useState } from 'react';
import '../styles/feedadditives.css';

const FeedAdditivesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "CYB-G Methionine 70%",
      description: "1st Limiting Amino Acid for optimal dairy nutrition",
      features: [
        "DL-Methionine > 70%, Rumen Bypass Rate > 84% and Intestinal Release Rate > 97%",
        "Improve Milk Quality especially milk protein rate",
        "Improve reproductive efficiency"
      ],
      image: "/api/placeholder/600/400",
      category: "Amino Acids"
    },
    {
      id: 2,
      name: "CYB-G Lysine 70%",
      description: "2nd Limiting Amino Acid for enhanced production",
      features: [
        "L-Lysine HCl > 70%, Rumen Bypass Rate > 86% and Intestinal Release Rate > 93%",
        "Enhance more lysine availability to meet production requirements",
        "Improve milk yield and milk protein rate"
      ],
      image: "/api/placeholder/600/400",
      category: "Amino Acids"
    },
    {
      id: 3,
      name: "CYB-G Choline 30%",
      description: "Essential nutrient for metabolic health",
      features: [
        "Choline Chloride > 30%, Bypass Rate > 84%, Intestinal Release Rate > 99%",
        "Reduce Ketosis and maintain perinatal health",
        "Helps in reduction of NEFA and BHBA",
        "Reduce Fatty liver and extend life span of dairy cows"
      ],
      image: "/api/placeholder/600/400",
      category: "Vitamins"
    },
    {
      id: 4,
      name: "CYB-G Niacin 50%",
      description: "B-vitamin for energy metabolism",
      features: [
        "Niacinamide: 50%, Rumen Bypass Rate: 86%, Intestinal Release Rate: 97%",
        "Prevent ketone disease of dairy cows",
        "Increase milk yield",
        "Improve reproductive performance"
      ],
      image: "/api/placeholder/600/400",
      category: "Vitamins"
    },
    {
      id: 5,
      name: "Global MPG",
      description: "Powder form Energy Booster",
      features: [
        "Monopropyleneglycol: 31%, Glycerol: 10%, Calcium Propionate: 4%, Niacin: 0.6%",
        "Synergistic association of glucose precursors and liver protectors",
        "Lower energy deficit during transition period"
      ],
      image: "/api/placeholder/600/400",
      category: "Energy"
    },
    {
      id: 6,
      name: "Glycostar",
      description: "Liquid form Energy Booster",
      features: [
        "Monopropyleneglycol: 40%, Glycerol > 14%, plus Isomaltose, Sodium propionates, Niacin, Methionine, Lysine",
        "Prevent ketosis and metabolic disorders",
        "Reduce heat stress and vaccination stress"
      ],
      image: "/api/placeholder/600/400",
      category: "Energy"
    },
    {
      id: 7,
      name: "Z-Tox",
      description: "Clay Based Toxin Binder",
      features: [
        "3rd Generation Clinoptiolites",
        "Selective adsorption for mycotoxins except for nutrients",
        "Lower cases of Mastitis",
        "Better reproduction and overall cow health"
      ],
      image: "/api/placeholder/600/400",
      category: "Toxin Binder"
    },
    {
      id: 8,
      name: "Globafix Plus",
      description: "Yeast based Toxin Binder",
      features: [
        "35% Yeast cell wall with 22.5% Beta-Glucans and 12.5% MOS",
        "Binds aflatoxins, Zearalenone, Fumonisin, Ochratoxin, T-2 and H-2 Toxin",
        "Helps reduce mastitis, lameness, repeat breeding in dairy cows"
      ],
      image: "/api/placeholder/600/400",
      category: "Toxin Binder"
    },
    {
      id: 9,
      name: "Greenstar 84%",
      description: "Rumen Bypass Fat 84%",
      features: [
        "Palmitic acid C16: 48%, Lauric acid C12: 3%, Myristic acid C14: 12%, Calcium: 9%",
        "Natural mixture of palm oil and calcium",
        "Improve milk yield, Body Condition Score and reproduction"
      ],
      image: "/api/placeholder/600/400",
      category: "Bypass Fat"
    },
    {
      id: 10,
      name: "Greenstar 99%",
      description: "Rumen Bypass Fat 99%",
      features: [
        "Available in two types: 85% Palmitic acid and 90% Palmitic acid",
        "Used to improve milk fat percentage",
        "Premium quality bypass fat for high producers"
      ],
      image: "/api/placeholder/600/400",
      category: "Bypass Fat"
    },
    {
      id: 11,
      name: "Biotin 2%",
      description: "Essential for hoof health",
      features: [
        "Composition: 20mg per gram, white crystalline powder",
        "Crucial role in Hoof Health including Horn Quality and Integrity",
        "Reduces lameness and increases productivity"
      ],
      image: "/api/placeholder/600/400",
      category: "Vitamins"
    },
    {
      id: 12,
      name: "Vitamin C",
      description: "Antioxidant and stress reducer",
      features: [
        "99% L-Ascorbic acid, white crystalline powder",
        "Reduces heat stress and protects cells from oxidative damage",
        "Assists liver cells to detox mycotoxins and heavy metals",
        "Dosage: 10g/cow/day, 1g/calf/day"
      ],
      image: "/api/placeholder/600/400",
      category: "Vitamins"
    },
    {
      id: 13,
      name: "Green Super Plus",
      description: "Premium Mineral Vitamin Premix",
      features: [
        "Contains Organic and Inorganic minerals",
        "Stimulates growth rate and better weight gain",
        "Improves milk production and quality",
        "For animals with 25-35 litre milk production"
      ],
      image: "/api/placeholder/600/400",
      category: "Premix"
    },
    {
      id: 14,
      name: "Green Premix",
      description: "Complete Mineral-Vitamin Premix",
      features: [
        "Contains Ca, Mg, Na, Cl, Soda bicarbonate, Co, Cu, I, Fe, Mn, Se, Zn, Vit A, D, E, Niacin, Biotin",
        "For animals with 20-25 litre milk production",
        "Suitable for heifers and dry cows"
      ],
      image: "/api/placeholder/600/400",
      category: "Premix"
    }
  ];

  return (
    <div className="feedadd-container">
      {/* Hero Section */}
      <header className="feedadd-hero-section feedadd-full-width">
        <div className="feedadd-hero-overlay"></div>
        <div className="feedadd-hero-content">
          <div className="feedadd-hero-badge">PREMIUM FEED ADDITIVES</div>
          <h1 className="feedadd-hero-title">
            Feed Additive
            <span className="feedadd-hero-accent">Solutions</span>
          </h1>
          <p className="feedadd-hero-description">
            Advanced nutrition supplements for optimal animal health, productivity and profitability
          </p>
          <div className="feedadd-hero-stats">
            <div className="feedadd-stat-item">
              <div className="feedadd-stat-icon">🥛</div>
              <div className="feedadd-stat-number">30%</div>
              <div className="feedadd-stat-label">Higher Milk Yield</div>
            </div>
            <div className="feedadd-stat-item">
              <div className="feedadd-stat-icon">💪</div>
              <div className="feedadd-stat-number">95%</div>
              <div className="feedadd-stat-label">Better Health</div>
            </div>
            <div className="feedadd-stat-item">
              <div className="feedadd-stat-icon">📊</div>
              <div className="feedadd-stat-number">40%</div>
              <div className="feedadd-stat-label">ROI Increase</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="feedadd-features-section feedadd-full-width" data-navbar-theme="light">
        <div className="feedadd-features-container">
          <h2 className="feedadd-features-title">Why Choose Our Feed Additives?</h2>
          <div className="feedadd-features-grid">
            <div className="feedadd-feature-card">
              <div className="feedadd-feature-icon">🎯</div>
              <h3>Targeted Nutrition</h3>
              <p>Specific formulations for different production stages and requirements</p>
            </div>
            <div className="feedadd-feature-card">
              <div className="feedadd-feature-icon">🛡️</div>
              <h3>Health Protection</h3>
              <p>Prevent metabolic disorders and improve overall animal health</p>
            </div>
            <div className="feedadd-feature-card">
              <div className="feedadd-feature-icon">⚡</div>
              <h3>High Bioavailability</h3>
              <p>Rumen bypass technology ensures maximum nutrient absorption</p>
            </div>
            <div className="feedadd-feature-card">
              <div className="feedadd-feature-icon">📈</div>
              <h3>Proven Results</h3>
              <p>Research-backed formulations with demonstrated performance improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="feedadd-products-section feedadd-full-width" data-navbar-theme="light">
        <div className="feedadd-products-container">
          <h2 className="feedadd-section-title">Our Product Range</h2>
          <div className="feedadd-products-grid">
            {products.map(product => (
              <div 
                key={product.id} 
                className="feedadd-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="feedadd-product-category">{product.category}</div>
                <div className="feedadd-product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="feedadd-product-image"
                  />
                  <div className="feedadd-product-overlay">
                    <button className="feedadd-view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="feedadd-product-content">
                  <h3 className="feedadd-product-title">{product.name}</h3>
                  <p className="feedadd-product-description">{product.description}</p>
                  <ul className="feedadd-product-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="feedadd-feature-item">
                        <span className="feedadd-feature-bullet">✓</span>
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
      <section className="feedadd-cta-section feedadd-full-width" data-navbar-theme="light">
        <div className="feedadd-cta-container">
          <h2 className="feedadd-cta-title">Optimize Your Feed Program Today</h2>
          <p className="feedadd-cta-description">
            Get customized feed additive solutions for maximum productivity and profitability
          </p>
          <div className="feedadd-cta-buttons">
            <button className="feedadd-btn-primary">Get Quote</button>
            <button className="feedadd-btn-secondary">Download Catalog</button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="feedadd-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="feedadd-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="feedadd-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="feedadd-modal-grid">
              <div className="feedadd-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="feedadd-modal-info">
                <div className="feedadd-modal-category">{selectedProduct.category}</div>
                <h2 className="feedadd-modal-title">{selectedProduct.name}</h2>
                <p className="feedadd-modal-description">{selectedProduct.description}</p>
                <h3 className="feedadd-modal-features-title">Key Features:</h3>
                <ul className="feedadd-modal-features">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feedadd-feature-icon">✓</span>
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

export default FeedAdditivesPage;