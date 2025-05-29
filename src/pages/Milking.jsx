import { useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/milking.css'

const Milking = () => {
  // Sample product data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "Mobile Milking Machine",
      description: "Mobile Milking Machine",
      features: [
        "Electronic Pulsator",
        "Oil type vacuum pump with wo years warranty",
        "Stainless steel bucket (40 Kg) with cut off system",
        "Can milk 16-20 animals / hour"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Rooster Group",
      description: "Rooster Group",
      features: [
        "Electronic Pulsator",
        "Vacuum pump is oil type with two years warranty",
        "Stainless steel bucket (30 Kg) with cut off system",
        "Can milk 16-20 animals / hour"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Mobile Milking Master",
      description: "Mobile Milking Master",
      features: [
        "It can milk 8 animals at one time",
        "You can move it at your desired milking shed",
        " It pumps milk directly to chiller after milking",
        "Easy to operate"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      name: "Mobile Milking Machine - Double Bucket Double Cluster",
      description: "Mobile Milking Machine - Double Bucket Double Cluster",
      features: [
        "Electronic pulsator",
        "Vacuum pump is oil type with two years warranty",
        "Stainless steel bucket (30 Kg) with cut off system",
        "Can milk 16-20 animals / hour"
      ],
      image: "/api/placeholder/600/400"
    },
    {
        id: 5,
        name: "IN/ONE",
        description: "IN/ONE",
        features: [
          "Traits With inOne, it is very easy to have your dream milking parlour",
          "Comapct design and one day installation"
        ],
        image: "/api/placeholder/600/400"
    },

    {
        id: 6,
        name: "Polypropylene Milk Cans",
        description: "Polypropylene Milk Cans",
        features: [
          "Food grade polypropylene milk cans for milking machines",
          "Easy to wash "
        ],
        image: "/api/placeholder/600/400"
    },
    {
        id: 7,
        name: "Automatic Churm",
        description: "Automatic Churm",
        features: [
          "It is used to make butter"
        ],
        image: "/api/placeholder/600/400"
    },
    {
        id: 8,
        name: "Plastic Milk Cans",
        description: "Plastic Milk Cans",
        features: [
          "Used for calf care in the first two months of age",
          "Ensure calf health by individual feeding and avoid contamination"
        ],
        image: "/api/placeholder/600/400"
    },
    {
      id: 9,
      name: "Bucket with Milking Cluster",
      description: "Bucket with Milking Cluster",
      features: [
        "Used to extend milk line"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 10,
      name: "Herribone Milking Parlor",
      description: "Herribone Milking Parlor",
      features: [
        "Best milking parlors with herd management system",
        "Ensures fast and hygienic milking"
      ],
      image: "/api/placeholder/600/400"
    },

    {
      id: 10,
      name: "Fast Exit Milking Parlor",
      description: "Fast Exit Milking Parlor",
      features: [
        "Complete parlor with herd management system",
        "Provides heat detection, rumination and health management"
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

export default Milking;