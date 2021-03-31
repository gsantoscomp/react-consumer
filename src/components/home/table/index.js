import React from 'react';
import { Table } from 'react-bootstrap';
import Client from '../client';

const TableHome = (props) => {
    return (
        <Table striped bordered hover>
            <thead>
                <td>#</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </thead>
            <tbody>
                {
                    props.clients.map((client, index) =>
                        <Client key={client.id} order={index + 1} name={client.name} email={client.email} phone={client.phone} />
                    )
                }
            </tbody>
        </Table>
    );
}

export default TableHome;