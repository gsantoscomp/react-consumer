import React, { Fragment, useEffect, useState } from 'react';
import ClientService from '../../services/client';
import AlertSucess from '../shared/alert';
import DefaulNavbar from '../shared/default-navbar';
import CardHome from './card';
import CardFormHome from './card-form';

const Home = () => {

    const [alert, setAlert] = useState({active: false, message: "", type: ""});
    const [clients, setClients] = useState([]); 
    const [showClientform, setShowClientForm] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (clients.length && !alert.active) {
            return;
        }

        ClientService.index().then((clients) => {
            if (mounted) {
                setClients(clients.data);
                setTimeout(() => {
                    setAlert({active: false, message: "", type: ""});
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
            setAlert({active: true, message: "User Created", type: "success"});
        });
    }

    const deleteClient = (idClient) => {
        ClientService.destroy(idClient).then((response) => {
            setAlert({active: true, message: "User Deleted", type: "danger"});
        });
    }

    return (
        <Fragment>
            <DefaulNavbar />
            <div>
                {alert.active && <AlertSucess alert={alert} />}
                <CardFormHome showClientForm={showClientform} addClient={addClient}/>
                <CardHome clients={clients} showClientForm={showClientform} deleteClient={deleteClient} toogleClientForm={toogleClientForm}/>
            </div>
        </Fragment>
    );
}

export default Home;