import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import heroBg from '../assets/react.svg'; // First hero image
import '../styles/home.css';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef(null);
  
  // Array of hero image paths - replace with your actual images
  const heroImages = [
    heroBg, 
    '/assets/hero2.jpg', 
    '/assets/hero3.jpg', 
    '/assets/hero4.jpg', 
    '/assets/hero5.jpg'
  ];
  
  // Hero titles and subtitles for each slide
  const heroContent = [
    { title: 'GreenLand Zone', subtitle: 'From Grass to Glass' },
    { title: 'Quality Farming', subtitle: 'Sustainable Solutions' },
    { title: 'Expert Consultation', subtitle: 'For Better Results' },
    { title: 'Modern Technology', subtitle: 'Traditional Values' },
    { title: 'Nationwide Service', subtitle: 'Local Expertise' }
  ];

  // Handle scroll detection to update active slide
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const sections = heroRef.current.querySelectorAll('.hero-slide');
        let newActiveSlide = 0;
        
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            newActiveSlide = index;
          }
        });
        
        setActiveSlide(newActiveSlide);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const barStyle = {
    width: '60px',
    height: '6px',
    backgroundColor: '#00C853',
    margin: '1rem 0'
  };

  return (
    <>
      {/* Hero Section with Snap Scroll */}
      <div ref={heroRef} className="snap-scroll-container">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className="hero-slide"
            style={{
              background: `url(${img}) center/cover no-repeat`,
            }}
          >
            <div className="hero-content">
              <h1 className="display-4">{heroContent[index].title}</h1>
              <p className="lead">{heroContent[index].subtitle}</p>
              
              {/* Navigation dots */}
              <div className="hero-dots">
                {heroImages.map((_, dotIndex) => (
                  <span 
                    key={dotIndex} 
                    className={`hero-dot ${dotIndex === activeSlide ? 'active' : ''}`}
                    onClick={() => {
                      const section = heroRef.current.querySelectorAll('.hero-slide')[dotIndex];
                      section.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rest of content remains the same */}
      <div>
        {/* Top Section */}
        <Container className="py-5">
          <Row className="align-items-start">
            {/* Title & Bar */}
            <Col md={5}>
              <h1 className='first-row'>
                GreenLand Zone<br/>
                From Grass to Glass
              </h1>
              <div style={barStyle} />
            </Col>
            {/* Intro Paragraph */}
            <Col md={7}>
              <p className='para-big'>
                Every day at Greenland Zone, we strive for a better future of farmers
                with our 20 years' rich and diverse experience in the Dairy and
                Agriculture sector in Pakistan. Greenland Zone always envisions to
                bring positive impact and value in the life of farmers. "From Grass to
                Glass" being closer to our heart, we work in 3 main streams which are
                Agriculture, Livestock and Dairy Farming and deal in all fields of
                Feeding, Agriculture Machinery, Dairy Machinery, Farm Equipment, Feed
                Additives, Feeds, Seeds, General Mechanization, Cow Health, Cow
                Comfort, Herd Management and Farm Consultancy. Our diverse team of
                qualified and experienced Agriculture and Dairy professionals is just
                a call away from all farmers in Pakistan and the rest of the world.
              </p>
            </Col>
          </Row>
          {/* Vision & Mission */}
          <Row className="mt-5">
            <Col md={6}>
              <h3>Vision</h3>
              <p className='para1'>
                Our vision is to become a market leader in providing all services and
                technologies to Pakistani farmers under one umbrella.
              </p>
              <div style={barStyle} />
            </Col>
            <Col md={6}>
              <h3>Mission</h3>
              <p className='para1'>
                Our mission is to create continuous shared value in the lives of
                Pakistani farmers through our products, technologies, information,
                and services.
              </p>
              <div style={barStyle} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Products Preview */}
      <Container className="pb-5">
        <h2 className="mb-4">Our Products</h2>
        <Row xs={1} md={3} className="g-4">
          {[
            { title: 'Dairy Farming Solutions', img: '/assets/product1.jpg', link: '/products/dairy' },
            { title: 'Feeding Solutions', img: '/assets/product2.jpg', link: '/products/feeding' },
            { title: 'Silage Making Solutions', img: '/assets/product3.jpg', link: '/products/silage' },
            // …etc
          ].map((p) => (
            <Col key={p.title}>
              <Card className="h-100">
                <Card.Img variant="top" src={p.img} />
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Button variant="primary" href={p.link}>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div>
      <Container className="py-5">
        <Row>
          {/* Heading */}
          <Col md={3}>
            <h2 className='contact-us'>
              Contact Us<br/>
              For More Details
            </h2>
            <div style={barStyle} />
          </Col>

          {/* Form */}
          <Col md={9}>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="contactName">
                    <Form.Control type="text" placeholder="Your name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="contactEmail">
                    <Form.Control type="email" placeholder="Your e-mail" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="contactSubject" className="mt-3">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group controlId="contactMessage" className="mt-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Message"
                />
              </Form.Group>

              <div className="text-center mt-4">
                <Button variant="dark">Send a message</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}