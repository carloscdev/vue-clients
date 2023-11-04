<script setup>
import { RouterLink } from 'vue-router';
import IconUpdate from './Icons/IconUpdate.vue';
import IconDelete from './Icons/IconDelete.vue';

defineProps({
  client: {
    type: Object,
    required: true
  }
})

defineEmits(['delete']);

</script>

<template>
<div>
  <div class="w-20 h-20  rounded-full relative">
    <span class="absolute flex h-3 w-3 top-14 right-0" v-if="client.state">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
    </span>
    <img class="w-full bg-slate-200 aspect-square p-2 rounded-full" :src="`https://api.dicebear.com/7.x/bottts/png?seed=${client.name}`" alt=".">
  </div>
  <div class="mt-2 flex items-center justify-center">
    <RouterLink :to="{ name: 'update-client', params: { id: client.id } }" class="">
      <IconUpdate />
    </RouterLink>
    <button class="ml-2 text-red-600 hover:text-red-900" @click="$emit('delete')">
      <IconDelete />
    </button>
  </div>
</div>
</template>
