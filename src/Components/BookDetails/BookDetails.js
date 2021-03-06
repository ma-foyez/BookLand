import React, { useState } from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import booksData from '../../assets/staticData/booksData'
import { Avatar, Rate } from 'rsuite';
import './BookDetails.css'
import FaceIcon from '@material-ui/icons/Face';
import { Link } from '@material-ui/core';
import RelatedBooks from '../RelatedBooks/RelatedBooks';

const BookDetails = ({ id }) => {
    const filterBookData = booksData.find(item => item.id == id);
    const [rateValue, setRateValue] = useState(filterBookData.rating);

    const [cartValue, setCartValue] = useState(1)
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col md={4}>
                        <img src={filterBookData.image} alt="book details image" className="img-fluid" />
                    </Col>
                    <Col md={8}>
                        <h2>{filterBookData.title}</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <Rate defaultValue={rateValue} onChangeActive={setRateValue} size="sm" /> <small className="font-weight-bold">{rateValue}.0</small>
                            </div>
                            <div className="col-md-8">
                                <div className="d-flex">
                                    <div className="d-flex mt-2 review">
                                        <p><i className="far fa-comment-alt mr-1"></i> 235 Reviews</p>
                                        <p className="ml-3 mt-0"><i className="fas fa-thumbs-up mr-1"></i> 450K Like</p>
                                    </div>
                                    <div className="social">
                                        <i className="fab fa-facebook-f facebook"></i>
                                        <i className="fab fa-twitter twitter"></i>
                                        <i className="fab fa-whatsapp whatsapp"></i>
                                        <i className="far fa-envelope message"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Row className="mt-3">
                            <Col md={6}>
                                <div className="d-flex">
                                    <div className="bookPubliser">
                                        <Avatar variant="square">
                                            <FaceIcon />
                                        </Avatar>
                                    </div>
                                    <div className="bookPubliser">
                                        <p>Writen By</p>
                                        <h6>{filterBookData.author}</h6>
                                    </div>
                                    <div className="bookPubliser">
                                        <p>Publisher</p>
                                        <h6>Printarea Studios</h6>
                                    </div>
                                    <div className="bookPubliser">
                                        <p>Year</p>
                                        <h6>2020</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex m-2">
                                    <button className="btn btn-outline-secondary font-weight-bold mr-2"><i className="mr-1 fas fa-dolly"></i>FREE SHIPPING</button>
                                    <button className="btn btn-outline-success font-weight-bold mr-2"><i className="mr-1 far fa-check-square"></i>IN STOCK</button>
                                </div>
                            </Col>
                        </Row>
                        <p className="mt-4">
                            {filterBookData.description}
                        </p>
                        <Row className="mt-4">
                            <Col md={6}>
                                <div className="price d-flex">
                                    <h4 className="regularPrice mr-2">${filterBookData.price}</h4>
                                    <h6 className="offerPrices mr-4">${filterBookData.offerPrice}</h6>
                                    <Badge className="custom_badge">5%</Badge>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex justify-content-between">
                                    <div className="increase-decrease d-flex shadow-sm p-3 mb-5 bg-body rounded align-items-center justify-content-center">
                                        <i className="fas fa-minus" onClick={() => setCartValue(cartValue - 1)}></i>
                                        <input type="text" value={cartValue} />
                                        <i className="fas fa-plus" onClick={() => setCartValue(cartValue + 1)}></i>
                                    </div>
                                    <div className="mt-3">
                                        <Link to={``} className="btn custome-btn mb-0"><i className="fas fa-cart-plus ml-1"> Add to cart</i></Link>
                                    </div>
                                    <i class="far fa-heart custome-heart-icon mt-4"></i>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <RelatedBooks id={id} />
            </Container>
        </>
    );
};

export default BookDetails;