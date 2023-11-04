<script setup>
import RouterLink from './RouterLink.vue';
import IconList from '../Icons/IconList.vue';


defineProps({
  title: {
    type: String,
    required: true
  },
  button: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
<h1 class="text-3xl font-extrabold text-white bg-indigo-800 py-14 rounded-br-[50px]">
  <span class="max-w-[1080px] w-[95%] flex mx-auto items-center justify-between">
    <span>{{ title }}</span>
    <RouterLink to="clients" class="justify-self-end" v-if="button">
      <div class="flex gap-2 items-center">
        <IconList />
        <span>Clients</span>
      </div>
    </RouterLink>
  </span>
</h1>
</template>
