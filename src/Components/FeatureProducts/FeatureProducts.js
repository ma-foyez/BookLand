import React, { useState } from 'react';
import { Badge, Carousel, Col, Container, Row } from 'react-bootstrap';
import './FeatureProducts.css'
import booksData from '../../assets/staticData/booksData'
import Slider from "react-slick";


const FeatureProducts = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true
    };
    console.log('booksData :>> ', booksData);
    return (
        <section className="feature-product mt-5 text-dark">
            <Container className="">
                <h2 className="text-center product-title">Featured Product</h2>
                <p className="product-des text-center mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                </p>
                <Slider {...settings} className="mt-5 card bg-none">
                    {
                        booksData.length > 0 && booksData.map((item, index) => (
                            <div className="d-flex">
                                <div className="carousel-image">
                                    <img src={item.image} alt="" className="carouselImg img-fluid" />
                                </div>
                                <div className="slide-middle">
                                    <p className="seller">BEST SELLER</p>
                                    <h2>{item.title}</h2>
                                    <p className="description">
                                        {item.description}
                                    </p>
                                    <div className="price d-flex">
                                        <h4 className="regularPrice mr-2">${item.price}</h4>
                                        <h6 className="offerPrices mr-4">${item.offerPrice}</h6>
                                        <Badge className="custom_badge bg-light text-dark p-2">5% Off</Badge>
                                    </div>
                                    <div className=" d-flex">
                                       <button className="btn custome-btn mr-2">BUY NOW</button>
                                       <button className="btn border">SEE DETAILS</button>
                                    </div>

                                </div>
                                <div className="carousel-image">
                                    <img src={item.image} alt="" className="carouselImg img-fluid" />
                                </div>

                            </div>
                        ))
                    }
                </Slider>
            </Container>
        </section>
    );
};

export default FeatureProducts;