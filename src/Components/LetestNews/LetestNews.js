import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import letestNews from '../../assets/staticData/letestNews'
import './LetestNews.css'
const LetestNews = () => {
    console.log('letestNews :>> ', letestNews);
    return (
        <Container className="mt-5">
            <div className="text-center">
                <h1 className="letestNewsTitle">
                    Letest News
             </h1>
                <p className="news-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua</p>
            </div>
            <Row className="mt-4">
                {
                    letestNews.length > 0 && letestNews.map((item, index) => (
                        <Col md={3} key={index}>
                            <Card className="m-1 news-card mt-3">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        <div className="d-flex mb-3">
                                           <small className="author mr-2">{item.author}</small>
                                           <small className="date">{item.date}</small>
                                        </div>
                                        <small className="description">{item.description}</small>
                                    </Card.Text>

                                    {/* <p className="font-weight-bold">{item.author}</p> */}
                                </Card.Body>
                                <Card.Footer className="news-bottom">
                                    <p>Continue Reading</p>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default LetestNews;