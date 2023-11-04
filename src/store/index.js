import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('store', () => {
  const clients = ref([]);
  const addClient = (client) => {
    clients.value.push(client);
  };
  const clearClients = () => {
    clients.value = [];
  };
  const updateClient = (client) => {
    const index = clients.value.findIndex(({ id }) => id === client.id);
    clients.value[index] = client;
  };
  const removeClient = (id) => {
    const index = clients.value.findIndex((client) => client.id === id);
    clients.value.splice(index, 1);
  };
  const getClient = (id) => {
    return clients.value.find((client) => client.id === id);
  }
  return {
    clients,
    addClient,
    clearClients,
    updateClient,
    removeClient,
    getClient
  };
});