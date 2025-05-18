<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.name,
  (newName) => {
    document.body.className = '' // Remove old theme classes
    if (newName) {
      document.body.classList.add(`theme-${String(newName)}`)
    }
  },
  { immediate: true },
)
</script>

<template>
  <router-view />
</template>
