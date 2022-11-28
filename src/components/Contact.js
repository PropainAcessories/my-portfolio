import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from "../components/ContactForm";
import '../App.css'

function Contact() {
    return(
        <div className='container'>
            <Container className='text-center'>
                <div className='p-md-5'>
                    <h1>Contact Me</h1>
                </div>
            </Container>

            <Container fluid className='shadow bg-white mb-5'>
                <Container className='p-4'>
                    <Row>
                        <Col>
                            <Container>
                                <h4 style={{color: '#f08563'}}>Contact Information</h4>
                                <p>
                                    <a href="mailto:hhc3h8@gmail.com">
                                        hh3h8@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <a href='https://github.com/PropainAcessories' target='_blank'>My GitHub</a>
                                </p>
                                <p>
                                    <a href='https://www.linkedin.com/in/henry-howe-a13341258/'>LinkedIn</a>
                                </p>
                            </Container>
                        </Col>
                        
                        <Col sm={12} md={6} lg={8} className='pt-sm-4 pt-lg-0'>
                            <Container>
                                <h4 style={{color: '#f08563'}}>Send Me a Message</h4>
                                <ContactForm />
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Contact;
