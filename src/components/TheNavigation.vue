<script setup lang="ts">
import { routesMetaFiltered } from '@/router/routesMeta.ts'
</script>

<template>
  <div class="container">
    <!-- Navigation Section Heading-->
    <!-- <h2 class="page-section-heading text-center text-uppercase text-white">Navigation</h2>
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-compass"></i></div>
      <div class="divider-custom-line"></div>
    </div> -->
    <!-- Navigation Section Content-->
    <div class="text-center">
      <h3
        :class="[
          'd-flex',
          'justify-content-center',
          'align-items-center',
          'flex-md-row',
          'flex-column',
          'gap-2',
        ]"
      >
        <template v-for="(route, index) in routesMetaFiltered" :key="route.path">
          <div class="d-flex align-items-center">
            <router-link :to="route.path" class="text-white">
              {{ route.name }}
            </router-link>
            <span v-if="index < routesMetaFiltered.length - 1" class="mx-2 d-none d-md-inline"
              >|</span
            >
          </div>
        </template>
      </h3>
    </div>
  </div>
</template>
