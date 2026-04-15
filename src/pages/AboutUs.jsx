import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { SEO, siteUrl } from '../components/SEO';
import '../styles/aboutus.css';
import muneeb from "../assets/muneeb.jpg";
import asif from "../assets/asif.png.png";

export default function AboutUs() {
  const leadership = [
    {
      name: 'Dr. Muhammad Asif Gill',
      role: 'Chief Executive Officer',
      imgSrc: asif,
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
      name: 'Muneeb Ali Asif',
      role: 'Director',
      imgSrc: muneeb,
      text: `Nutrition, sustainability, and innovation are at the heart of our modern world, and 
      technology plays a vital role in strengthening this connection. With a passion for solving real-world 
      problems and creating meaningful impact, I bring a forward-thinking approach to Greenland Zone. 
      Understanding the challenges farmers face today—and recognizing how essential agriculture is to 
      society—drives my commitment to blend technology with tradition.

      I believe that every farmer deserves access to reliable, efficient, and modern solutions. As 
      agriculture evolves and the needs of farmers become more diverse, he works to ensure that Greenland Zone 
      continues to bridge the gap between nature, innovation, and practicality. By focusing on quality, 
      efficiency, and user-friendly systems, he aims to empower farmers with tools that simplify their work 
      and enhance productivity.`
    }
  ];

  return (
    <div className="about-page about-full-width">
      <SEO
        title="About Us - Leadership Message"
        description="Learn about Greenland Zone's leadership and vision for sustainable farming in Pakistan. From Grass to Glass - serving farmers with 20 years of expertise in dairy and agriculture."
        keywords="about Greenland Zone, dairy farming leadership, Pakistan agriculture, farm solutions, sustainable farming vision"
        url={siteUrl + '/about'}
      />
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

      <Container className="leadership-container about-full-width">
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