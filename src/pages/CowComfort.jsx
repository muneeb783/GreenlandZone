import { useState } from 'react';
import { ChevronRight, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import '../styles/common-styles.css';
import '../styles/dairyfarmingsol.css';
// Dairy Parts images
import feeder from '../assets/feeder.JPG';
import brush from '../assets/cleaning_brush.JPG';
import collector from '../assets/Collector.JPG';
import fanImage from '../assets/fan.JPG';
import ePulsator from '../assets/ePulsator.JPG';
import nPulsator from '../assets/nPulsator.JPG';
import tubing from '../assets/tubing.JPG';
import zTag from '../assets/zTag.JPG';
import meter from '../assets/Collector.JPG';
// Milk Hygiene images
import acid from "../assets/acid.png";
import alkali from "../assets/alkali.png";
// Teat Health images
import iodip from "../assets/iodip.png";
import herbafilm from "../assets/herbafilm.png";
import iofilm from "../assets/iofilm.png";
import iobar from "../assets/iobar.png";
// Cow Monitoring images
import s1 from "../assets/s1.jpeg";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpeg";
import rfid from "../assets/rfid.jpeg";
import rfid2 from "../assets/rfid2.jpeg";

const CowComfort = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    // From Dairy Parts & Accessories (10 products)
    {
      id: 1,
      name: "Dairy Shed Fans",
      category: "Climate Control",
      shortDesc: "High-efficiency cooling systems for optimal cow comfort",
      fullDesc: "Combat heat stress with our advanced cooling fan systems. Energy-efficient operation combined with strategic airflow design creates the perfect barn environment. Proven to reduce heat stress and improve milk production during hot months.",
      features: [
        "Energy efficient operation",
        "Reduces heat stress by up to 40%",
        "Improves milk production 15-20%",
        "Variable speed control",
        "Weatherproof construction",
        "Low maintenance design"
      ],
      image: fanImage,
      tag: "Climate"
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
    // From Milk Hygiene Solutions (3 products)
    {
      id: 10,
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
      id: 11,
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
      id: 12,
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
    },
    // From Teat & Udder Health (4 products)
    {
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
    },
    // From SenseTime Cow Monitoring (4 products)
    {
      id: 17,
      name: "Cow Monitoring System (cSenseTM Flex Neck Tag)",
      category: "Monitoring",
      shortDesc: "Advanced neck-mounted monitoring system for comprehensive cow health tracking",
      fullDesc: "The cSenseTM Flex neck tag is based on the proven SCR neck tag technology already in use on thousands of farms worldwide. This advanced system delivers precise monitoring of heat detection, health status, and rumination patterns. The comfortable, durable design ensures accurate data collection while maintaining cow comfort throughout lactation.",
      features: [
        "Best-in-class heat detection accuracy (95%+)",
        "Real-time health monitoring and alerts",
        "Rumination and eating behavior tracking",
        "Based on proven SCR technology",
        "Weatherproof and durable construction",
        "Long battery life with easy replacement"
      ],
      image: s2,
      tag: "Neck Tag"
    },
    {
      id: 18,
      name: "RFID Z-Tag (eSenseTM Flex Ear Tag)",
      category: "Ear Tag",
      shortDesc: "The most advanced ear tag monitoring system available on the market",
      fullDesc: "The eSenseTM Flex ear tag represents the newest breakthrough in cow monitoring technology. As the most advanced ear tag on the market, it provides comprehensive health insights, heat detection, and activity monitoring in a compact, lightweight design. Perfect for farmers who prefer ear tag systems or mixed-use operations.",
      features: [
        "Most advanced ear tag technology available",
        "Superior heat detection capability",
        "Comprehensive health insight monitoring",
        "Lightweight and comfortable for cows",
        "Easy application and management",
        "Seamless integration with farm systems"
      ],
      image: rfid,
      tag: "Ear Tag"
    },
    {
      id: 19,
      name: "RFID Tag (eSenseTM Flex - Alternative)",
      category: "Ear Tag",
      shortDesc: "The most advanced ear tag monitoring system available on the market",
      fullDesc: "The eSenseTM Flex ear tag represents the newest breakthrough in cow monitoring technology. As the most advanced ear tag on the market, it provides comprehensive health insights, heat detection, and activity monitoring in a compact, lightweight design. Perfect for farmers who prefer ear tag systems or mixed-use operations.",
      features: [
        "Most advanced ear tag technology available",
        "Superior heat detection capability",
        "Comprehensive health insight monitoring",
        "Lightweight and comfortable for cows",
        "Easy application and management",
        "Seamless integration with farm systems"
      ],
      image: rfid2,
      tag: "Ear Tag"
    },
    {
      id: 20,
      name: "SenseHub System",
      category: "Data Platform",
      shortDesc: "Central hub for actionable farm management insights and data analytics",
      fullDesc: "The SenseHub data platform serves as the brain of the SenseTime monitoring system. It collects, analyzes, and presents real-time data from all monitored cows, providing actionable insights on reproductive status, health conditions, nutritional needs, and overall wellbeing. The intuitive interface makes complex data simple to understand and act upon.",
      features: [
        "Real-time data analytics and insights",
        "Actionable alerts for heat, health, and nutrition",
        "Individual and group monitoring capabilities",
        "Mobile and desktop access",
        "Historical data tracking and reports",
        "Integration with farm management software"
      ],
      image: s3,
      tag: "Platform"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Professional-grade products from dairy parts to health monitoring systems for complete cow care"
    },
    {
      icon: Users,
      title: "Comprehensive Solutions",
      description: "Everything from hygiene chemicals to smart monitoring - all your cow comfort and udder health needs covered"
    },
    {
      icon: TrendingUp,
      title: "Improved Productivity",
      description: "Better cow health and comfort directly translates to higher milk production and herd performance"
    },
    {
      icon: Sparkles,
      title: "Advanced Technology",
      description: "Smart monitoring systems and premium health products using the latest dairy technology"
    }
  ];

  const stats = [
    { value: "20", label: "Product Solutions" },
    { value: "99%", label: "Hygiene Standard" },
    { value: "95%", label: "Heat Detection Accuracy" }
  ];

  return (
    <div className="dairy-container">
      <SEO
        title="Cow Comfort & Udder Health - Complete Care Solutions"
        description="Comprehensive cow comfort and udder health solutions including dairy parts, hygiene products, teat health care, and smart cow monitoring systems. Complete range of products for optimal animal welfare and milk quality."
        keywords="cow comfort, udder health, dairy parts, milk hygiene, teat health, cow monitoring, dairy accessories, milking equipment, farm hygiene, animal welfare"
        url="https://greenlandzone.com/products/cowcomfort"
      />
      {/* Hero Section */}
      <header className="dairy-hero-section" data-navbar-theme="dark">
        <div className="dairy-hero-overlay"></div>
        <div className="dairy-hero-content">
          <div className="dairy-hero-badge">COMPLETE COW CARE SOLUTIONS</div>
          <h1 className="dairy-hero-title">
            Cow Comfort &
            <span className="dairy-hero-accent">Udder Health</span>
          </h1>
          <p className="dairy-hero-description">
            Complete range of dairy parts, hygiene solutions, teat health products, and smart monitoring systems
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
          <h2 className="dairy-features-title">Why Choose Our Cow Comfort Solutions?</h2>
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
            Complete solutions for cow comfort, udder health, hygiene, and monitoring
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

export default CowComfort;
