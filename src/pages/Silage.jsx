import { useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/silage.css'

const Silage = () => {
  // Sample product data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "Silage Packing Machine",
      description: "Silage Packing Machine",
      features: [
        "It is used to fill, press and pack silage into 25-50kg bags",
        " It is cost effective as bags are much cheaper than silage film"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Row Independent Forage Harvester",
      description: "Row Independent Forage Harvester",
      features: [
        "Used for crops both with rows and without rows",
        "Chop size is adjustable",
        "Note: 85HP is required for this machine"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Single Row Forage Harvester",
      description: "Single Row Forage Harvester",
      features: [
        "Used in field for cutting and harvesting",
        "Chop size is adjustable",
        "Note: 40 HP tractor is required for this machine" //"12 corn cracker - still to be checked"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      name: "Silage Wrapping Film",
      description: "Silage Wrapping Film",
      features: [
        "Premium quality imported film",
        "Available in all sizes and colors"
      ],
      image: "/api/placeholder/600/400"
    },
    {
        id: 5,
        name: "Small Silage Baler and Wrapper",
        description: "Small Silage Baler and Wrapper",
        features: [
          "Fully automatic machine with ABB motors and Siemens PLC system",
          "Wrapping table is equipped with invertor system",
          "Smooth wrapping & less breakdown of wrapping table",
          "Adjustable baler chamber",
          "Provides bale size from 60kg - 100kg",
          "Less manpower required"
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

export default Silage;