import { useState } from 'react';
import { ChevronRight, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import { SEO, siteUrl } from '../components/SEO';
import '../styles/common-styles.css';
import '../styles/milking.css';
import dbdc from "../assets/dbdc.JPG";
import sbsc from "../assets/sbsc.JPG";
import sbdc from "../assets/sbdc.JPG";

const Milking = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Enhanced product data with comprehensive milking equipment information
  const products = [
    {
      id: 1,
      name: "Single Bucket Single Cluster",
      category: "Group",
      shortDesc: "Compact and efficient single-cluster milking solution",
      fullDesc: "Perfect for small to medium-sized dairy operations, our Single Bucket Single Cluster system provides reliable, efficient milking performance. The electronic pulsator ensures cow comfort and optimal milk letdown, while the oil-type vacuum pump delivers consistent performance season after season. The 30 Kg stainless steel bucket with cut-off system makes operation simple and safe.",
      features: [
        "Electronic pulsator for optimal milking rhythm",
        "Oil-type vacuum pump with two years warranty",
        "30 Kg stainless steel bucket with cut-off system",
        "Can milk 16-20 animals per hour",
        "Compact footprint for smaller operations",
        "Durable construction for long service life"
      ],
      image: sbsc,
      tag: "Efficient"
    },
    {
      id: 2,
      name: "Single Bucket Double Cluster",
      category: "Mobile",
      shortDesc: "High-capacity mobile system for increased productivity",
      fullDesc: "Double your milking speed with our Single Bucket Double Cluster system. Designed for operations requiring flexibility and high throughput, this mobile system can milk two cows simultaneously while maintaining excellent milk quality. The direct-to-chiller pumping capability ensures milk stays fresh from cow to storage.",
      features: [
        "Dual cluster design - milk 2 cows simultaneously",
        "Can milk 8 animals at one time total",
        "Mobile design - move to your desired milking location",
        "Pumps milk directly to chiller after milking",
        "Easy to operate and maintain",
        "Efficient workflow optimization"
      ],
      image: sbdc,
      tag: "Productive"
    },
    {
      id: 3,
      name: "Double Bucket Double Cluster",
      category: "Mobile",
      shortDesc: "Maximum capacity mobile milking solution for large herds",
      fullDesc: "Our most powerful mobile milking system, the Double Bucket Double Cluster combines the flexibility of mobile equipment with the capacity needed for larger herds. Two independent buckets with dual clusters allow continuous milking operation, maximizing efficiency while maintaining the mobility to position equipment exactly where needed.",
      features: [
        "Dual electronic pulsators for synchronized milking",
        "Oil-type vacuum pump with two years warranty",
        "Two 30 Kg stainless steel buckets with cut-off systems",
        "Can milk 16-20 animals per hour",
        "Maximum flexibility with mobile design",
        "Premium build quality for demanding operations"
      ],
      image: dbdc,
      tag: "High-Capacity"
    },
    {
      id: 4,
      name: "Bucket Milking System",
      category: "Mobile",
      shortDesc: "Efficient group milking system for flexible farm operations",
      fullDesc: "Our Mikline mobile milking system delivers professional-grade milking performance with the flexibility to move between locations. Featuring electronic pulsators and a reliable oil-type vacuum pump, this system ensures gentle, efficient milking while maintaining the highest hygiene standards. The stainless steel bucket with automatic cut-off system prevents overflow and simplifies operation.",
      features: [
        "Electronic pulsator for gentle, consistent milking",
        "Oil-type vacuum pump with two years warranty",
        "40 Kg stainless steel bucket with automatic cut-off system",
        "Can milk 16-20 animals per hour",
        "Mobile design for flexible positioning",
        "Easy to clean and maintain"
      ],
      image: "/api/placeholder/600/400",
      tag: "Mobile"
    },
    {
      id: 5,
      name: "Milkline",
      category: "Mobile",
      shortDesc: "Efficient mobile milking system for flexible farm operations",
      fullDesc: "Our Milkline mobile milking system delivers professional-grade performance with the flexibility to move easily between locations. Equipped with an electronic pulsator and a reliable oil-type vacuum pump, it ensures gentle, efficient milking while maintaining superior hygiene standards. The 40 kg stainless steel bucket features an automatic cut-off system to prevent overflow and simplify operation.",
      features: [
        "Electronic pulsator for gentle, consistent milking",
        "Durable oil-type vacuum pump with a two-year warranty",
        "40 kg stainless steel bucket with automatic cut-off system",
        "Milks 16–20 animals per hour",
        "Mobile design for flexible positioning",
        "Easy to clean and maintain"
      ],
      image: "/api/placeholder/600/400",
      tag: "Mobile"
    },
    {
      id: 6,
      name: "Herringbone Milking Parlor",
      category: "Parlour",
      shortDesc: "Professional parlor design with integrated herd management",
      fullDesc: "Transform your dairy operation with our complete Herringbone Milking Parlor system. This industry-leading design optimizes cow flow and milker efficiency while the integrated herd management system tracks individual cow performance, health, and productivity. Fast, hygienic milking combined with data-driven herd management makes this the ultimate solution for modern dairy farms.",
      features: [
        "Complete parlor with herd management system",
        "Individual cow identification and tracking",
        "Ensures fast and hygienic milking",
        "Optimized cow flow design",
        "Real-time milk monitoring per cow",
        "Professional installation and training included"
      ],
      image: "/api/placeholder/600/400",
      tag: "Professional"
    },
    {
      id: 7,
      name: "Fast Exit Milking Parlor",
      category: "Parlour",
      shortDesc: "Advanced parlor with rapid turnover and health monitoring",
      fullDesc: "Our Fast Exit Milking Parlor represents the cutting edge of dairy technology. Beyond efficient milking, this system provides comprehensive herd health monitoring including heat detection, rumination analysis, and health alerts. The rapid exit design maximizes throughput while the advanced sensors ensure no detail about your herd's health goes unnoticed.",
      features: [
        "Complete parlor with advanced herd management system",
        "Heat detection for optimized breeding",
        "Rumination monitoring for health insights",
        "Comprehensive health management alerts",
        "Rapid cow turnover design",
        "Integration with farm management software",
        "Automated data logging and reporting"
      ],
      image: "/api/placeholder/600/400",
      tag: "Advanced"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Precision Technology",
      description: "Electronic pulsators and automated systems deliver consistent, gentle milking for optimal cow comfort and milk quality"
    },
    {
      icon: Users,
      title: "Hygiene First",
      description: "Stainless steel construction and easy-clean designs ensure the highest milk quality and food safety standards"
    },
    {
      icon: TrendingUp,
      title: "High Efficiency",
      description: "Milk up to 20 animals per hour with mobile solutions, or scale to hundreds with parlor systems"
    },
    {
      icon: Sparkles,
      title: "Flexible Options",
      description: "From mobile units for small farms to complete parlor installations for large operations"
    }
  ];

  const stats = [
    { value: "2x", label: "Faster Milking Speed" },
    { value: "99%", label: "Hygiene Level" },
    { value: "30%", label: "Yield Increase" }
  ];

  return (
    <div className="milking-container">
      <SEO
        title="Milking Solutions - Professional Milking Equipment"
        description="Professional milking equipment including bucket milking systems, single stall single cow systems, and double bucket double cow systems. Efficient milking solutions for modern dairy farms."
        keywords="milking equipment, bucket milking system, milking parlor, dairy milking solutions, cow milking machines, professional milking systems"
        url={siteUrl + '/products/milking'}
      />
      {/* Hero Section */}
      <header className="milking-hero-section" data-navbar-theme="dark">
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

          {/* Stats Grid */}
          <div className="milking-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="milking-stat-item">
                <div className="milking-stat-number">{stat.value}</div>
                <div className="milking-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="milking-features-section" data-navbar-theme="light">
        <div className="milking-features-container">
          <h2 className="milking-features-title">Why Choose Our Milking Solutions?</h2>
          <div className="milking-features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="milking-feature-card">
                  <div className="milking-feature-icon-wrapper">
                    <IconComponent className="milking-feature-icon-svg" size={48} strokeWidth={1.5} />
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
      <section className="milking-products-section" data-navbar-theme="light">
        <div className="milking-products-container">
          <h2 className="milking-section-title">Our Product Range</h2>
          <p className="milking-section-subtitle">
            From mobile milking units to complete parlor installations - solutions for every scale of operation
          </p>

          <div className="milking-products-grid">
            {products.map(product => (
              <div
                key={product.id}
                className="milking-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="milking-product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="milking-product-image"
                  />
                  <div className="milking-product-category">{product.tag}</div>
                  <div className="milking-product-overlay">
                    <button className="milking-view-details-btn">
                      View Details
                      <ChevronRight className="btn-icon" size={16} />
                    </button>
                  </div>
                </div>
                <div className="milking-product-content">
                  <div className="milking-product-category-text">{product.category}</div>
                  <h3 className="milking-product-title">{product.name}</h3>
                  <p className="milking-product-description">{product.shortDesc}</p>
                  <ul className="milking-product-features">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="milking-feature-item">
                        <ChevronRight className="milking-feature-bullet-icon" size={16} />
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
        <div className="milking-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="milking-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="milking-modal-grid">
              <div className="milking-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="milking-modal-info">
                <div className="milking-modal-header">
                  <div className="milking-modal-category">{selectedProduct.category}</div>
                  <span className="milking-modal-tag">{selectedProduct.tag}</span>
                </div>
                <h2 className="milking-modal-title">{selectedProduct.name}</h2>
                <p className="milking-modal-description">{selectedProduct.fullDesc}</p>

                <div className="milking-modal-features-section">
                  <h3 className="milking-modal-features-title">Key Features</h3>
                  <ul className="milking-modal-features">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>
                        <ChevronRight className="milking-feature-icon" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="milking-close-bar" onClick={() => setSelectedProduct(null)}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Milking;
