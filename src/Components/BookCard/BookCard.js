import React, { useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import booksData from '../../assets/staticData/booksData'
import './BookCard.css'
const BookCard = () => {
    return (
        <Container>
            <Row className="mt-5 justify-content-center">
                {
                    booksData.length > 0 && booksData.map((item, index) => (
                        <Col lg={4} md={6} key={index}>
                            <Card className="m-1 custom-card">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        <div className="buttonGroup d-flex mb-3">
                                            <button className="btn secondary-btn bg-light m-1"> BIOGRAPHY </button>
                                            <button className="btn secondary-btn bg-light m-1"> THRILLER </button>
                                            <button className="btn secondary-btn bg-light m-1"> HORROR </button>
                                        </div>
                                        <small className="description">{item.description}</small>
                                    </Card.Text>

                                    <p className="font-weight-bold">{item.author}</p>
                                </Card.Body>
                                <Card.Footer className="card-bottom">
                                    <Link to={`/details/${item.id}`} className="btn custome-btn"><i className="fas fa-cart-plus ml-1"> Add to cart</i></Link>
                                    <div className="price d-flex">
                                        <h5 className="regularPrice mr-2">${item.price}</h5>
                                        <h6 className="offerPrice">${item.offerPrice}</h6>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default BookCard;