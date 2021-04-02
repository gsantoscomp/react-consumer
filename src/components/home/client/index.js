import React from 'react';
import { Button } from 'react-bootstrap';

const Client = (props) => {

    const handleDelete = (event) => {
        event.preventDefault();
        props.deleteClient(props.clientId)
    }

    return (
        <tr>
            <td>{props.order}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>
                <Button size="sm" variant="outline-secondary">Edit</Button>{' '}
                <Button size="sm" variant="outline-danger" onClick={(event) => handleDelete(event)}>Delete</Button>
            </td>
        </tr>
    );
}

export default Client;