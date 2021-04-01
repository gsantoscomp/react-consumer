import React, { Fragment, useEffect, useState } from 'react';
import ClientService from '../../services/client';
import AlertSucess from '../shared/alert';
import DefaulNavbar from '../shared/default-navbar';
import CardHome from './card';
import CardFormHome from './card-form';

const Home = () => {
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(false);
    const [clients, setClients] = useState([]); 
    const [showClientform, setShowClientForm] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (clients.length && !alert) {
            return;
        }

        ClientService.index().then((clients) => {
            if (mounted) {
                setClients(clients.data);
                setTimeout(() => {
                    setAlert(false);
                }, 5000);
            }
        });

        return () => mounted = false;
    }, [clients, alert]);

    const toogleClientForm = () => {
        setShowClientForm(!showClientform);
    }

    const addClient = (client) => {
        ClientService.store(client).then((response) => {
            setAlert(true);
            setMessage("User Created!")
        });

    }

    return (
        <Fragment>
            <DefaulNavbar />
            <div>
                {alert && <AlertSucess show={alert} message={message} />}
                <CardFormHome showClientForm={showClientform} addClient={addClient}/>
                <CardHome clients={clients} showClientForm={showClientform} toogleClientForm={toogleClientForm}/>
            </div>
        </Fragment>
    );
}

export default Home;