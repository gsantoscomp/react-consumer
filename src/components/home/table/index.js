import React from 'react';
import { Table } from 'react-bootstrap';
import Client from '../client';

const TableHome = (props) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.clients.map((client, index) =>
                        <Client editClient={props.editClient} deleteClient={props.deleteClient} key={client.id} order={index + 1} client={client} />
                    )
                }
            </tbody>
        </Table>
    );
}

export default TableHome;