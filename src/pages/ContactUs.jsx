import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { FaEnvelope } from 'react-icons/fa'
import '../styles/contactus.css'

export default function ContactUs() {
  return (
    <div className="contact-page">
      <Container fluid className="py-5">
        <Row className="gx-5">
          {/* Left side: heading + mail card */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h1 className="contact-title">
              Let’s chat.<br/>
            </h1>
            <p className="contact-subtitle">Let’s create something together</p>
            
            <Card className="contact-info-card">
              <Card.Body className="d-flex align-items-center">
                <FaEnvelope size={24} className="me-3 text-primary" />
                <div>
                  <small className="text-muted">Mail us at</small>
                  <br/>
                  <a href="mailto:contact@greenlandzone.com" className="fw-bold">
                    contact@greenlandzone.com
                  </a>
                </div>
              </Card.Body>
            </Card>
            <Card className="contact-info-card">
              <Card.Body className="d-flex align-items-center">
                <FaEnvelope size={24} className="me-3 text-primary" />
                <div>
                  <small className="text-muted">Mail us at</small>
                  <br/>
                  <a href="mailto:contact@greenlandzone.com" className="fw-bold">
                    contact@greenlandzone.com
                  </a>
                </div>
              </Card.Body>
            </Card>

            <Card className="contact-info-card">
              <Card.Body className="d-flex align-items-center">
                <FaEnvelope size={24} className="me-3 text-primary" />
                <div>
                  <small className="text-muted">Mail us at</small>
                  <br/>
                  <a href="mailto:contact@greenlandzone.com" className="fw-bold">
                    contact@greenlandzone.com
                  </a>
                </div>
              </Card.Body>
            </Card>
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
