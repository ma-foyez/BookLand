import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import readingImg from '../../assets/icon/reading.jpg'
import './Footer.css'
const Footer = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={6}>
                    <img src={logo} alt="" className="logo" />
                    <p className="footerText">Bookland is a Book Store Ecommerce Website Template by Peterdraw lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    <div className="social">
                        <i class="fab fa-facebook-f socialFacebook"></i>
                        <i class="fab fa-youtube socialYoutube"></i>
                        <i class="fab fa-twitter socialTwitter"></i>
                        <i class="fab fa-linkedin socialLinkedIn"></i>
                        <i class="fab fa-instagram socialInstagram"></i>
                    </div>
                </Col>
                <Col md={3}>
                    <h4 className="getInTOuch">Get in Touch With Us</h4>
                    <h6 className="d-flex brandIcon">
                        <i className="fas fa-map-marker-alt mr-2"> </i>
                        <p>832  Thompson Drive, San Fransisco CA 94107, United States</p></h6>
                    <h6 className="d-flex brandIcon">
                        <i className="fas fa-phone-alt mr-2"></i>
                        <p>+123 345123 556</p></h6>
                    <h6 className="d-flex brandIcon">
                        <i className="fas fa-envelope mr-2"></i>
                        <p> support@bookland.id</p>
                    </h6>
                </Col>
                <Col md={3} className="footer-img">
                    <img src={readingImg} alt="" className="img-fluid" />
                </Col>
            </Row>
            <Row className="justify-content-between footer-bottom">
                <Col md={6}>
                    <p>Bookland Book Store Ecommerce Website -   © 2020 All Rights Reserved</p>
                </Col>
                <Col md={3}>
                    <p className="float-right">Made with <i className="fas fa-heart text-danger"></i> by Peterdraw</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;