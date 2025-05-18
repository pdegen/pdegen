// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import SandBox from '@/pages/SandBox.vue'
import TheLounge from '@/pages/TheLounge.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/sandbox', name: 'SandBox', component: SandBox },
  { path: '/lounge', name: 'Lounge', component: TheLounge },
]

export const router = createRouter({
  history: createWebHashHistory('/pdegen/'), // use hash history because github pages doesn't support dynamic routes
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
