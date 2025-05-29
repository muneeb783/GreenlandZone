
import { useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/feeding.css'

const FeedingSol = () => {
  const products = [
    {
      id: 1,
      name: "Silage Bale",
      description: "Silage Bale",
      features: [
        "Ready to server silage wrapped bales"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Feeding Trolly",
      description: "Feeding Trolly",
      features: [
        "Easy to carry feed",
        "Reduce labor"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Calf Feeding Trolly",
      description: "Calf Feeding Trolly",
      features: [
        "Used to maintain temperature of milk for calves",
        "It maintains temperature by indirect heating system",
        "Delivers measured quantity milk by flow meter nozzle"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      name: "Automatic Drinker",
      description: "Automatic Drinker",
      features: [
        " Enables the cattle to drink fresh and clean water",
        "Controls wastage of water",
        " Easy approach of animal"
      ],
      image: "/api/placeholder/600/400"
    },
    {
        id: 5,
        name: "Milk Feeding Bucket For Calves",
        description: "Feeding Bucket for Calves",
        features: [
          "Ensures calf health by proper feeding",
          "Each calf gets measured quantity of milk"
        ],
        image: "/api/placeholder/600/400"
    },

    {
        id: 6,
        name: "Feed Crusher",
        description: "Feed Crusher",
        features: [
          " Used to crush feed grains",
          "Its rollers are designed to give required particle size"
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

export default FeedingSol;