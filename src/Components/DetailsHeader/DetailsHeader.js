import { Avatar } from '@material-ui/core';
import React from 'react';
import { Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import FaceIcon from '@material-ui/icons/Face';
import './DetailsHeader.css'
const DetailsHeader = () => {
    return (
        <Container>
            <Navbar bg="none" expand="lg">
                <Navbar.Brand className="logo">
                    <Link to="/home">
                        <img src={logo} className="img-fluid" alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="custome-search d-flex bg-light">
                        <DropdownButton className="custome-dropdown" id="dropdown-basic-button" title="Menus">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <Form>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2 custome-form" />
                        </Form>
                        <i className="fas fa-search search-icon"></i>
                    </div>
                    <Nav className="mr-auto m-2 custome-cart">
                        <div className="d-flex">
                            <p className="react">
                                <i className="far fa-heart"></i> <sup>01</sup>
                            </p>
                            <p className="cart">
                                <i className="fas fa-cart-plus ml-1"></i> <sup>26</sup>
                            </p>
                        </div>
                        <div className="d-flex">
                            <Avatar variant="square">
                                <FaceIcon />
                            </Avatar>
                            <DropdownButton className="custome-dropdown ml-2" id="dropdown-basic-button" title="Hello Menus">
                                <Dropdown.Item href="/home">Action</Dropdown.Item>
                                <Dropdown.Item href="/home">Another action</Dropdown.Item>
                                <Dropdown.Item href="/home">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default DetailsHeader;