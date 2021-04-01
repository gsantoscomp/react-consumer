import React from 'react';
import { Button } from 'react-bootstrap';

const Client = (props) => {
    return (
        <tr>
            <td>{props.order}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>
                <Button variant="outline-warning">Edit</Button>{' '}
                <Button variant="outline-danger">Delete</Button>
            </td>
        </tr>
    );
}

export default Client;