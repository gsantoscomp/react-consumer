import React from 'react';
import { Button } from 'react-bootstrap';

const Client = (props) => {

    const handleDelete = (event) => {
        event.preventDefault();
        props.deleteClient(props.client.id)
    }

    return (
        <tr>
            <td>{props.order}</td>
            <td>{props.client.name}</td>
            <td>{props.client.email}</td>
            <td>{props.client.phone}</td>
            <td>
                <Button size="sm" variant="outline-secondary" onClick={() => {props.editClient(props.client)}}>Edit</Button>{' '}
                <Button size="sm" variant="outline-danger" onClick={(event) => handleDelete(event)}>Delete</Button>
            </td>
        </tr>
    );
}

export default Client;