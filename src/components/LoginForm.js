import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const LoginForm = ({ handleOnChange, handleOnSubmit, formSwitcher, email, pass}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">CRM Login</h1>
                <br />   
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder="Enter Email"
                                required
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password"
                                name="password"
                                value={pass}
                                onChange={handleOnChange}
                                placeholder="Enter Password"
                                required
                            />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
                <br />
                </Col>
            </Row>
            <Row>
                <Col className="forgotpwd">
                <a href="#!" onClick={() => formSwitcher('reset')}>Forgot Password</a>
                </Col>
            </Row>
        </Container>
    )
}


LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};