import { useState } from 'react';
import { ChevronRight, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import '../styles/common-styles.css';
import '../styles/foragesol.css';

const ForageSol = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Enhanced product data with comprehensive forage and silage equipment information
  const products = [
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
      image: "/api/placeholder/600/400",
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
      image: "/api/placeholder/600/400",
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
      image: "/api/placeholder/600/400",
      tag: "Efficient"
    },
    {
      id: 4,
      name: "Small Silage Baler and Wrapper",
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
      image: "/api/placeholder/600/400",
      tag: "Automated"
    },
    {
      id: 5,
      name: "Silage Compactor",
      category: "Processing",
      shortDesc: "Heavy-duty compaction equipment for optimal silage density",
      fullDesc: "Achieve maximum silage quality with our professional silage compactor. Proper compaction is crucial for anaerobic fermentation and long-term storage stability. This equipment ensures optimal density, eliminating air pockets that can cause spoilage. The robust construction handles heavy-duty use, making it ideal for large-scale silage operations.",
      features: [
        "Heavy-duty compaction for optimal density",
        "Eliminates air pockets for better fermentation",
        "Compatible with standard farm tractors",
        "Durable steel construction",
        "Adjustable weight distribution",
        "Reduces silage spoilage and waste"
      ],
      image: "/api/placeholder/600/400",
      tag: "Quality"
    },
    {
      id: 6,
      name: "Forage Tedder",
      category: "Processing",
      shortDesc: "Professional tedding equipment for faster, more uniform drying",
      fullDesc: "Speed up your hay and forage drying process with our high-efficiency tedder. By lifting and spreading cut forage, it exposes more surface area to air and sunlight, dramatically reducing drying time. The result is better quality hay with preserved nutrients and reduced risk of weather damage. Adjustable settings allow customization for different crop types and field conditions.",
      features: [
        "Accelerates forage drying time by 40-50%",
        "Lifts and spreads forage for uniform drying",
        "Preserves nutritional value",
        "Reduces weather damage risk",
        "Adjustable tine settings for different crops",
        "Compatible with standard tractors"
      ],
      image: "/api/placeholder/600/400",
      tag: "Efficiency"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Professional-grade equipment built to withstand the demands of modern forage operations"
    },
    {
      icon: TrendingUp,
      title: "High Efficiency",
      description: "Maximum output with minimum fuel consumption and time, increasing your operational productivity"
    },
    {
      icon: Sparkles,
      title: "Advanced Technology",
      description: "Fully automated systems with PLC control reduce labor costs and increase precision"
    },
    {
      icon: Users,
      title: "Tractor Compatible",
      description: "Designed to work seamlessly with standard 40 HP farm tractors for easy integration"
    }
  ];

  const stats = [
    { value: "70%", label: "Faster Harvesting" },
    { value: "90%", label: "Feed Quality Improvement" },
    { value: "80%", label: "Labor Savings" }
  ];

  return (
    <div className="forage-container">
      {/* Hero Section */}
      <header className="forage-hero-section forage-full-width" data-navbar-theme="dark">
        <div className="forage-hero-overlay"></div>
        <div className="forage-hero-content">
          <div className="forage-hero-badge">FORAGE & SILAGE MAKING EQUIPMENT</div>
          <h1 className="forage-hero-title">
            Forage & Silage Making
            <span className="forage-hero-accent">Solutions</span>
          </h1>
          <p className="forage-hero-description">
            Advanced equipment for efficient forage harvesting, processing, and premium silage production
          </p>

          {/* Stats Grid */}
          <div className="forage-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="forage-stat-item">
                <div className="forage-stat-number">{stat.value}</div>
                <div className="forage-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="forage-features-section forage-full-width">
        <div className="forage-features-container">
          <h2 className="forage-features-title">Why Choose Our Forage & Silage Solutions?</h2>
          <div className="forage-features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="forage-feature-card">
                  <div className="forage-feature-icon-wrapper">
                    <IconComponent className="forage-feature-icon-svg" size={48} strokeWidth={1.5} />
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
      <section className="forage-products-section forage-full-width">
        <div className="forage-products-container">
          <h2 className="forage-section-title">Our Product Range</h2>
          <p className="forage-section-subtitle">
            Complete line of forage harvesting and silage making equipment for modern agricultural operations
          </p>

          <div className="forage-products-grid">
            {products.map(product => (
              <div
                key={product.id}
                className="forage-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="forage-product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="forage-product-image"
                  />
                  <div className="forage-product-category">{product.tag}</div>
                  <div className="forage-product-overlay">
                    <button className="forage-view-details-btn">
                      View Details
                      <ChevronRight className="btn-icon" size={16} />
                    </button>
                  </div>
                </div>
                <div className="forage-product-content">
                  <div className="forage-product-category-text">{product.category}</div>
                  <h3 className="forage-product-title">{product.name}</h3>
                  <p className="forage-product-description">{product.shortDesc}</p>
                  <ul className="forage-product-features">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="forage-feature-item">
                        <ChevronRight className="forage-feature-bullet-icon" size={16} />
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
        <div className="forage-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="forage-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="forage-modal-grid">
              <div className="forage-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="forage-modal-info">
                <div className="forage-modal-header">
                  <div className="forage-modal-category">{selectedProduct.category}</div>
                  <span className="forage-modal-tag">{selectedProduct.tag}</span>
                </div>
                <h2 className="forage-modal-title">{selectedProduct.name}</h2>
                <p className="forage-modal-description">{selectedProduct.fullDesc}</p>

                <div className="forage-modal-features-section">
                  <h3 className="forage-modal-features-title">Key Features</h3>
                  <ul className="forage-modal-features">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>
                        <ChevronRight className="forage-feature-icon" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="forage-close-bar" onClick={() => setSelectedProduct(null)}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForageSol;
