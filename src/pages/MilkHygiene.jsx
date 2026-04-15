import { useState } from 'react';
import { ChevronRight, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import { SEO, siteUrl } from '../components/SEO';
import '../styles/common-styles.css';
import '../styles/milkhygiene.css';
import acid from "../assets/acid.png";
import alkali from "../assets/alkali.png"

const MilkHygiene = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Enhanced product data with comprehensive milk hygiene information
  const products = [
    {
      id: 1,
      name: "Cleaning Alkaline CIP",
      category: "CIP Cleaning",
      shortDesc: "Industrial-grade alkaline cleaning solution for complete system hygiene",
      fullDesc: "Our premium alkaline CIP (Clean-In-Place) cleaning solution is specifically formulated for the dairy industry. Featuring powerful degreasing action with peracetic acid content below 5%, this solution ensures thorough cleaning of milking machines, cooling tanks, pipes, and all dairy equipment. The advanced formula removes protein deposits, fats, and organic residues while maintaining equipment integrity.",
      features: [
        "Peracetic Acid content < 5% for safe yet effective cleaning",
        "Designed for cleaning & hygiene of milking machines and cooling tanks",
        "Powerful degreasing action removes stubborn residues",
        "Effective on pipes, brushes, and all dairy contact surfaces",
        "Prevents biofilm formation and bacterial growth",
        "Compatible with all standard CIP systems"
      ],
      image: alkali,
      tag: "Professional"
    },
    {
      id: 2,
      name: "Cleaning Acidic CIP",
      category: "CIP Cleaning",
      shortDesc: "Acidic cleaning solution for mineral deposits and milk stone removal",
      fullDesc: "Our acidic CIP cleaning solution is engineered to tackle the toughest challenges in dairy operations. Specifically designed for cleaning milking machines and milk containers, this powerful formula dissolves milk stone, removes mineral deposits, and prevents bacterial growth. The balanced acidity ensures thorough cleaning without damaging equipment surfaces, maintaining optimal hygiene standards for all milk contact surfaces.",
      features: [
        "Designed for cleaning of milking machines and milk containers",
        "Effectively removes milk stone and hard water deposits",
        "Prevents bacterial growth and biofilm formation",
        "Safe for all surfaces in contact with milk",
        "Neutralizes alkaline residues from previous cleaning",
        "Extends equipment life by preventing scale buildup"
      ],
      image: acid,
      tag: "Essential"
    },
    {
      id: 3,
      name: "Acid Per Acetic (Peracetic Acid)",
      category: "Disinfectant",
      shortDesc: "Fast-acting disinfectant solution for pre-milking cluster cleaning",
      fullDesc: "Our Peracetic Acid disinfectant represents the gold standard in dairy hygiene. This powerful antimicrobial solution is specifically formulated for cleaning milking clusters between animals, ensuring zero cross-contamination. The rapid-action formula provides immediate disinfection while being completely safe for equipment and leaving no harmful residues. Essential for maintaining the highest milk quality standards and preventing mastitis transmission.",
      features: [
        "Powerful disinfectant for milking cluster sanitization",
        "Used to clean clusters just before moving to the next animal",
        "Rapid antimicrobial action - kills 99.9% of pathogens",
        "Safe for equipment with no corrosive effects",
        "Prevents cross-contamination between animals",
        "No harmful residues - safe for milk quality"
      ],
      image: "/api/placeholder/600/400",
      tag: "Advanced"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Food-Grade Quality",
      description: "All products meet stringent dairy industry standards and international food safety regulations"
    },
    {
      icon: Users,
      title: "Premium Results",
      description: "Ensures highest milk quality, extended shelf life, and optimal bacterial reduction"
    },
    {
      icon: TrendingUp,
      title: "Complete System",
      description: "Comprehensive hygiene solutions from pre-milking to storage tank cleaning"
    },
    {
      icon: Sparkles,
      title: "Easy Application",
      description: "Simple procedures with effective results and clear usage guidelines"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Bacteria Reduction" },
    { value: "A+", label: "Milk Grade" },
    { value: "30%", label: "Longer Shelf Life" }
  ];

  return (
    <div className="hygiene-container">
      <SEO
        title="Milk Hygiene Solutions - Cleaning & Sanitization"
        description="Professional milk hygiene solutions including acid and alkaline cleaning products, sanitizers, and detergents for dairy equipment. Maintain the highest milk quality standards."
        keywords="milk hygiene, dairy cleaning products, acid cleaning, alkaline cleaning, dairy sanitizers, milk quality, equipment cleaning"
        url={siteUrl + '/products/hygiene'}
      />
      {/* Hero Section */}
      <header className="hygiene-hero-section" data-navbar-theme="dark">
        <div className="hygiene-hero-overlay"></div>
        <div className="hygiene-hero-content">
          <div className="hygiene-hero-badge">MILK QUALITY ASSURANCE</div>
          <h1 className="hygiene-hero-title">
            Milk Hygiene
            <span className="hygiene-hero-accent">Solutions</span>
          </h1>
          <p className="hygiene-hero-description">
            Complete cleaning and sanitization systems for premium milk quality and food safety compliance
          </p>

          {/* Stats Grid */}
          <div className="hygiene-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="hygiene-stat-item">
                <div className="hygiene-stat-number">{stat.value}</div>
                <div className="hygiene-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="hygiene-features-section" data-navbar-theme="light">
        <div className="hygiene-features-container">
          <h2 className="hygiene-features-title">Why Choose Our Hygiene Solutions?</h2>
          <div className="hygiene-features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="hygiene-feature-card">
                  <div className="hygiene-feature-icon-wrapper">
                    <IconComponent className="hygiene-feature-icon-svg" size={48} strokeWidth={1.5} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid - Modern Card Design */}
      <section className="hygiene-products-section" data-navbar-theme="light">
        <div className="hygiene-products-container">
          <h2 className="hygiene-section-title">Our Product Range</h2>
          <p className="hygiene-section-subtitle">
            Professional-grade hygiene solutions for every aspect of dairy milk quality management
          </p>

          <div className="hygiene-products-grid">
            {products.map(product => (
              <div
                key={product.id}
                className="hygiene-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="hygiene-product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="hygiene-product-image"
                  />
                  <div className="hygiene-product-category">{product.tag}</div>
                  <div className="hygiene-product-overlay">
                    <button className="hygiene-view-details-btn">
                      View Details
                      <ChevronRight className="btn-icon" size={16} />
                    </button>
                  </div>
                </div>
                <div className="hygiene-product-content">
                  <div className="hygiene-product-category-text">{product.category}</div>
                  <h3 className="hygiene-product-title">{product.name}</h3>
                  <p className="hygiene-product-description">{product.shortDesc}</p>
                  <ul className="hygiene-product-features">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="hygiene-feature-item">
                        <ChevronRight className="hygiene-feature-bullet-icon" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal - Enhanced Design */}
      {selectedProduct && (
        <div className="hygiene-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="hygiene-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="hygiene-modal-grid">
              <div className="hygiene-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="hygiene-modal-info">
                <div className="hygiene-modal-header">
                  <div className="hygiene-modal-category">{selectedProduct.category}</div>
                  <span className="hygiene-modal-tag">{selectedProduct.tag}</span>
                </div>
                <h2 className="hygiene-modal-title">{selectedProduct.name}</h2>
                <p className="hygiene-modal-description">{selectedProduct.fullDesc}</p>

                <div className="hygiene-modal-features-section">
                  <h3 className="hygiene-modal-features-title">Key Features</h3>
                  <ul className="hygiene-modal-features">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>
                        <ChevronRight className="hygiene-feature-icon" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="milkhygiene-close-bar" onClick={() => setSelectedProduct(null)}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MilkHygiene;
