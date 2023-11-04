<script setup>
import { onMounted, ref } from 'vue';
import ClientService from '../services/client.service';
import Title from '../components/UI/Title.vue';
import Client from '../components/Client.vue';
import AddClient from '../components/AddClient.vue';

defineProps({
  title: {
    type: String,
    required: true
  }
})

const clients = ref([]);

const updateState = ({ id, state }) => {
  ClientService.updateStateClient(id, !state)
  const index = clients.value.findIndex(client => client.id === id);
  clients.value[index].state = !state;
}

const deleteClient = (id) => {
  console.log('DELETE CLIENT', id)
  ClientService.deleteClient(id)
  clients.value = clients.value.filter(client => client.id !== id);
}

onMounted(() => {
    const response = ClientService.getClients();
    clients.value = response;
    console.log('CLIENTS', clients.value)
})

</script>

<template>
  <div>
    <Title :title="title" :button="false" />
    <div class="max-w-[1080px] w-[95%] mx-auto mt-10">
      <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        <Client v-for="client in clients" :key="client.id" :client="client" @updateState="updateState" @deleteClient="deleteClient" />
        <AddClient />
      </div>
  </div>
  </div>
</template>
