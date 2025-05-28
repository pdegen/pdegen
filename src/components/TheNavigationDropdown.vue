<script setup lang="ts">
import { routesMetaFiltered } from '@/router/routesMeta.ts'
</script>

<template>
  <div class="dropdown">
    <a
      class="btn btn-secondary dropdown-toggle py-3 px-0 px-lg-3 rounded"
      role="button"
      id="dropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <strong>More</strong>
    </a>

    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
      <li v-for="route in routesMetaFiltered" :key="route.path">
        <router-link :to="route.path" class="dropdown-item text-white fw-bold text-decoration-none">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
