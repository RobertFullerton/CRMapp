import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ClientData } from '../../components/Client-Data/ClientData';
import './Dashboard.css';

export const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 6}}>
                    <Button className="addClient"> + </Button>
                 </Col>            
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <div> Total Clients: 50</div>

                 </Col>            
            </Row>
            <Row>
                <Col className="mb-2">
                    Clients
                </Col>  
            </Row> 
            <br />
            <Row>
                <Col className="clientData">
                    <ClientData />
                </Col>  
            </Row>   
        </Container>
    )
}
