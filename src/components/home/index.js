import React, { Fragment, useEffect, useRef, useState } from 'react';
import ClientService from '../../services/client';
import AlertSucess from '../shared/alert';
import DefaulNavbar from '../shared/default-navbar';
import CardHome from './card';
import CardFormHome from './card-form';

const Home = () => {

    const [stateClientsList, setStateClientsList] = useState({clients: [], needUpdate: true});
    const [alert, setAlert] = useState({active: false, message: "", type: ""});
    const [showClientForm, setshowClientForm] = useState(false);
    const mounted = useRef(true);


    useEffect(() => {
        mounted.current = true;

        if (!stateClientsList.needUpdate) {
            return;
        }

        ClientService.index().then((clients) => {
            if (mounted.current) {
                setStateClientsList({
                    clients: clients.data,
                    needUpdate: false
                });
            }
        });

        return () => {mounted.current = false};
    }, [stateClientsList]);

    useEffect(() => {
        if (alert.active) {
            setTimeout(() => {
                if (mounted.current) {
                    setAlert({active: false, message: "", type: ""});
                }
            }, 2000);
        }
        
    }, [alert]);
    
    const toogleClientForm = () => {
        setshowClientForm(!showClientForm);
    }

    const addClient = (client) => {
        ClientService.store(client).then((response) => {
            setAlert({active: true, message: "User Created", type: "success"});
            setStateClientsList({
                ...stateClientsList,
                needUpdate: true
            });
        });
    }

    const deleteClient = (idClient) => {
        ClientService.destroy(idClient).then((response) => {
            setAlert({active: true, message: "User Deleted", type: "danger"});
            setStateClientsList({
                ...stateClientsList,
                needUpdate: true
            });
        });
    }

    return (
        <Fragment>
            <DefaulNavbar />
            <div>
                {alert.active && <AlertSucess alert={alert} />}
                <CardFormHome showClientForm={showClientForm} addClient={addClient}/>
                <CardHome clients={stateClientsList.clients} showClientForm={showClientForm} deleteClient={deleteClient} toogleClientForm={toogleClientForm}/>
            </div>
        </Fragment>
    );
}

export default Home;