import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const FormHome = (props) => {
    return (
        <Form>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone" />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Row>
                <Col md={{ span: 8, offset: 4 }}>
                    <Button className="float-right" variant="success" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default FormHome;