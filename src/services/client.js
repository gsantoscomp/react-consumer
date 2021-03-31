import Api from './api';

const ClientService = {
    index: () => Api.get('/clients')
}

export default ClientService;