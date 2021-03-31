import React from 'react';

const Client = (props) => {
    return (
        <tr>
            <td>{props.order}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    );
}

export default Client;