import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AlertSucess = (props) => {
    const [show, setShow] = useState(props.show)

    return (
        <Alert className="some-margin" show={show} variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{props.message}</Alert.Heading>
        </Alert>
    );
}

export default AlertSucess;