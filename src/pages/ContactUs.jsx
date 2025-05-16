import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Stack } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/contactus.css'

export default function ContactUs() {
  return (
    <div className="contact-page">
      <Container fluid className="py-5">
        <Row className="gx-5">
          {/* Left side: heading + mail card */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h1 className="contact-title">Let’s chat.</h1>
            <p className="contact-subtitle">Let’s create something together</p>

            <Stack gap={4} className="contact-info-stack">
              <Card className="contact-info-card">
                <Card.Body className="d-flex">
                  <FaPhone className="card-icon" />
                  <div>
                    <small>Contact Us</small>
                    <p>Landline: 0303 1114647</p>
                    <p>Hotline: 0303 8847336</p>
                  </div>
                </Card.Body>
              </Card>

              <Card className="contact-info-card">
                <Card.Body>
                  <FaMapMarkerAlt className="card-icon" />
                  <div>
                    <small className='card-text'>Head Office</small>
                    <p className='card-text'>783 Quaid Block, Bahria Town, Lahore</p>
                    <p className='card-text'>Phone: 0345 8432667</p>
                  </div>
                </Card.Body>
              </Card>

              <Card className="contact-info-card">
                <Card.Body className="d-flex">
                  <FaMapMarkerAlt className="card-icon" />
                  <div>
                    <small className='card-text'>Site Office</small>
                    <p className='card-text'>55-5I, 2km Okara Toll Plaza, Main GT Road, Sahiwal</p>
                    <p>Phone: 0300 9692667</p>
                  </div>
                </Card.Body>
              </Card>

              <Card className="contact-info-card">
                <Card.Body className="card-text d-flex">
                  <FaMapMarkerAlt className="card-icon" />
                  <div>
                    <small>UK Office</small>
                    <p>158 Weyhouse, 15 Church Street Weybridge Surrey, KT13 8NA United Kingdom</p>
                    <p>Call: +44 7796 448679</p>
                  </div>
                </Card.Body>
              </Card>
            </Stack>
          </Col>

          {/* Right side: form */}
          <Col md={6} className="d-flex justify-content-center">
            <div className="contact-form-container">
              <h4 className="mb-4 text-white">Send us a message</h4>
              <Form>
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Control type="text" placeholder="Full Name*" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control type="email" placeholder="Email Address*" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Control type="text" placeholder="Subject*" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="message">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Type your message*"
                  />
                </Form.Group>
                <Button variant="light" className="w-100">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
