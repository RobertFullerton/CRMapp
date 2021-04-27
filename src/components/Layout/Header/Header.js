import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import './headerCss.css';
import logo from '../../../assets/Imgs/CRMLogo.png';

export const Header = () => {
    return (
    <Navbar className="nav"
        collapseOnSelect
        expand="md">
        <Navbar.Brand>
            <img src={logo} alt="the worlds ROJEN and CRM are in the upper right corner of the screen. "/>
        </Navbar.Brand>
    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="searcBar ml-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/dashboard">Clients</Nav.Link>
                <Nav.Link href="/dashboard">Logout</Nav.Link>
                <Form className="searchBar">
            <FormControl type="text" placeholder="Client Search" />
        </Form>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};
