import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AlertSucess = (props) => {
    const [show, setShow] = useState(props.alert.active)

    return (
        <Alert className="some-margin" show={show} variant={props.alert.type} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{props.alert.message}</Alert.Heading>
        </Alert>
    );
}

export default AlertSucess;