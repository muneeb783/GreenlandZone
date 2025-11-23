import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, Leaf, Heart, Download } from 'lucide-react';
import { SEO } from '../components/SEO';
import '../styles/productsLanding.css';

const ProductsLanding = () => {
  // Handle catalogue download
  const handleDownloadCatalogue = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/catalogue.pdf'; // Place your catalogue PDF in the public folder
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
          name: "Dairy Farming Solutions",
          path: "/products/dairy",
          description: "Complete equipment solutions for dairy operations"
        },
        {
          name: "Forage and Silage Making",
          path: "/products/forage",
          description: "Efficient forage harvesting and storage systems"
        },
        {
          name: "Milking Solutions",
          path: "/products/milking",
          description: "Professional milking equipment and parlor systems"
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
      icon: Heart,
      description: "Comprehensive solutions for animal welfare and udder health management",
      color: "#16a34a",
      products: [
        {
          name: "Dairy Parts & Accessories",
          path: "/products/parts",
          description: "Essential dairy equipment parts and accessories"
        },
        {
          name: "Milk Hygiene Solutions",
          path: "/products/hygiene",
          description: "Advanced hygiene systems for milk quality"
        },
        {
          name: "Teat & Udder Health",
          path: "/products/teat",
          description: "Specialized care for optimal udder health"
        },
        {
          name: "SenseTime Cow Monitoring",
          path: "/products/monitoring",
          description: "Smart monitoring system for herd management"
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
                  {category.products.map((product, index) => (
                    <Link
                      key={index}
                      to={product.path}
                      className="products-card"
                    >
                      <div className="products-card-content">
                        <h3 className="products-card-title">{product.name}</h3>
                        <p className="products-card-description">{product.description}</p>
                        <div className="products-card-link">
                          Learn More
                          <ChevronRight size={18} className="products-card-arrow" />
                        </div>
                      </div>
                    </Link>
                  ))}
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
