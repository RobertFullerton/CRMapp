import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const RestPass = ({ handleOnChange, handleOnResetSubmit,formSwitcher, email}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">Reset Password</h1>
                <br />   
                <Form onSubmit={handleOnResetSubmit}>
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
                    
                    <Button type="submit">Submit</Button>
                </Form>
                <br />
                </Col>
            </Row>
            <Row>
                <Col className="forgotpwd">
                <a href="#!" onClick={() => formSwitcher('login')}>Click here to login</a>
                </Col>
            </Row>
        </Container>
    )
}


RestPass.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnRestSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};