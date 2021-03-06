import React, { useState } from 'react';
import { Badge, Carousel, Col, Container, Row } from 'react-bootstrap';
import './CustomerReview.css'
import booksData from '../../assets/staticData/booksData'
import Slider from "react-slick";
import { Rate } from 'rsuite';


const CustomerReview = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true
    };
    const [rateValue, setRateValue] = useState(4);
    return (
        <section className="mt-5">
            <Container className="">
                <h2 className="text-center product-title">What Customer’s Said</h2>
                <p className="product-des text-center mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                </p>
                <Slider {...settings} className="mt-5">
                    {
                        booksData.length > 0 && booksData.map((item, index) => (
                            <div className="p-3">
                                <div className="card p-5">
                                    <p className="text-justify">
                                        <sup className="quate"><i className="fas fa-quote-left"></i></sup>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
                                    </p>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <div>
                                            <h5>Johnson Simanungkalit</h5>
                                            <p>faculty of Economics 2020</p>
                                        </div>
                                        <div>
                                            <Rate defaultValue={rateValue} onChangeActive={setRateValue} size="sm" /> <small className="font-weight-bold">{rateValue}.0</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </Container>
        </section>
    );
};

export default CustomerReview;