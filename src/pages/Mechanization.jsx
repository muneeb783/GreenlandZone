import { useState } from 'react';
import { ChevronRight, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import '../styles/common-styles.css';
import '../styles/dairyfarmingsol.css';
import harvester from "../assets/Grass_Harvester.png";
import drum from "../assets/drum_mover.png";
import srfh from "../assets/SRFH.png";
import baler from "../assets/baler.png";
import dbdc from "../assets/dbdc.JPG";
import sbsc from "../assets/sbsc.JPG";
import sbdc from "../assets/sbdc.JPG";
import meter from "../assets/Collector.JPG";

const Mechanization = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    // From Forage and Silage Making (4 products)
    {
      id: 1,
      name: "Forage Harvester For Grass",
      category: "Harvesting",
      shortDesc: "High-performance grass harvesting equipment for all grass types",
      fullDesc: "Our premium forage harvester is engineered to handle all types of grasses with precision and efficiency. Featuring adjustable chop size technology, this powerful machine ensures optimal forage quality for your livestock. Built with robust construction and designed to work seamlessly with standard farm tractors, it delivers consistent performance season after season.",
      features: [
        "Cuts all kinds of grasses (Lucern, Rai grass, Rhodes grass, Jodal)",
        "Adjustable chop size for optimal feed quality",
        "High-capacity cutting system for faster harvesting",
        "Compatible with 40 HP tractor",
        "Durable steel construction for long service life",
        "Easy maintenance and blade replacement"
      ],
      image: harvester,
      tag: "Professional"
    },
    {
      id: 2,
      name: "Drum Mower",
      category: "Cutting",
      shortDesc: "Efficient drum-type grass cutting solution for clean, precise cuts",
      fullDesc: "Our drum mower represents the pinnacle of grass cutting technology. Designed specifically for delicate grasses like Barseem, Lucern, and Rhodes grass, it delivers clean cuts that promote faster regrowth and better forage quality. The drum design ensures even cutting across the entire width, minimizing crop loss and maintaining nutritional value.",
      features: [
        "Ideal for cutting Barseem, Lucern, and Rhodes grass",
        "Drum-type cutting system for clean, precise cuts",
        "Minimal crop loss and maximum yield",
        "Compatible with 40 HP tractor",
        "Adjustable cutting height",
        "Weather-resistant durable construction"
      ],
      image: drum,
      tag: "Precision"
    },
    {
      id: 3,
      name: "Single Row Forage Harvester",
      category: "Harvesting",
      shortDesc: "Efficient single-row harvesting solution for targeted crop collection",
      fullDesc: "Perfect for operations requiring precise row-by-row harvesting, our single row forage harvester delivers exceptional performance and versatility. The adjustable chop size feature allows you to customize the output to match your silage or feed requirements. Engineered for efficiency and ease of use, this harvester maximizes productivity while minimizing fuel consumption.",
      features: [
        "Designed for single-row field harvesting",
        "Adjustable chop size for customized output",
        "High-efficiency cutting and chopping system",
        "Requires 40 HP tractor for operation",
        "Easy to attach and detach from tractor",
        "Low maintenance requirements"
      ],
      image: srfh,
      tag: "Efficient"
    },
    {
      id: 4,
      name: "SS Silage Baler and Wrapper",
      category: "Baling",
      shortDesc: "Fully automated baling and wrapping system for premium silage production",
      fullDesc: "Revolutionize your silage making with our state-of-the-art automated baler and wrapper. Featuring ABB motors and Siemens PLC control system, this machine represents the cutting edge of agricultural automation. The inverter-equipped wrapping table ensures smooth, consistent wrapping with minimal film breakage. Adjustable chamber accommodates various bale sizes, making it perfect for farms of all scales.",
      features: [
        "Fully automatic operation with ABB motors and Siemens PLC system",
        "Inverter-equipped wrapping table for smooth operation",
        "Minimized film breakdown and consistent wrapping quality",
        "Adjustable baler chamber for flexible bale sizing",
        "Produces bales from 60kg to 100kg",
        "Significantly reduces labor requirements",
        "Digital control interface for precision operation",
        "High-quality airtight wrapping for superior fermentation"
      ],
      image: baler,
      tag: "Automated"
    },
    // From Milking Solutions (7 products)
    {
      id: 5,
      name: "Single Bucket Single Cluster (SBSC)",
      category: "Milking Systems",
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
      id: 6,
      name: "Single Bucket Double Cluster (SBDC)",
      category: "Milking Systems",
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
      id: 7,
      name: "Double Bucket Double Cluster (DBDC)",
      category: "Milking Systems",
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
      id: 8,
      name: "Bucket Milking System",
      category: "Milking Systems",
      shortDesc: "Efficient group milking system for flexible farm operations",
      fullDesc: "Our Bucket mobile milking system delivers professional-grade milking performance with the flexibility to move between locations. Featuring electronic pulsators and a reliable oil-type vacuum pump, this system ensures gentle, efficient milking while maintaining the highest hygiene standards. The stainless steel bucket with automatic cut-off system prevents overflow and simplifies operation.",
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
      id: 9,
      name: "Milkline",
      category: "Milking Systems",
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
      id: 10,
      name: "Herringbone Milking Parlor",
      category: "Milking Parlors",
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
      id: 11,
      name: "Fast Exit Milking Parlor",
      category: "Milking Parlors",
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
    },
    {
      id: 12,
      name: "Gia Spare Parts",
      category: "Machinery Parts",
      shortDesc: "Genuine OEM spare parts for Gia dairy machinery",
      fullDesc: "Maintain peak performance of your Gia dairy equipment with our comprehensive range of genuine OEM spare parts. Each component is manufactured to exact factory specifications, ensuring perfect compatibility and reliable operation. Our extensive inventory ensures quick availability when you need it most.",
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
      description: "Professional-grade equipment built to withstand the demands of modern dairy farming operations"
    },
    {
      icon: Users,
      title: "Complete Solutions",
      description: "From climate control to milking parlors - everything you need for efficient dairy operations"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our mechanization solutions have helped farms increase productivity by an average of 35% while reducing labor costs"
    },
    {
      icon: Sparkles,
      title: "Advanced Technology",
      description: "Latest automation and control systems for efficient farm management and superior results"
    }
  ];

  const stats = [
    { value: "12", label: "Equipment Solutions" },
    { value: "35%", label: "Productivity Increase" },
    { value: "50%", label: "Labor Reduction" }
  ];

  return (
    <div className="dairy-container">
      <SEO
        title="Mechanization - Dairy Equipment & Machinery Solutions"
        description="Complete range of dairy farming mechanization equipment including milking systems, forage harvesters, silage making equipment, and climate control solutions. Advanced machinery for modern dairy operations."
        keywords="dairy mechanization, milking equipment, forage harvester, silage baler, dairy farm machinery, milking parlor, climate control, dairy automation"
        url="https://greenlandzone.com/products/mechanization"
      />
      {/* Hero Section */}
      <header className="dairy-hero-section" data-navbar-theme="dark">
        <div className="dairy-hero-overlay"></div>
        <div className="dairy-hero-content">
          <div className="dairy-hero-badge">COMPLETE MECHANIZATION SOLUTIONS</div>
          <h1 className="dairy-hero-title">
            Dairy Farming
            <span className="dairy-hero-accent">Mechanization</span>
          </h1>
          <p className="dairy-hero-description">
            Complete range of equipment from climate control to milking parlors - everything for modern dairy operations
          </p>

          {/* Stats Grid */}
          <div className="dairy-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="dairy-stat-item">
                <div className="dairy-stat-number">{stat.value}</div>
                <div className="dairy-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="dairy-features-section" data-navbar-theme="light">
        <div className="dairy-features-container">
          <h2 className="dairy-features-title">Why Choose Our Mechanization Solutions?</h2>
          <div className="dairy-features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="dairy-feature-card">
                  <div className="dairy-feature-icon-wrapper">
                    <IconComponent className="dairy-feature-icon-svg" size={48} strokeWidth={1.5} />
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
      <section className="dairy-products-section" data-navbar-theme="light">
        <div className="dairy-products-container">
          <h2 className="dairy-section-title">Our Product Range</h2>
          <p className="dairy-section-subtitle">
            Comprehensive mechanization equipment for every aspect of your dairy farming operation
          </p>

          <div className="dairy-products-grid">
            {products.map(product => (
              <div
                key={product.id}
                className="dairy-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="dairy-product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="dairy-product-image"
                  />
                  <div className="dairy-product-category">{product.tag}</div>
                  <div className="dairy-product-overlay">
                    <button className="dairy-view-details-btn">
                      View Details
                      <ChevronRight className="btn-icon" size={16} />
                    </button>
                  </div>
                </div>
                <div className="dairy-product-content">
                  <div className="dairy-product-category-text">{product.category}</div>
                  <h3 className="dairy-product-title">{product.name}</h3>
                  <p className="dairy-product-description">{product.shortDesc}</p>
                  <ul className="dairy-product-features">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="dairy-feature-item">
                        <ChevronRight className="dairy-feature-bullet-icon" size={16} />
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
        <div className="dairy-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="dairy-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="dairy-modal-grid">
              <div className="dairy-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="dairy-modal-info">
                <div className="dairy-modal-header">
                  <div className="dairy-modal-category">{selectedProduct.category}</div>
                  <span className="dairy-modal-tag">{selectedProduct.tag}</span>
                </div>
                <h2 className="dairy-modal-title">{selectedProduct.name}</h2>
                <p className="dairy-modal-description">{selectedProduct.fullDesc}</p>

                <div className="dairy-modal-features-section">
                  <h3 className="dairy-modal-features-title">Key Features</h3>
                  <ul className="dairy-modal-features">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>
                        <ChevronRight className="dairy-feature-icon" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="dairy-close-bar" onClick={() => setSelectedProduct(null)}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mechanization;
