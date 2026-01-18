import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, Leaf, Download } from 'lucide-react';
import { SEO } from '../components/SEO';
import '../styles/productsLanding.css';
import cataloguePdf from '../assets/catalogue.pdf';
import balerImage from '../assets/baler.png';
import feedImage from '../assets/globalmpg.jpeg';
import cowComfortImage from '../assets/s2.jpeg';

// Custom Cow Icon using your provided SVG path
const CowIcon = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 475.695 475.696"
    width={size} 
    height={size} 
    fill={color} 
    className={className}
    style={{ display: 'block' }} 
  >
    <g>
      <polygon points="473.006,155.496 421.754,102.028 444.061,87.801 445.363,76.713 435.016,76.096 408.182,95.397 374.697,95.426 354.199,82.91 346.857,84.409 346.965,92.546 360.178,107.18 358.436,114.867 202.938,131.59 41.869,127.092 24.512,134.368 11.727,150.614 5.149,188.614 3.987,215.93 0,241.437 1.096,266.842 5.58,267.759 12.098,260.583 17.397,236.746 13.102,203.678 14.596,203.453 24.692,253.795 17.815,297.485 24.094,384.681 24.692,394.337 30.811,399.557 57.866,399.599 66.584,396.962 42.379,357.545 54.387,307.489 60.676,307.5 82.619,374.053 93.93,391.139 99.51,394.574 129.375,394.596 133.207,389.801 107.354,373.92 89.825,319.936 94.219,311.172 104.516,312.128 110.981,327.958 120.346,312.528 129.42,328.024 137.106,311.198 159.729,293.808 240.008,286.12 253.482,302.593 264.838,383.123 270.812,394.694 298.166,394.683 301.115,390.347 284.489,367.206 282.491,323.141 291.469,328.124 300.926,357.395 312.953,395.403 318.346,399.584 342.82,399.599 344.852,394.072 337.697,387.45 314.619,342.349 319.939,295.083 345.799,275.954 383.469,205.985 426.826,185.969 466.697,181.43 470.115,177.724 475.695,161.998" />
    </g>
  </svg>
);

const ProductsLanding = () => {
  // Handle catalogue download
  const handleDownloadCatalogue = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = cataloguePdf; 
    link.download = 'Greenland-Zone-Product-Catalogue.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categories = [
    {
      id: 1,
      title: "Mechanization",
      icon: Wrench,
      description: "Advanced equipment and machinery solutions for modern dairy farming operations",
      color: "#16a34a",
      products: [
        {
          name: "Mechanization",
          path: "/products/mechanization",
          description: "Complete range of dairy farming equipment, milking systems, and forage solutions"
        }
      ]
    },
    {
      id: 2,
      title: "Feed Additives",
      icon: Leaf,
      description: "Premium nutritional supplements to enhance herd health and productivity",
      color: "#16a34a",
      products: [
        {
          name: "Feed Additives",
          path: "/products/feed",
          description: "High-quality feed supplements for optimal nutrition"
        }
      ]
    },
    {
      id: 3,
      title: "Cow Comfort & Udder Health",
      icon: CowIcon,
      description: "Comprehensive solutions for animal welfare and udder health management",
      color: "#16a34a",
      products: [
        {
          name: "Cow Comfort & Udder Health",
          path: "/products/cowcomfort",
          description: "Complete solutions for dairy parts, hygiene, teat health, and cow monitoring"
        }
      ]
    }
  ];

  return (
    <div className="products-landing-container">
      <SEO
        title="Products - Complete Dairy Farming Solutions"
        description="Explore our comprehensive range of dairy farming products including mechanization equipment, feed additives, and cow comfort solutions. Advanced milking systems, forage solutions, and health monitoring."
        keywords="dairy farming products, milking solutions, forage equipment, feed additives, cow monitoring, dairy mechanization, milk hygiene, udder health"
        url="https://greenlandzone.com/products"
      />
      {/* Hero Section */}
      <section className="products-hero" data-navbar-theme="dark">
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content">
          <div className="products-hero-badge">OUR SOLUTIONS</div>
          <h1 className="products-hero-title">
            Complete Dairy Farming
            <span className="products-hero-accent">Solutions</span>
          </h1>
          <p className="products-hero-description">
            Explore our comprehensive range of products and services designed to optimize your dairy farming operations
          </p>
          <button onClick={handleDownloadCatalogue} className="products-download-catalogue-btn">
            <Download size={20} />
            Download Product Catalogue
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="products-categories-section" data-navbar-theme="light">
        <div className="products-categories-container">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="products-category-wrapper">
                <div className="products-category-header">
                  <div className="products-category-icon" style={{ backgroundColor: `${category.color}15` }}>
                    <IconComponent size={40} color={category.color} strokeWidth={1.5} />
                  </div>
                  <div className="products-category-info">
                    <h2 className="products-category-title">{category.title}</h2>
                    <p className="products-category-description">{category.description}</p>
                  </div>
                </div>

                <div className="products-grid">
                  {category.products.map((product, index) => {
                    // Determine background image based on category
                    const getBackgroundImage = () => {
                      if (category.id === 1) return balerImage;
                      if (category.id === 2) return feedImage;
                      if (category.id === 3) return cowComfortImage;
                      return '';
                    };

                    return (
                      <Link
                        key={index}
                        to={product.path}
                        className="products-card products-card-featured"
                        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
                      >
                        <div className="products-card-overlay"></div>
                        <div className="products-card-content">
                          <h3 className="products-card-title">{product.name}</h3>
                          <p className="products-card-description">{product.description}</p>
                          <div className="products-card-link">
                            Learn More
                            <ChevronRight size={18} className="products-card-arrow" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta-section" data-navbar-theme="light">
        <div className="products-cta-container">
          <h2 className="products-cta-title">Need Help Choosing the Right Solution?</h2>
          <p className="products-cta-description">
            Our experts are ready to help you find the perfect products for your dairy farm
          </p>
          <div className="products-cta-buttons">
            <Link to="/contact" className="products-cta-button primary">
              Contact Us
              <ChevronRight size={20} />
            </Link>
            <button onClick={handleDownloadCatalogue} className="products-cta-button secondary">
              <Download size={20} />
              Download Catalogue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsLanding;
