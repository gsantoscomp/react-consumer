import React, { Fragment, useEffect, useState } from 'react';
import ClientService from '../../services/client';
import DefaulNavbar from '../shared/default-navbar';
import TableHome from './table';

const Home = () => {
    const [clients, setClients] = useState([]);

    const getClients = async () => {
        const response = await ClientService.index();
        return response;
    }

    useEffect(() => {
        getClients().then((clients) => {
            setClients(clients.data);
        })
    }, []);


    return (
        <Fragment>
            <DefaulNavbar />
            <div>
                <TableHome clients={clients} />
            </div>
        </Fragment>
    );
}

export default Home;