<script setup>
import { computed } from 'vue';
import AvatarClient from './AvatarClient.vue';

const props = defineProps({
  client: {
    type: Object,
    required: true
  }
})
const fullName = computed(() => `${props.client.name} ${props.client.lastname}`);
const state = computed(() => props.client.state ? 'Active' : 'Inactive');

const emit = defineEmits(['updateState', 'deleteClient']);

const deleteCurrentClient = () => {
  emit('deleteClient', props.client.id);
}
</script>

<template>
<section class="grid grid-cols-[80px,1fr] gap-5 bg-slate-100 p-5 rounded-md hover:shadow">
  <AvatarClient :client="client" @delete="deleteCurrentClient" />
  <div>
    <h3 class="font-bold text-xl">{{ fullName }}</h3>
    <p class="opacity-50 -mt-1.5 text-sm"><small>{{ client.job }} at {{ client.company }}</small></p>
    <div class="flex flex-wrap flex-col items-start gap-1 text-xs mt-3 text-indigo-500 font-semibold">
      <span class="border-indigo-500 block border rounded-full px-3 truncate text">{{ client.email }}</span>
      <span class="border-indigo-500 block border rounded-full px-3 truncate text">{{ client.phone }}</span>
      <span @click="emit('updateState', { id: client.id,  state: client.state})" class="block rounded-full px-3 py-0.5 truncate text cursor-pointer text-white" :class="client.state ? 'bg-lime-500' : 'bg-red-500'">{{ state }}</span>
    </div>
  </div>
</section>
</template>