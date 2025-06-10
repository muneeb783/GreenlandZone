import { useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/farmbiosec.css'

const TeatHealthSol = () => {
  // Sample product data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "Pre Dip Teat Foam",
      description: "Cubicles are animal rest areas",
      features: [
        "Acetic acid based & Iodine based",
        "Contains provitamine B5, glycerine & lanolin",
        "Softens the udder skin and hydrate it during milking"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Post Dip Solution",
      description: "Post Dip Solution",
      features: [
        "Have same active properties & ingrediants as Herbafilm",
        "Does not create a peelable film",
        "Creates a very thin waxy barrier on the teat skin which comes off easily when you wipe it"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Post Dip Film",
      description: "Post Dip Film",
      features: [
        "Post dip anti-becterial which protects teat orrifice between two milking",
        "Fly repellent",
        "Enriched with glycerine and lanoline to prevent irritation",
        "Contains skin softener  & substances with moisturizing cosmetic properties"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      name: "Post Dip Solution/Spray",
      description: "Post Dip Solution/Spray",
      features: [
        "Ready to use post milking disinfectant which kills bacteria that causes mastits",
        "Contains 5.5% active iodine",
        "Enriched with glycerine and lanoline to prevent irritation and protects integrity of teat",
        "Dries on teat and creates a barrier"
      ],
      image: "/api/placeholder/600/400"
    }
  ];

  const [filter, setFilter] = useState('all');
  
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <h1 className="header-title">Dairy Farm Equipment Solutions</h1>
          <p className="header-subtitle">Comprehensive solutions for modern dairy farming</p>
        </div>
      </header>

      {/* Product Filter */}
      <div className="container-fluid px-4">
        <div className="filter-section">
          <h2 className="section-title">Our Product Solutions</h2>
          <div className="filter-buttons">

            <Link
              to="/products/dairy"
              className="filter-button btn-link"
            >
              Dairy Farming
            </Link>

            <Link
              to="/products/feeding"
              className="filter-button btn-link"
            >
              Feeding
            </Link>

            <Link
              to="/products/forage"
              className="filter-button btn-link"
            >
              Forage &amp; Hay Making
            </Link>

            <Link
              to="/products/silage"
              className="filter-button btn-link"
            >
              Silage Making
            </Link>

            <Link
              to="/products/milking"
              className="filter-button btn-link"
            >
              Milking
            </Link>

            <Link
              to="/products/biosecurity"
              className="filter-button btn-link"
            >
              Farm Biosecurity
            </Link>

            <Link
              to="/products/hygiene"
              className="filter-button btn-link"
            >
              Milk Hygiene
            </Link>

            <Link
              to="/products/teat"
              className="filter-button btn-link"
            >
              Teat & Udder Health
            </Link>

            <Link
              to="/products/calf"
              className="filter-button btn-link"
            >
              Calf Health
            </Link>

            <Link
              to="/products/monitoring"
              className="filter-button btn-link"
            >
              SenseTime Cow Monitoring
            </Link>

            <Link
              to="/products/monitoring"
              className="filter-button btn-link"
            >
              Feed Additives
            </Link>

          </div>
        </div>

        {/* Product Grid */}
        <div className='container dairy-products-container'>
            <div className="products-grid">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
        <div className="product-title-overlay">
          <h3 className="product-title">
            {product.name}
          </h3>
        </div>
      </div>
      <div className="product-content">
        <p className="product-description">{product.description}</p>
        <ul className="product-features">
          {product.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-bullet">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeatHealthSol;