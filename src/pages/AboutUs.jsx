import '../styles/aboutus.css'
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function AboutUs() {
    const barStyle = {
        width: '100px',
        height: '6px',
        backgroundColor: '#00C853',
        margin: '1rem 0'
    }

    const leadership = [
        {
            name: 'Dr. Muhammad Asif Gill (CEO)',
            imgSrc: '/assets/logo.png',
            text: `Greenland Zone was established to serve all possible needs of Pakistani farmers. Our concept 
            “FROM GRASS TO GLASS” represents the scope of our products and services that we are offering to 
            facilitate farmers and other stakeholders in each step of value chain by bringing it under one umbrella.
            Research and Development is our competitive advantage along with the world class procurement from all 
            over the world. It helps us to provide our farmers with the best products at affordable prices.
            Greenland Zone for me is like a family in which we indulge every farmer, our employees and all 
            stakeholders as its members. It gives me great pleasure to announce that we always believe in 
            professionalism and service orientation.`
        }, 

        {
            name: 'Laiq Ur Rehman (Director)',
            imgSrc: '/assets/logo.png',
            text: `Nutrition is what every human being requires in everyday life and it comes from Nature. 
            From decades our farmers are committed to take care of Nature and so is Greenland Zone.
            Thinking about taking care of the challenges faced by farmers and responding to their problems, 
            is the very sprit of Greenland Zone. Since the farmers main problems and challenges are really 
            diverse and no solution exists in Dairy and Agriculture industry which can respond to all of them 
            under one umbrella, Greenland Zone is there to do the job with high standards of Quality in a very 
            efficient and effective manner. We invite our farmers to share their dreams and let Greenland Zone 
            help turning them into realities.`
        }
    ]
    return (
        <>
        <div className='about-page'>
            <Container fluid>
                <h1 className='heaer-1 text-start'>
                    MESSSAGE FROM THE LEADERSHIP
                </h1>
                <div style={barStyle} />
            </Container>

            <Container>
                {leadership.map((leader) => (
                <Row key={leader.name} className="align-items-center mb-5">
                    {/* Image always on the left */}
                    <Col md={3}>
                    <Image
                        src={leader.imgSrc}
                        rounded
                        fluid
                        className="leader-img mb-4 mb-md-0"
                    />
                    </Col>

                    {/* Text always on the right */}
                    <Col md={8}>
                    <h2 className="leader-name">{leader.name}</h2>
                    <p className="leader-text">{leader.text}</p>
                    </Col>
                </Row>
                ))}
            </Container>
        </div>
        </>
    )
}