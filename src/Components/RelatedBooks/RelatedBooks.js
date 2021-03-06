import React from 'react';
import { Container, Tab, Table, Tabs } from 'react-bootstrap';
import { Avatar, Rate } from 'rsuite';
import booksData from '../../assets/staticData/booksData'
import FaceIcon from '@material-ui/icons/Face';

import './RelatedBooks.css'

const RelatedBooks = ({ id }) => {
    const book = booksData.find(item => item.id == id);
    console.log('book :>> ', book);
    return (
        <Container>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Tabs defaultActiveKey="details" transition={false} id="noanim-tab-example">
                        <Tab className="font-weight-bold" eventKey="details" title="Details Product">
                            <Table hover>
                                <tbody>
                                    <tr>
                                        <th>Book Title</th>
                                        <td>{book.title}</td>
                                    </tr>
                                    <tr>
                                        <th>Author</th>
                                        <td>{book.author}</td>
                                    </tr>
                                    <tr>
                                        <th>ISBN</th>
                                        <td>121341381648 (ISBN13: 121341381648)</td>
                                    </tr>
                                    <tr>
                                        <th>Edition Language</th>
                                        <td>English</td>
                                    </tr>
                                    <tr>
                                        <th>Book Formate</th>
                                        <td>Paperback, 450 Pages</td>
                                    </tr>
                                    <tr>
                                        <th>Date Published</th>
                                        <td>August 10th 2019</td>
                                    </tr>
                                    <tr>
                                        <th>Publisher</th>
                                        <td>Wepress Inc.</td>
                                    </tr>
                                    <tr>
                                        <th>Tags</th>
                                        <td>Mark</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="review" title="Customer Reviews">
                            <div className="bookPubliser m-4">
                                <Avatar>
                                    <FaceIcon />
                                </Avatar>
                                <h4>Smith Chy</h4>
                                <p className="pt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                </p>
                                <p className="pt-3"><Rate defaultValue={4} size="sm" /></p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                <div className="col-md-4">
                    <h5>Related Books</h5>
                    {
                        book.relatedBooks.length > 0 && book.relatedBooks.map((item, index) => (
                            <div className="relatedBooks d-flex m-2 mt-4" key={index + 1}>
                                <div className="bookImg m-2">
                                    <img src={item.img} alt="" className="img-fluid" />
                                </div>
                                <div className="bookDetails ml-3 mt-2">
                                    <h6 className="title">
                                        {item.title}
                                    </h6>
                                    <p className="subTitle">{item.subTitle}</p>
                                    <div className="price d-flex">
                                        <h4 className="regularPrice mr-2">{item.price}</h4>
                                        <h6 className="offerPrices mr-4">{item.offerPrice}</h6>
                                    </div>
                                    <button className="btn relatedBooksBtn"><i className="fas fa-cart-plus ml-1"> Add to cart</i></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
};

export default RelatedBooks;