import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SubscribeSection.css'
const SubscribeSection = () => {
    return (
        <section className="subscribe mt-5">
            <Container>
                <Row className="justify-content-between">
                    <Col md={4}>
                        <p className="subDesciption">Subscribe our newsletter for <br /> newest books updates</p>
                    </Col>
                    <Col md={4}>
                        <div className="subcribeForm">
                            <input type="text" placeholder="Type your email here" />
                            <button className="subscribeBtn float-right">SUBSCRIBE</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SubscribeSection;