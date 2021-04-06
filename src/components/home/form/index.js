import React, { useEffect, useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const FormHome = (props) => {
    const initialClientState = { name: "", email: "", phone: "" };

    const [client, setClient] = useState(initialClientState);

    useEffect(() => {
        if (props.clientData) {
            setClient(props.clientData);
        }

    }, [props.clientData]);

    const handleChangeInput = (event) => {
        setClient({
            ...client,
            [event.currentTarget.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (client['id']) {
            props.updateClient(client);
            setClient(initialClientState);
            return;
        }
        
        props.addClient(client);
        setClient(initialClientState);
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" name="name" onChange={event => handleChangeInput(event)} value={client.name} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={event => handleChangeInput(event)} value={client.email} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name="phone" onChange={event => handleChangeInput(event)} value={client.phone} />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Row>
                <Col>
                    <Button variant="secondary" onClick={(event) => {setClient(initialClientState)}}>
                        Clean Form
                    </Button>
                </Col>
                <Col md={{ span: 8 }}>
                    <Button className="float-right" variant="success" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default FormHome;