import Api from './api';

const ClientService = {
    index: () => Api.get('/clients'),
    store: (client) => Api.post('/clients', client),
    edit: (client, idClient) => Api.put(`/clients/${idClient}`, client),
    destroy: (idClient) => Api.delete(`/clients/${idClient}`)
}

export default ClientService;