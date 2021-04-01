import Api from './api';

const ClientService = {
    index: () => Api.get('/clients'),
    store: (client) => Api.post('/clients', client)
}

export default ClientService;