import { useState } from 'react';
import { ChevronRight, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import { SEO, siteUrl } from '../components/SEO';
import '../styles/common-styles.css';
import '../styles/teathealth.css';
import iodip from "../assets/iodip.png";
import herbafilm from "../assets/herbafilm.png";
import iofilm from "../assets/iofilm.png";
import iobar from "../assets/iobar.png";

const TeatHealthSol = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Enhanced product data with comprehensive teat health information
  const products = [
    {
      id: 1,
      name: "Pre Dip Teat Foam",
      category: "Pre-Milking Care",
      shortDesc: "Premium pre-milking foam for optimal teat hygiene and preparation",
      fullDesc: "Our Pre Dip Teat Foam is a professional-grade pre-milking solution that combines powerful antibacterial action with exceptional skin care properties. Available in both acetic acid and iodine-based formulations, this gentle foam cleanses and prepares teats for milking while maintaining skin health and comfort. The enriched formula with provitamin B5, glycerine, and lanolin ensures your cows' udders stay soft, hydrated, and healthy throughout the milking process.",
      features: [
        "Available in acetic acid based & iodine based formulations",
        "Enriched with provitamin B5 for skin health and regeneration",
        "Contains glycerine & lanolin for deep moisturization",
        "Softens the udder skin and maintains hydration during milking",
        "Gentle foam application reduces stress on teats",
        "Prepares teats for clean, efficient milking"
      ],
      image: iobar,
      tag: "Essential"
    },
    {
      id: 2,
      name: "Post Dip Solution",
      category: "Post-Milking Protection",
      shortDesc: "Advanced post-milking solution with thin waxy barrier protection",
      fullDesc: "Our Post Dip Solution provides the same powerful active properties and ingredients as our premium Herbafilm product, but in a convenient non-film forming solution. This advanced formula creates a very thin waxy barrier on the teat skin that provides immediate protection against bacterial invasion while remaining easy to remove. Perfect for farms seeking effective protection without the need for peelable film removal.",
      features: [
        "Contains same active properties & ingredients as premium Herbafilm",
        "Does not create a peelable film for easier management",
        "Creates a thin waxy barrier on teat skin for immediate protection",
        "Barrier comes off easily when wiped before next milking",
        "Effective antibacterial protection between milkings",
        "Gentle on teat skin while providing robust defense"
      ],
      image: iofilm,
      tag: "Advanced"
    },
    {
      id: 3,
      name: "Post Dip Film (Herbafilm)",
      category: "Post-Milking Protection",
      shortDesc: "Premium film-forming post-dip with fly repellent and skin conditioning",
      fullDesc: "Our Post Dip Film (Herbafilm) represents the gold standard in teat protection technology. This advanced antibacterial post-dip creates a protective barrier that seals the teat orifice between milkings, preventing bacterial invasion and mastitis. The enriched formula includes fly repellent properties to reduce pest-related stress, while glycerine and lanolin prevent irritation and maintain optimal skin condition. Cosmetic-grade moisturizing substances ensure long-term udder health and comfort.",
      features: [
        "Post-dip antibacterial protection seals teat orifice between milkings",
        "Integrated fly repellent reduces pest stress and contamination risk",
        "Enriched with glycerine and lanolin to prevent irritation",
        "Contains premium skin softeners for optimal teat condition",
        "Moisturizing cosmetic properties maintain udder health",
        "Film barrier provides extended protection period"
      ],
      image: herbafilm,
      tag: "Premium"
    },
    {
      id: 4,
      name: "Pre Dip Solution/Spray",
      category: "Pre-Milking Protection",
      shortDesc: "Ready-to-use iodine-based disinfectant with barrier protection",
      fullDesc: "Our Pre Dip Solution/Spray is a powerful ready-to-use post-milking disinfectant specifically formulated to eliminate mastitis-causing bacteria. With 5.5% active iodine content, this professional-grade solution provides immediate and lasting protection. The enriched formula with glycerine and lanolin prevents irritation while protecting the integrity of teat tissue. Upon application, the solution dries to form a protective barrier that guards against bacterial invasion until the next milking session.",
      features: [
        "Ready to use post-milking disinfectant - no mixing required",
        "Kills bacteria that causes mastitis with 5.5% active iodine",
        "Enriched with glycerine and lanolin to prevent irritation",
        "Protects integrity of teat tissue and promotes healing",
        "Dries on teat surface to create lasting protective barrier",
        "Available in both dip and convenient spray application"
      ],
      image: iodip,
      tag: "Professional"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Mastitis Prevention",
      description: "Advanced formulations proven to significantly reduce mastitis incidence and improve udder health"
    },
    {
      icon: Users,
      title: "Skin Health Focus",
      description: "Enriched with moisturizers and conditioners to maintain soft, healthy teat skin"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Clinically tested solutions that deliver consistent protection and improved milk quality"
    },
    {
      icon: Sparkles,
      title: "Easy Application",
      description: "Available in multiple formats - foam, solution, spray, and film for your operational needs"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Bacterial Reduction" },
    { value: "50%", label: "Lower Mastitis Risk" },
    { value: "A+", label: "Udder Health Score" }
  ];

  return (
    <div className="teathealth-container">
      <SEO
        title="Teat & Udder Health Solutions"
        description="Specialized teat and udder health products including Iodip, Herbafilm, Iofilm barrier film, and Iobar. Protect udder health and prevent mastitis with our proven solutions."
        keywords="teat health, udder health, mastitis prevention, teat dip, iodip, barrier film, dairy cow health, udder care"
        url={siteUrl + '/products/teat'}
      />
      {/* Hero Section */}
      <header className="teathealth-hero-section" data-navbar-theme="dark">
        <div className="teathealth-hero-overlay"></div>
        <div className="teathealth-hero-content">
          <div className="teathealth-hero-badge">UDDER HEALTH EXCELLENCE</div>
          <h1 className="teathealth-hero-title">
            Teat & Udder Health
            <span className="teathealth-hero-accent">Solutions</span>
          </h1>
          <p className="teathealth-hero-description">
            Complete teat care systems for mastitis prevention, optimal milk quality, and long-term udder health
          </p>

          {/* Stats Grid */}
          <div className="teathealth-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="teathealth-stat-item">
                <div className="teathealth-stat-number">{stat.value}</div>
                <div className="teathealth-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="teathealth-features-section" data-navbar-theme="light">
        <div className="teathealth-features-container">
          <h2 className="teathealth-features-title">Why Choose Our Teat Health Solutions?</h2>
          <div className="teathealth-features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="teathealth-feature-card">
                  <div className="teathealth-feature-icon-wrapper">
                    <IconComponent className="teathealth-feature-icon-svg" size={48} strokeWidth={1.5} />
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
      <section className="teathealth-products-section" data-navbar-theme="light">
        <div className="teathealth-products-container">
          <h2 className="teathealth-section-title">Our Product Range</h2>
          <p className="teathealth-section-subtitle">
            Comprehensive teat care solutions for every stage of the milking process - from pre-dip to post-milking protection
          </p>

          <div className="teathealth-products-grid">
            {products.map(product => (
              <div
                key={product.id}
                className="teathealth-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="teathealth-product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="teathealth-product-image"
                  />
                  <div className="teathealth-product-category">{product.tag}</div>
                  <div className="teathealth-product-overlay">
                    <button className="teathealth-view-details-btn">
                      View Details
                      <ChevronRight className="btn-icon" size={16} />
                    </button>
                  </div>
                </div>
                <div className="teathealth-product-content">
                  <div className="teathealth-product-category-text">{product.category}</div>
                  <h3 className="teathealth-product-title">{product.name}</h3>
                  <p className="teathealth-product-description">{product.shortDesc}</p>
                  <ul className="teathealth-product-features">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="teathealth-feature-item">
                        <ChevronRight className="teathealth-feature-bullet-icon" size={16} />
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
        <div className="teathealth-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="teathealth-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="teathealth-modal-grid">
              <div className="teathealth-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="teathealth-modal-info">
                <div className="teathealth-modal-header">
                  <div className="teathealth-modal-category">{selectedProduct.category}</div>
                  <span className="teathealth-modal-tag">{selectedProduct.tag}</span>
                </div>
                <h2 className="teathealth-modal-title">{selectedProduct.name}</h2>
                <p className="teathealth-modal-description">{selectedProduct.fullDesc}</p>

                <div className="teathealth-modal-features-section">
                  <h3 className="teathealth-modal-features-title">Key Features</h3>
                  <ul className="teathealth-modal-features">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>
                        <ChevronRight className="teathealth-feature-icon" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="teathealth-close-bar" onClick={() => setSelectedProduct(null)}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeatHealthSol;
