import Api from './api';

const ClientService = {
    index: () => Api.get('/clients'),
    store: (client) => Api.post('/clients', client),
    destroy: (idClient) => Api.delete(`/clients/${idClient}`)
}

export default ClientService;