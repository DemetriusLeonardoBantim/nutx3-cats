<template>
  <div class="m-0 text-center max-w-36 py-12">
    <h1 class="text-cadet">Cat fact</h1>
    <h2 class="text-violet md:text-xl">{{ description }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  description: ''
})

</script>
