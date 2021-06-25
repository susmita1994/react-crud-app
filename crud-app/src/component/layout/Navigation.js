import React from 'react';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import { NavLink, Router } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
const Navigation = () => {
    return (
        <div>
            <Navbar bg="success" variant="dark">
                <Navbar.Brand >React Crud</Navbar.Brand> 
                <Nav className="mr-auto">
                    <Nav.Link ><NavLink activeStyle={{color:"white"}} exact to="/">Home</NavLink> </Nav.Link>
                    <Nav.Link ><NavLink activeStyle={{color:"white"}} exact to="/about">About</NavLink></Nav.Link>
                    <Nav.Link ><NavLink activeStyle={{color:"white"}} exact to="/contact">Contact</NavLink></Nav.Link>
                    <Nav.Link className="col-sm-6" ><NavLink activeStyle={{color:"white"}} exact to="/login">Login</NavLink></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Navigation;