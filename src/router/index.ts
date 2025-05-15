// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import SandBox from '@/pages/SandBox.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/sandbox', name: 'SandBox', component: SandBox },
]

export const router = createRouter({
  history: createWebHistory('/pdegen/'),
  routes,
})
