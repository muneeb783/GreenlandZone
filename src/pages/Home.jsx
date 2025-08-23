import { useEffect, useRef, useState } from 'react';
import '../styles/home.css';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);
  const observerRef = useRef(null);
  const autoScrollRef = useRef(null);
  
  // Array of hero image paths
  const heroImages = [
    'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600',
    'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600',
    'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=1600',
    'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1600'
  ];
  
  const heroContent = [
    { title: 'GreenLand Zone', subtitle: 'From Grass to Glass', cta: 'Discover Our Story' },
    { title: 'Quality Farming', subtitle: 'Sustainable Solutions', cta: 'Explore Solutions' },
    { title: 'Expert Consultation', subtitle: 'For Better Results', cta: 'Get Expert Help' },
    { title: 'Modern Technology', subtitle: 'Traditional Values', cta: 'See Innovation' },
    { title: 'Nationwide Service', subtitle: 'Local Expertise', cta: 'Find Locations' }
  ];

  // Enhanced products data
  const products = [
    { 
      title: 'Dairy Farming Solutions', 
      description: 'Complete dairy management systems',
      icon: '🥛',
      features: ['Automated Milking', 'Herd Management', 'Quality Control']
    },
    { 
      title: 'Feeding Solutions', 
      description: 'Optimized nutrition programs',
      icon: '🌾',
      features: ['Custom Feed Mix', 'Nutrition Analysis', 'Cost Optimization']
    },
    { 
      title: 'Silage Making Solutions', 
      description: 'Advanced preservation techniques',
      icon: '🌱',
      features: ['Modern Equipment', 'Quality Testing', 'Storage Solutions']
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    // Set up auto-scroll
    autoScrollRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [heroImages.length]);

  // Handle manual navigation
  const handleDotClick = (index) => {
    // Clear auto-scroll when user manually navigates
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    
    setActiveSlide(index);
    
    // Restart auto-scroll after 10 seconds
    setTimeout(() => {
      autoScrollRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    }, 10000);
  };

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const [hideHeroDots, setHideHeroDots] = useState(false);

  // Add this useEffect to detect when hero section is scrolled past
  useEffect(() => {
    const handlePageScroll = () => {
      const heroSection = heroRef.current;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // 100px offset for better UX
        
        setHideHeroDots(scrollPosition > heroBottom);
      }
    };

    window.addEventListener('scroll', handlePageScroll);
    return () => window.removeEventListener('scroll', handlePageScroll);
  }, []);


  return (
    <div className="home-page home-full-width">
      {/* Hero Section with Auto Scroll */}
      <div 
        ref={heroRef} 
        className="snap-scroll-container"
      >
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${img})`
            }}
          >
            <div className="hero-content">
              <h1>{heroContent[index].title}</h1>
              <p>{heroContent[index].subtitle}</p>
              <button className="cta-button">{heroContent[index].cta}</button>
            </div>
          </div>
        ))}
        
        {/* Navigation dots */}
        <div className={`hero-dots ${hideHeroDots ? 'hidden' : ''}`}>
          {heroImages.map((_, dotIndex) => (
            <span 
              key={dotIndex} 
              className={`hero-dot ${dotIndex === activeSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(dotIndex)}
            />
          ))}
        </div>
        
        {/* Progress bar */}
        <div className="hero-progress">
          <div 
            className="hero-progress-bar" 
            key={activeSlide} // Reset animation when slide changes
          />
        </div>
      </div>

      {/* Introduction Section */}
      <div className="section-container" data-navbar-theme="light">
        <div className="container">
          <div className="row">
            <div className="col col-md-5">
              <div id="intro-heading" className={`animate-on-scroll ${isVisible['intro-heading'] ? 'visible' : ''}`}>
                <h1 className="modern-heading">
                  GreenLand Zone<br/>
                  <span className="mobile-break">From Grass to Glass</span>
                </h1>
                <div className="accent-bar" />
              </div>
            </div>
            <div className="col col-md-7">
              <div id="intro-content" className={`animate-on-scroll ${isVisible['intro-content'] ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                <p className="lead-paragraph">
                  Every day at Greenland Zone, we strive for a better future of farmers
                  with our 20 years' rich and diverse experience in the Dairy and
                  Agriculture sector in Pakistan. Greenland Zone always envisions to
                  bring positive impact and value in the life of farmers.
                </p>
                <p className="lead-paragraph">
                  "From Grass to Glass" being closer to our heart, we work in 3 main streams which are
                  Agriculture, Livestock and Dairy Farming and deal in all fields of
                  Feeding, Agriculture Machinery, Dairy Machinery, Farm Equipment, Feed
                  Additives, Feeds, Seeds, General Mechanization, Cow Health, Cow
                  Comfort, Herd Management and Farm Consultancy.
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="row mt-5 pt-5 vision-mission-row">
            <div className="col col-md-6">
              <div id="vision-card" className={`animate-on-scroll ${isVisible['vision-card'] ? 'visible' : ''}`}>
                <div className="vision-mission-card">
                  <h3>Our Vision</h3>
                  <p className="lead-paragraph">
                    To become a market leader in providing all services and
                    technologies to Pakistani farmers under one umbrella.
                  </p>
                  <div className="accent-bar" />
                </div>
              </div>
            </div>
            <div className="col col-md-6">
              <div id="mission-card" className={`animate-on-scroll ${isVisible['mission-card'] ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className="vision-mission-card">
                  <h3>Our Mission</h3>
                  <p className="lead-paragraph">
                    To create continuous shared value in the lives of
                    Pakistani farmers through our products, technologies, information,
                    and services.
                  </p>
                  <div className="accent-bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="section-container products-section" data-navbar-theme="light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="modern-heading">Our Solutions</h2>
            <div className="accent-bar mx-auto" />
          </div>
          <div className="row products-row">
            {products.map((product, index) => (
              <div className="col col-md-4" key={index}>
                <div 
                  id={`product-${index}`} 
                  className={`animate-on-scroll ${isVisible[`product-${index}`] ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="product-card">
                    <span className="product-icon">{product.icon}</span>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    <ul className="product-features">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" data-navbar-theme="light">
        <div className="container">
          <div className="row contact-row">
            <div className="col col-md-4">
              <div id="contact-heading" className={`animate-on-scroll ${isVisible['contact-heading'] ? 'visible' : ''}`}>
                <h2 className="modern-heading">
                  Let's Connect
                </h2>
                <p className="lead-paragraph">
                  Ready to transform your farming operations? Get in touch with our experts.
                </p>
                <div className="accent-bar" />
              </div>
            </div>
            <div className="col col-md-8">
              <div id="contact-form" className={`animate-on-scroll ${isVisible['contact-form'] ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className="modern-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row form-row">
                      <div className="col col-md-6">
                        <input 
                          className="form-control"
                          type="text" 
                          placeholder="Your name" 
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                      <div className="col col-md-6">
                        <input 
                          className="form-control"
                          type="email" 
                          placeholder="Your e-mail" 
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                    </div>
                    <input 
                      className="form-control"
                      type="text" 
                      placeholder="Subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                    />
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Tell us about your needs..."
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                    />
                    <button 
                      type="submit" 
                      className="modern-submit-btn"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}