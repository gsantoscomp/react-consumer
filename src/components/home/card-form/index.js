import React from 'react';
import { Card, Collapse } from 'react-bootstrap';
import FormHome from '../form';

const CardFormHome = (props) => {
    return (
        <Collapse in={props.showClientForm}>
            <Card className="some-margin">
                <Card.Header>
                    <h2>Client Info</h2>
                </Card.Header>
                <Card.Body>
                    <FormHome clientData={props.clientData} addClient={props.addClient} updateClient={props.updateClient}/>
                </Card.Body>
            </Card>
        </Collapse>
    );
}

export default CardFormHome;