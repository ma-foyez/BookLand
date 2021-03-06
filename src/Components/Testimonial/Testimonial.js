import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Avatar, Rate } from 'rsuite';
import './Testimonial.css'
const Testimonial = () => {
    return (
        <Container>
            <h1 className="testimonial-title">Testimonials</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua</p>
            <Row className="mt-4">
                <Col md={3}>
                    <div className="m-1 p-3 testtimonial">
                        <Rate defaultValue={4} size="sm" />
                        <p className="mt-2 text-justify">Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                        <div className="d-flex mt-3">
                            <Avatar >N</Avatar>
                            <div className="ml-3">
                                <h6>Jason Huang</h6>
                                <p>Books Lover</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="m-1 p-3 testtimonial">
                        <Rate defaultValue={3} size="sm" />
                        <p className="mt-2 text-justify">I never know this shop before, until my grandma tell me how excelent this book store</p>
                        <div className="d-flex mt-3">
                            <Avatar >N</Avatar>
                            <div className="ml-3">
                                <h6>Miranda Lee</h6>
                                <p>Books Lover</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="m-1 p-3 testtimonial">
                        <Rate defaultValue={5} size="sm" />
                        <p className="mt-2 text-justify">Shoping book in Bookland is very easy. Quick delivery and fast respon. They services is awesome!</p>
                        <div className="d-flex mt-3">
                            <Avatar >N</Avatar>
                            <div className="ml-3">
                                <h6>Steve Henry</h6>
                                <p>Books Lover</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="m-1 p-3 testtimonial">
                        <Rate defaultValue={3} size="sm" />
                        <p className="mt-2 text-justify">Thank you for filling a niche at an affordable price. Your book was just what I was looking for</p>
                        <div className="d-flex mt-3">
                            <Avatar >N</Avatar>
                            <div className="ml-3">
                                <h6>Angela Moss</h6>
                                <p>Books Lover</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonial;