
import { useState } from 'react';
import '../styles/dairyfarmingsol.css'

const DairyFarmingSol = () => {
  // Sample product data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "Cow Cubicles",
      description: "Cubicles are animal rest areas",
      features: [
        "Hot dip galvanized pipes with",
        "Proper angle required for",
        "Animal comfort"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Cow Head Lock",
      description: "Easy animals handling without any health hazard.",
      features: [
        "Hot dip galvanized with top",
        "Covering of plastic for less noice."
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Automatic Manure Scrapper",
      description: "Efficient milking systems for dairy farms",
      features: [
        "Automatic cluster removal",
        "Stainless steel construction",
        "Easy to clean and maintain"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      name: "Cooling Fans",
      description: "Automated feed delivery systems",
      features: [
        "Customizable feeding schedules",
        "Reduces labor costs",
        "Ensures consistent nutrition"
      ],
      image: "/api/placeholder/600/400"
    },
    {
        id: 5,
        name: "Cow Comfort Mat",
        description: "Cow mats",
        features: [
          "Very easy to clean, gives comforts to animals",
          "Reduces labor for filling of sand and then cleaning from drains"
        ],
        image: "/api/placeholder/600/400"
    },

    {
        id: 6,
        name: "Automatic Cow Brush",
        description: "Used to massage the cows",
        features: [
          "Increases blood circulation",
          "Increases milk yield",
          "Increases skin shining by increasing blood circulation to skin"
        ],
        image: "/api/placeholder/600/400"
    },
    {
        id: 7,
        name: "Hydraulic Cattle Crush",
        description: "Hydraulic Cattle Crush",
        features: [
          "Used to hold animal for medication, surgery, and inseminations",
          "Can be operated easily using hydraulic system"
        ],
        image: "/api/placeholder/600/400"
    },
    {
        id: 8,
        name: "Calf Hutch",
        description: "Calf Hutch",
        features: [
          "Used for calf care in the first two months of age",
          "Ensure calf health by individual feeding and avoid contamination"
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
            <button 
              onClick={() => setFilter('all')}
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            >
              All Products
            </button>
            <button 
              onClick={() => setFilter('cow')}
              className={`filter-button ${filter === 'cow' ? 'active' : ''}`}
            >
              Cow Equipment
            </button>
            <button 
              onClick={() => setFilter('milking')}
              className={`filter-button ${filter === 'milking' ? 'active' : ''}`}
            >
              Milking Solutions
            </button>
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

export default DairyFarmingSol;