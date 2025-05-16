
import { useState } from 'react';
// Import the CSS file
import '../styles/products.css';

export default function ProductsSection() {
  // First row products
  const productsRow1 = [
    { 
      title: 'Dairy Farming Solutions', 
      img: '/api/placeholder/600/400', 
      link: '/products/feeding' 
    },
    { 
      title: 'Feeding Solutions', 
      img: '/api/placeholder/600/400', 
      link: '/products/silage' 
    },
    { 
      title: 'Silage Making Solutions', 
      img: '/api/placeholder/600/400', 
      link: '/products/equipment' 
    },
    { 
      title: 'Forage and Hay making Solutions', 
      img: '/api/placeholder/600/400', 
      link: '/products/network' 
    },
    {
        title: 'Milking Solutions', 
        img: '/api/placeholder/600/400', 
        link: '/products/network' 
    },
    { 
        title: 'Farm Network Gateway Solutions', 
        img: '/api/placeholder/600/400', 
        link: '/products/network' 
    },
    { 
        title: 'Farm Biosecurity Solutions', 
        img: '/api/placeholder/600/400', 
        link: '/products/network' 
    },
    { 
        title: 'Teat and Udder Health Solutions', 
        img: '/api/placeholder/600/400', 
        link: '/products/network' 
    },
    { 
        title: 'Teat and Udder Health Solutions', 
        img: '/api/placeholder/600/400', 
        link: '/products/network' 
    },
    { 
        title: 'Calf Heath Solutions', 
        img: '/api/placeholder/600/400', 
        link: '/products/network' 
    },
    { 
        title: 'Sensetime Cow Monitoring System', 
        img: '/api/placeholder/600/400', 
        link: '/products/network' 
    }
  ];

  // Second row products
  const productsRow2 = [
    { 
      title: 'Feed Storage Solutions', 
      img: '/api/placeholder/600/400', 
      link: '/products/storage' 
    },
    { 
      title: 'Livestock Health', 
      img: '/api/placeholder/600/400', 
      link: '/products/health' 
    },
    { 
      title: 'Cow Care Products', 
      img: '/api/placeholder/600/400', 
      link: '/products/care' 
    },
    { 
      title: 'SenseTime Cow', 
      img: '/api/placeholder/600/400', 
      link: '/products/sensetime' 
    }
  ];

  return (
    <div className="products-section">
      {/* Green Section with Title */}
      <div className="products-header">
        <div className="header-content">
          <h2 className="section-title">Our Products</h2>
          <div className="title-underline"></div>
        </div>
      </div>
      
      {/* Products Grid Container */}
      <div className="products-grid-container">
        {/* First Row */}
        <div className="products-row">
          {productsRow1.map((product, index) => (
            <ProductCard 
              key={`row1-${index}`} 
              title={product.title} 
              image={product.img} 
              link={product.link} 
            />
          ))}
        </div>
        
        {/* Second Row */}
        <div className="products-row">
          {productsRow2.map((product, index) => (
            <ProductCard 
              key={`row2-${index}`} 
              title={product.title} 
              image={product.img} 
              link={product.link} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ title, image, link }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div 
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      {/* Green Gradient Overlay Bottom */}
      <div className="bottom-gradient"></div>
      
      {/* Full Overlay on hover */}
      <div className={`hover-overlay ${isHovered ? 'active' : ''}`}>
        <div className="title-container">
          <h3 className="hover-title">{title}</h3>
        </div>
      </div>
      
      {/* Title at bottom when not hovered */}
      <div className="default-title-container">
        <h3 className="default-title">{title}</h3>
      </div>
    </div>
  );
}