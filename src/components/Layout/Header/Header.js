import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const Header = () => {
    return (
    <Navbar
        collapseOnSelect
        bg="info"
        variant="dark"
        expand="md">
        <Navbar.Brand>
            logo
        </Navbar.Brand>
    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="searcBar ml-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/dashboard">Clients</Nav.Link>
                <Nav.Link href="/dashboard">Logout</Nav.Link>
                <Form className="searchBar col-lg">
            <FormControl type="text" placeholder="Client Search" className="mr-sm-1" />
            <Button variant="outline-success">Search</Button>
        </Form>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};
