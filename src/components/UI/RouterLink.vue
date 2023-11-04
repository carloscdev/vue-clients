<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  to: {
    type: String,
    required: true
  }
});
</script>

<template>
  <RouterLink
    :to="{ name: to }"
    class="md:inline-block rounded bg-white/20 py-2 px-3 text-white font-bold  uppercase shadow text-sm hover:bg-white/30"
  >
    <slot />
  </RouterLink>
</template>