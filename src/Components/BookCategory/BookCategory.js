import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BookCategory.css'
const BookCategory = () => {
    return (
        <Container className="mt-5">
            <h2>+ Books categories</h2>
            <Row className="mt-3">
                <Col lg={2} sm={6} className="p-3 book-category">
                    <Link to={``}> Architecture </Link> <br />
                    <Link to={``}> Art </Link> <br />
                    <Link to={``}> Action </Link> <br />
                    <Link to={``}> Biography & Autobiography </Link> <br />
                    <Link to={``}> Body, Mind & Spirit </Link> <br />
                </Col>
                <Col lg={2} sm={6} className="p-3 book-category">
                    <Link to={``}> Business & Economics </Link> <br />
                    <Link to={``}> Children Fiction </Link> <br />
                    <Link to={``}> Children Non-Fiction </Link> <br />
                    <Link to={``}> Comics & Graphic Novels </Link> <br />
                    <Link to={``}> Cooking </Link> <br />
                </Col>
                <Col lg={2} sm={6} className="p-3 book-category">
                    <Link to={``}> Crafts & Hobbies </Link> <br />
                    <Link to={``}> Design </Link> <br />
                    <Link to={``}> Drama </Link> <br />
                    <Link to={``}> Education </Link> <br />
                    <Link to={``}> Family & Relationships </Link> <br />
                </Col>
                <Col lg={2} sm={6} className="p-3 book-category">
                    <Link to={``}> Fiction </Link> <br />
                    <Link to={``}> Foreign Language Study </Link> <br />
                    <Link to={``}> Games </Link> <br />
                    <Link to={``}> Gardening </Link> <br />
                    <Link to={``}> Health & Fitness </Link> <br />
                </Col>
                <Col lg={2} sm={6} className="p-3 book-category">
                    <Link to={``}> History </Link> <br />
                    <Link to={``}> House & Home </Link> <br />
                    <Link to={``}> Humor </Link> <br />
                    <Link to={``}> Literary Collections </Link> <br />
                    <Link to={``}> Mathematics </Link> <br />
                </Col>
                <Col lg={2} sm={6} className="p-3 book-category">
                    <Link to={``}> Medical </Link> <br />
                    <Link to={``}> Nature </Link> <br />
                    <Link to={``}> Performing Arts </Link> <br />
                    <Link to={``}> Pets </Link> <br />
                    <Link className="custome-link" to={``}> Show others </Link> <br />
                </Col>
            </Row>
        </Container>
    );
};

export default BookCategory;