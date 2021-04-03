import React, { Fragment, useEffect, useRef, useState } from 'react';
import ClientService from '../../services/client';
import AlertSucess from '../shared/alert';
import DefaulNavbar from '../shared/default-navbar';
import CardHome from './card';
import CardFormHome from './card-form';

const Home = () => {

    const [needUpdate, setNeedUpdate] = useState(true);
    const [alert, setAlert] = useState({active: false, message: "", type: ""});
    const [clients, setClients] = useState([]); 
    const [showClientform, setShowClientForm] = useState(false);
    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;

        if (clients.length && !needUpdate) {
            return;
        }

        ClientService.index().then((clients) => {
            if (mounted.current) {
                setClients(clients.data);
                setNeedUpdate(false);
            }
        });

        return () => {mounted.current = false};
    }, [clients, needUpdate]);

    useEffect(() => {
        if (alert.active) {
            setTimeout(() => {
                if (mounted.current) {
                    setAlert({active: false, message: "", type: ""});
                }
            }, 2000);
        }
        
        return () => {mounted.current = false}
    }, [alert]);
    
    const toogleClientForm = () => {
        setShowClientForm(!showClientform);
    }

    const addClient = (client) => {
        ClientService.store(client).then((response) => {
            setAlert({active: true, message: "User Created", type: "success"});
            setNeedUpdate(true);
        });
    }

    const deleteClient = (idClient) => {
        ClientService.destroy(idClient).then((response) => {
            setAlert({active: true, message: "User Deleted", type: "danger"});
            setNeedUpdate(true);
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