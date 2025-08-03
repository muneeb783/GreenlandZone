import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/aboutus.css';

export default function AboutUs() {
  const leadership = [
    {
      name: 'Dr. Muhammad Asif Gill',
      role: 'Chief Executive Officer',
      imgSrc: '/assets/logo.png',
      text: `Greenland Zone was established to serve all possible needs of Pakistani farmers. Our concept
        "FROM GRASS TO GLASS" represents the scope of our products and services that we are offering to
        facilitate farmers and other stakeholders in each step of value chain by bringing it under one umbrella.
        Research and Development is our competitive advantage along with the world class procurement from all
        over the world. It helps us to provide our farmers with the best products at affordable prices.
        Greenland Zone for me is like a family in which we indulge every farmer, our employees and all
        stakeholders as its members. It gives me great pleasure to announce that we always believe in
        professionalism and service orientation.`
    },
    {
      name: 'Laiq Ur Rehman',
      role: 'Director',
      imgSrc: '/assets/logo.png',
      text: `Nutrition is what every human being requires in everyday life and it comes from Nature.
        From decades our farmers are committed to take care of Nature and so is Greenland Zone.
        Thinking about taking care of the challenges faced by farmers and responding to their problems,
        is the very spirit of Greenland Zone. Since the farmers main problems and challenges are really
        diverse and no solution exists in Dairy and Agriculture industry which can respond to all of them
        under one umbrella, Greenland Zone is there to do the job with high standards of Quality in a very
        efficient and effective manner. We invite our farmers to share their dreams and let Greenland Zone
        help turning them into realities.`
    }
  ];

  return (
    <div className="about-page about-full-width">
      <motion.div
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <motion.h1 
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Message From the Leadership
          </motion.h1>
          <motion.p 
            className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Guiding our vision for a sustainable farming future
          </motion.p>
          <motion.div 
            className="about-underline"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </Container>
      </motion.div>

      <Container className="leadership-container about-full-width" data-navbar-theme="light">
        {leadership.map((leader, idx) => (
          <motion.div
            key={leader.name}
            className={`leader-row ${idx % 2 === 0 ? 'normal' : 'reverse'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Row className="align-items-center">
              <Col md={4} className="leader-image-col">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={leader.imgSrc} roundedCircle fluid className="leader-img" />
                </motion.div>
              </Col>
              <Col md={8} className="leader-text-col">
                <h2 className="leader-name">{leader.name}</h2>
                <span className="leader-role">{leader.role}</span>
                <p className="leader-text">{leader.text}</p>
              </Col>
            </Row>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}