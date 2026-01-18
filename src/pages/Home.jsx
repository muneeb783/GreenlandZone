import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import '../styles/home.css';
import '../styles/roadmap.css';
import hero_1 from "../assets/hero1.jpeg";
import hero_3 from "../assets/hero3.png";
import hero_4 from "../assets/hero4.png";
import hero_5 from "../assets/hero5.png";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);
  const observerRef = useRef(null);
  const autoScrollRef = useRef(null);
  const roadmapRef = useRef(null);
  const contactRef = useRef(null);

  // Array of hero image paths
  const heroImages = [
    hero_1,
    'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600',
    hero_3,
    hero_4,
    hero_5
  ];

  const heroContent = [
    { title: 'Green Land Zone PVT LTD', subtitle: 'From Grass to Glass', cta: 'Discover Our Story' },
    { title: 'Efficient Operations', subtitle: 'Sustainable Solutions', cta: 'Explore Solutions' },
    { title: 'Expert Consultation', subtitle: 'For Better Results', cta: 'Get Expert Help' },
    { title: 'Farming Mechanization', subtitle: 'Next-gen Farming', cta: 'See Innovation' },
    { title: 'Geographic Footprint', subtitle: 'Serving Farms Across Pakistan', cta: 'See Our Reach' }
  ];

  // Enhanced products data
  const products = [
    { 
      title: 'Mechanization', 
      description: 'Advanced equipment and machinery solutions for modern farming operations',
      icon: '🔧',
      features: ['Automated Harvesting & Feeding', 'Automated Milking',  'Spare Parts']
    },
    { 
      title: 'Feed Additives', 
      description: 'Premium nutritional supplements to enhance herd health and productivity',
      icon: '🌾',
      features: ['Metabolic Support', 'Nutritional Supplements', 'Rumen Bypass Nutrients']
    },
    { 
      title: 'Cow Comfort & Udder Hygiene', 
      description: 'Comprehensive solutions for animal welfare and udder health management',
      icon: '🐄',
      features: ['Animal Comfort', 'Smart Monitoring', 'Hygiene Chemicals']
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

  const scrollToRoadmap = () => {
    roadmapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <div className="home-page">
      <SEO
        title="Greenland Zone - From Grass to Glass"
        description="Leading dairy farming solutions provider in Pakistan with 20 years of experience. Offering dairy machinery, agriculture equipment, feed additives, cow health monitoring, and farm consultancy services."
        keywords="dairy farming Pakistan, agriculture machinery, dairy equipment, feed additives, farm consultancy, cow health, herd management, sustainable farming"
        url="https://greenlandzone.com"
      />
      {/* Hero Section with Auto Scroll */}
      <div 
        ref={heroRef} 
        className="snap-scroll-container" data-navbar-theme="dark"
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
              {index === 1 ? (
                <Link to="/products" className="cta-button">
                  {heroContent[index].cta}
                </Link>
              ) : index === 3 ? (
                <Link to="/products/mechanization" className="cta-button">
                  {heroContent[index].cta}
                </Link>
              ) : index === 4 ? (
                <Link to="/footprint" className="cta-button">
                  {heroContent[index].cta}
                </Link>
              ) : (
                <button
                  className="cta-button"
                  onClick={
                    index === 0 ? scrollToRoadmap :
                    index === 2 ? scrollToContact :
                    undefined
                  }
                >
                  {heroContent[index].cta}
                </button>
              )}
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
                  Green Land Zone PVT LTD<br/>
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

      {/* Roadmap Section */}
      <div ref={roadmapRef} className="roadmap-section" data-navbar-theme="light">
        <div className="roadmap-container">
          <div className="roadmap-header">
            <div className="roadmap-badge">Our Journey</div>
            <h2 className="roadmap-title">From Grass to Glass: Our Story</h2>
            <p className="roadmap-subtitle">
              Two decades of dedication to transforming Pakistani agriculture through innovation,
              expertise, and sustainable solutions
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-path">
              <div className="timeline-line" />

              <div className="timeline-items">
                {/* 2005 - Foundation */}
                <div className="timeline-item left">
                  <div className="timeline-content">
                    <div className="timeline-year">2005</div>
                    <h3 className="timeline-title">The Beginning</h3>
                    <p className="timeline-description">
                      Greenland Zone was founded with a vision to revolutionize dairy farming in Pakistan.
                      Starting with basic farm consultancy services, we identified the gaps in the local market.
                    </p>
                  </div>
                  <div className="timeline-dot" />
                </div>

                {/* 2008 - First Major Expansion */}
                <div className="timeline-item right">
                  <div className="timeline-content">
                    <div className="timeline-year">2008</div>
                    <h3 className="timeline-title">Mechanization Era</h3>
                    <p className="timeline-description">
                      Introduced our first line of dairy machinery and equipment, bringing international
                      technology to Pakistani farms. Established partnerships with global manufacturers.
                    </p>
                  </div>
                  <div className="timeline-dot" />
                </div>

                {/* 2012 - Feed Solutions */}
                <div className="timeline-item left">
                  <div className="timeline-content">
                    <div className="timeline-year">2012</div>
                    <h3 className="timeline-title">Feed Innovation</h3>
                    <p className="timeline-description">
                      Launched our premium feed additives division, focusing on animal nutrition and
                      health. Developed specialized formulations for Pakistani livestock needs.
                    </p>
                  </div>
                  <div className="timeline-dot" />
                </div>

                {/* 2016 - Complete Solutions */}
                <div className="timeline-item right">
                  <div className="timeline-content">
                    <div className="timeline-year">2016</div>
                    <h3 className="timeline-title">From Grass to Glass</h3>
                    <p className="timeline-description">
                      Achieved our vision of providing end-to-end solutions. From farm mechanization
                      to milk production, we became a one-stop solution for dairy farmers.
                    </p>
                  </div>
                  <div className="timeline-dot featured" />
                </div>

                {/* 2020 - Technology Integration */}
                <div className="timeline-item left">
                  <div className="timeline-content">
                    <div className="timeline-year">2020</div>
                    <h3 className="timeline-title">Smart Farming</h3>
                    <p className="timeline-description">
                      Introduced smart monitoring systems and IoT-based solutions for cow health tracking
                      and herd management. Embraced digital transformation in agriculture.
                    </p>
                  </div>
                  <div className="timeline-dot" />
                </div>

                {/* 2025 - Present */}
                <div className="timeline-item right">
                  <div className="timeline-content">
                    <div className="timeline-year">2025</div>
                    <h3 className="timeline-title">Leading the Future</h3>
                    <p className="timeline-description">
                      Today, we serve hundreds of farms across Pakistan with comprehensive solutions,
                      continuing to innovate and expand our reach to empower every farmer.
                    </p>
                  </div>
                  <div className="timeline-dot featured" />
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="vision-section">
            <div className="vision-content">
              <div className="vision-text">
                <h2 className="vision-title">Our Approach to Creating Value</h2>
                <p className="vision-description">
                  We believe that sustainable success comes from the perfect integration of
                  quality products, expert services, and cutting-edge technology. This holistic
                  approach enables us to create continuous shared value for Pakistani farmers.
                </p>

                <div className="vision-pillars">
                  <div className="vision-pillar">
                    <div className="vision-pillar-icon">🔧</div>
                    <div className="vision-pillar-text">
                      <div className="vision-pillar-title">Premium Products</div>
                      <div className="vision-pillar-desc">
                        World-class machinery and feed additives sourced globally
                      </div>
                    </div>
                  </div>

                  <div className="vision-pillar">
                    <div className="vision-pillar-icon">👥</div>
                    <div className="vision-pillar-text">
                      <div className="vision-pillar-title">Expert Services</div>
                      <div className="vision-pillar-desc">
                        20 years of experience in farm consultancy and support
                      </div>
                    </div>
                  </div>

                  <div className="vision-pillar">
                    <div className="vision-pillar-icon">💡</div>
                    <div className="vision-pillar-text">
                      <div className="vision-pillar-title">Smart Technology</div>
                      <div className="vision-pillar-desc">
                        IoT-based monitoring and data-driven farm management
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="vision-diagram">
                <div className="vision-circles">
                  <div className="vision-circle product">Premium Products</div>
                  <div className="vision-circle service">Expert Services</div>
                  <div className="vision-circle technology">Smart Technology</div>
                </div>
                <div className="vision-result">
                  <div className="vision-result-text">Continuous Shared Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="contact-section" data-navbar-theme="light">
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