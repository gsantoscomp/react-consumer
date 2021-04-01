import React from 'react';
import { Card, Collapse } from 'react-bootstrap';
import FormHome from '../form';

const CardFormHome = (props) => {
    return (
        <Collapse in={props.showClientForm}>
            <Card className="some-margin">
                <Card.Header>
                    <h2>Add Client</h2>
                </Card.Header>
                <Card.Body>
                    <FormHome addClient={props.addClient}/>
                </Card.Body>
            </Card>
        </Collapse>
    );
}

export default CardFormHome;