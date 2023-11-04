<script setup>
import { RouterLink } from 'vue-router';
import IconAddClient from './Icons/IconAddClient.vue';
</script>

<template>
<RouterLink :to="{ name: 'add-client' }" class="py-5 border-2 border-dashed border-indigo-500 grid place-content-center opacity-50 hover:opacity-100 transition-all duration-100 cursor-pointer rounded-md">
  <IconAddClient class="mx-auto" />
  <p class="text-indigo-500 font-bold">Add User</p>
</RouterLink>
</template>
