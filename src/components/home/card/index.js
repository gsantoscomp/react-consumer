import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import TableHome from '../table';

const CardHome = (props) => {
    return (
        <Card className="some-margin">
            <Card.Header>
                <Container fluid>
                    <Row>
                        <Col md={4}><h2>Clients</h2></Col>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Button className="float-right" variant="outline-success" onClick={() => props.toogleClientForm()}>Add Client</Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Header>
            <Card.Body>
                <TableHome clients={props.clients} />
            </Card.Body>
        </Card>
    );
}

export default CardHome;