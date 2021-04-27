import React from 'react';
import {Jumbotron, Form, Button, Container } from 'react-bootstrap';
import './newClient.css';
import PropTypes from 'prop-types';

export const ClientForm = ({ handleOnChange, handleOnSubmit,changedData }) => {

    console.log(changedData);

    return (
        <Container className="clientContainer">  
            <div className="formTitle" style={{fontSize: 20}}>
                New Client Form:
            </div>
            <Jumbotron className="jumbo">
                <Form onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Clients Name:</Form.Label>
                                <Form.Control 
                                    name="client"
                                    value={changedData.client}
                                    onChange={handleOnChange}
                                    required
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Project Name:</Form.Label>
                                <Form.Control 
                                    name="project"
                                    value={changedData.project}
                                    onChange={handleOnChange}
                                    required
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Invoice Number:</Form.Label>
                                <Form.Control 
                                    name="invoice"
                                    value={changedData.invoice}
                                    onChange={handleOnChange}
                                    required
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Amount:</Form.Label>
                                <Form.Control 
                                    name="amount"
                                    value={changedData.amount}
                                    onChange={handleOnChange}
                                    type="number"
                                    prefix='$'
                                    quantity="currency"
                                    required
                                />
                        </Form.Group>
                        <Button  block type="submit">Submit</Button>
                    </Form>
            </Jumbotron>
        </Container>
    );
};
 ClientForm.propTypes = {
        handleOnChange: PropTypes.func.isRequired,
        handleOnSubmit: PropTypes.func.isRequired,
        changedData: PropTypes.object.isRequired,
    }