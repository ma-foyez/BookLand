import React from 'react';
import { Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.css'
const Header = () => {
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
                    <Nav className="mr-auto m-2">
                        <button className="btn btn-light m-2">Login</button>
                        <button className="btn btn-signup m-2">Sign Up</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;