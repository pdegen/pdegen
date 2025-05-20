// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import SandBox from '@/pages/SandBox.vue'
import TheLounge from '@/pages/TheLounge.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/sandbox', name: 'SandBox', component: SandBox },
  { path: '/lounge', name: 'Lounge', component: TheLounge },
]

export const router = createRouter({
  //history: createWebHashHistory('/pdegen/'), // use hash history because github pages doesn't support dynamic routes
  history: createWebHistory('/pdegen/'), // or use history mode with gh-pages 404.html hack: cp dist/index.html dist/404.html
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})
