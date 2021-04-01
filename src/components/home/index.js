import React, { Fragment, useEffect, useState } from 'react';
import ClientService from '../../services/client';
import DefaulNavbar from '../shared/default-navbar';
import CardHome from './card';
import CardFormHome from './card-form';

const Home = () => {
    const [clients, setClients] = useState([]);
    const [showClientform, setShowClientForm] = useState(false);

    const getClients = async () => {
        const response = await ClientService.index();
        return response;
    }

    const toogleClientForm = () => {
        setShowClientForm(!showClientform);
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
                <CardFormHome showClientForm={showClientform}/>
                <CardHome clients={clients} toogleClientForm={toogleClientForm}/>
            </div>
        </Fragment>
    );
}

export default Home;