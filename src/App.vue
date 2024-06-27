<template>
  <div>
    <the-header />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/layouts/TheHeader.vue'
</script>