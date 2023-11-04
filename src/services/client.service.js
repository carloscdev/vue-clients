// with localstorage
export default {
  getClients() {
    return JSON.parse(localStorage.getItem('clients')) || [];
  },

  addClient(client) {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));
  },

  getClient(id) {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    return clients.find(client => client.id === id);
  },

  updateClient(id, client) {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const index = clients.findIndex(client => client.id === id);
    clients[index] = client;
    localStorage.setItem('clients', JSON.stringify(clients));
  },

  updateStateClient(id, state) {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const index = clients.findIndex(client => client.id === id);
    clients[index].state = state;
    localStorage.setItem('clients', JSON.stringify(clients));
  },

  deleteClient(id) {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);
    localStorage.setItem('clients', JSON.stringify(clients));
  }
}