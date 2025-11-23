import { useState } from 'react';
import { ChevronRight, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import '../styles/common-styles.css';
import '../styles/dairyParts.css';
import feeder from '../assets/feeder.JPG';
import brush from '../assets/cleaning_brush.JPG';
import collector from '../assets/Collector.JPG';
import ePulsator from '../assets/ePulsator.JPG';
import nPulsator from '../assets/nPulsator.JPG';
import tubing from '../assets/tubing.JPG';
import zTag from '../assets/zTag.JPG';
import meter from '../assets/Collector.JPG';

const DairyParts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Enhanced product data with comprehensive dairy parts information
  const products = [
    {
      id: 1,
      name: "Milk Feeder Bucket",
      category: "Feeding",
      shortDesc: "Durable milk feeding bucket designed for efficient calf feeding",
      fullDesc: "Our premium milk feeder buckets are engineered for durability and ease of use. Made from food-grade materials, they ensure safe and hygienic feeding for your calves. The ergonomic design makes handling simple, while the robust construction guarantees years of reliable service.",
      features: [
        "Food-grade, BPA-free construction",
        "Ensures even feed distribution",
        "Reduces wastage and spillage",
        "Easy storage, handling and cleaning",
        "Graduated measurement markings",
        "UV-resistant for outdoor use"
      ],
      image: feeder,
      tag: "Essential"
    },
    {
      id: 2,
      name: "Cleaning Brush Set",
      category: "Hygiene",
      shortDesc: "Professional-grade cleaning equipment for dairy equipment maintenance",
      fullDesc: "Maintain the highest hygiene standards with our specialized cleaning brush sets. Designed specifically for dairy equipment, these brushes feature durable, safe bristles that effectively clean without damaging surfaces. Essential for maintaining milk quality and equipment longevity.",
      features: [
        "Durable and food-safe bristles",
        "Ensures complete cleanliness",
        "Ergonomic non-slip handles",
        "Suitable for all bucket types",
        "Heat-resistant up to 80°C",
        "Easy to sanitize and store"
      ],
      image: brush,
      tag: "Hygiene"
    },
    {
      id: 3,
      name: "Milk Collector Jar",
      category: "Milking",
      shortDesc: "Precision milk collection and measurement system",
      fullDesc: "Our milk collector jars are essential for accurate milk measurement during milking operations. Featuring durable, hygienic construction and reliable graduated scales, they provide precise measurements for individual cow monitoring and milk quality control.",
      features: [
        "Durable and hygienic food-grade construction",
        "Accurate graduated measurement scale",
        "Clear visibility for easy reading",
        "Delivers measured quantity via flow meter nozzle",
        "Easy-clean smooth interior",
        "Compatible with standard milking systems"
      ],
      image: collector,
      tag: "Precision"
    },
    {
      id: 4,
      name: "Electronic Pulsator",
      category: "Milking",
      shortDesc: "Advanced electronic pulsation system for gentle, efficient milking",
      fullDesc: "Our electronic pulsators represent the latest in milking technology. Providing precise control over pulsation rates and ratios, they ensure gentle milking that improves udder health while maximizing milk yield. The digital interface allows for easy adjustments to match individual cow needs.",
      features: [
        "Precise digital control of pulsation rate",
        "Programmable pulsation ratios (60:40, 65:35, 70:30)",
        "Improves udder health and milking efficiency",
        "LED display for easy monitoring",
        "Low maintenance and highly durable",
        "Energy-efficient operation"
      ],
      image: ePulsator,
      tag: "Technology"
    },
    {
      id: 5,
      name: "Pneumatic Pulsator",
      category: "Milking",
      shortDesc: "Reliable air-driven pulsation system for consistent milking",
      fullDesc: "Our pneumatic pulsators offer time-tested reliability for dairy operations. Using air pressure to create consistent pulsation, they provide gentle, effective milking without the need for complex electronics. Simple design ensures easy maintenance and long service life.",
      features: [
        "Reliable air-driven pulsation for gentle milking",
        "Simple mechanical design, minimal maintenance",
        "Compatible with most vacuum systems",
        "Adjustable pulsation rate",
        "Proven durability in harsh environments",
        "No electrical components to fail"
      ],
      image: nPulsator,
      tag: "Reliable"
    },
    {
      id: 6,
      name: "Milk Line Tubing",
      category: "Accessories",
      shortDesc: "Premium food-grade tubing for safe milk transport",
      fullDesc: "Our specialized milk line tubing is manufactured to the highest standards for dairy operations. Made from food-grade materials that resist bacterial growth, it ensures your milk stays clean and fresh from cow to tank. Flexible yet durable construction makes installation and replacement simple.",
      features: [
        "Food-grade, FDA-approved material",
        "Flexible and highly durable",
        "Resistant to milk fats and cleaning chemicals",
        "Easy to clean and replace",
        "Various diameter options available",
        "Smooth interior prevents bacterial buildup"
      ],
      image: tubing,
      tag: "Quality"
    },
    {
      id: 7,
      name: "Z-Tag Identification System",
      category: "Management",
      shortDesc: "Advanced cattle identification and herd management solution",
      fullDesc: "Our Z-Tag identification system provides reliable, long-lasting cattle identification essential for modern herd management. Weather-resistant tags ensure visibility in all conditions, while the easy application system minimizes stress on animals. Perfect for tracking health, breeding, and production records.",
      features: [
        "Long-lasting and weather resistant construction",
        "Highly visible number printing",
        "Easy application with tag applicator",
        "Helps track health, breeding, and production",
        "Tamper-resistant design",
        "Available in multiple colors for categorization"
      ],
      image: zTag,
      tag: "Management"
    },
    {
      id: 8,
      name: "Digital Milk Meter",
      category: "Monitoring",
      shortDesc: "Accurate digital measurement system for individual cow milk yield",
      fullDesc: "Track individual cow performance with our precision digital milk meters. Real-time measurement of milk yield helps you identify high and low producers, monitor health issues, and optimize feeding strategies. The digital display provides instant, accurate readings that integrate seamlessly with farm management software.",
      features: [
        "Highly accurate digital measurement of milk quantity",
        "Real-time yield monitoring per cow",
        "Helps monitor cow productivity and health",
        "Easy integration with milking and management systems",
        "Data logging capabilities",
        "Battery or line-powered options"
      ],
      image: meter,
      tag: "Precision"
    },
    {
      id: 10,
      name: "Gia",
      category: "Parts",
      shortDesc: "Genuine OEM spare parts for Gia dairy machinery",
      fullDesc: "Maintain peak performance of your Gia dairy equipment with our comprehensive range of genuine OEM spare parts. Each component is manufactured to exact factory specifications, ensuring perfect compatibility and reliable operation",
      features: [
        "100% genuine OEM Gia parts - guaranteed authenticity",
        "Manufactured to exact factory specifications",
        "Complete compatibility with all Gia machinery models",
        "Extensive inventory for quick availability",
        "Manufacturer warranty on all parts",
        "Expert technical support and installation guidance",
        "Reduces equipment downtime significantly",
        "Maintains optimal machine performance and longevity"
       ],

      image: meter,
      tag: "Parts"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "All dairy parts manufactured to the highest industry standards with food-grade, durable materials"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Technical assistance and guidance to help you choose the right parts for your dairy operation"
    },
    {
      icon: TrendingUp,
      title: "Proven Performance",
      description: "Our parts are trusted by dairy farms nationwide for reliability and consistent performance"
    },
    {
      icon: Sparkles,
      title: "Easy Maintenance",
      description: "Designed for simple installation, cleaning, and replacement to minimize downtime"
    }
  ];

  const stats = [
    { value: "40%", label: "Feed Efficiency Improvement" },
    { value: "60%", label: "Time Saved" },
    { value: "25%", label: "Better Growth Rates" }
  ];

  return (
    <div className="feeding-container">
      <SEO
        title="Dairy Parts & Accessories"
        description="Essential dairy equipment parts including milk feeder buckets, cleaning brushes, pulsators, milk meters, and tubing. Quality dairy accessories for efficient farm operations."
        keywords="dairy parts, milk feeder bucket, dairy cleaning brush, milk pulsators, milk meters, dairy tubing, farm equipment accessories"
        url="https://greenlandzone.com/products/parts"
      />
      {/* Hero Section */}
      <header className="feeding-hero-section" data-navbar-theme="dark">
        <div className="feeding-hero-overlay"></div>
        <div className="feeding-hero-content">
          <div className="feeding-hero-badge">PREMIUM DAIRY PARTS & ACCESSORIES</div>
          <h1 className="feeding-hero-title">
            Dairy Parts
            <span className="feeding-hero-accent">Solutions</span>
          </h1>
          <p className="feeding-hero-description">
            Complete range of dairy parts and accessories for optimal farm productivity and animal health
          </p>

          {/* Stats Grid */}
          <div className="feeding-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="feeding-stat-item">
                <div className="feeding-stat-number">{stat.value}</div>
                <div className="feeding-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="feeding-features-section">
        <div className="feeding-features-container">
          <h2 className="feeding-features-title">Why Choose Our Dairy Parts?</h2>
          <div className="feeding-features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feeding-feature-card">
                  <div className="feeding-feature-icon-wrapper">
                    <IconComponent className="feeding-feature-icon-svg" size={48} strokeWidth={1.5} />
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
      <section className="feeding-products-section">
        <div className="feeding-products-container">
          <h2 className="feeding-section-title">Our Product Range</h2>
          <p className="feeding-section-subtitle">
            High-quality dairy parts and accessories for every aspect of your milking and feeding operations
          </p>

          <div className="feeding-products-grid">
            {products.map(product => (
              <div
                key={product.id}
                className="feeding-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="feeding-product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="feeding-product-image"
                  />
                  <div className="feeding-product-category">{product.tag}</div>
                  <div className="feeding-product-overlay">
                    <button className="feeding-view-details-btn">
                      View Details
                      <ChevronRight className="btn-icon" size={16} />
                    </button>
                  </div>
                </div>
                <div className="feeding-product-content">
                  <div className="feeding-product-category-text">{product.category}</div>
                  <h3 className="feeding-product-title">{product.name}</h3>
                  <p className="feeding-product-description">{product.shortDesc}</p>
                  <ul className="feeding-product-features">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="feeding-feature-item">
                        <ChevronRight className="feeding-feature-bullet-icon" size={16} />
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
        <div className="feeding-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="feeding-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="feeding-modal-grid">
              <div className="feeding-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="feeding-modal-info">
                <div className="feeding-modal-header">
                  <div className="feeding-modal-category">{selectedProduct.category}</div>
                  <span className="feeding-modal-tag">{selectedProduct.tag}</span>
                </div>
                <h2 className="feeding-modal-title">{selectedProduct.name}</h2>
                <p className="feeding-modal-description">{selectedProduct.fullDesc}</p>

                <div className="feeding-modal-features-section">
                  <h3 className="feeding-modal-features-title">Key Features</h3>
                  <ul className="feeding-modal-features">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>
                        <ChevronRight className="feeding-feature-icon" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="feeding-close-bar" onClick={() => setSelectedProduct(null)}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DairyParts;
