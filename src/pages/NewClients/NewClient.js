import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { ClientForm } from '../../components/ClientForm/ClientForm';


const fristFormState = {
    client: "",
    project: "",
    invoice: "",
    amount: "",
};

export const NewClient = () => {

    const [formInfo, setformInfo] = useState(fristFormState);
    useEffect(() => {}, [formInfo]);
    
    const handleOnChange = (e) => {
        const{name, value} = e.target;

        setformInfo({
            ...formInfo,
            [name]: value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        console.log('form submitted',formInfo);
    }

    return (
        <Container>
            <Row>
                <Col>
                < ClientForm 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}changedData = {formInfo}
                    />
                </Col>
            </Row>
        </Container>
    )
}
