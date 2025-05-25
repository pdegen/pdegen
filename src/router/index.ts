// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import SandBox from '@/pages/SandBox.vue'
import TheLounge from '@/pages/TheLounge.vue'
import AdvocayPage from '@/pages/AdvocayPage.vue'
import { routesMeta } from '@/router/routesMeta.ts'

// numbering must match routesMeta.ts ordeer
const routes = [
  { ...routesMeta[0], component: HomePage },
  { ...routesMeta[1], component: SandBox },
  { ...routesMeta[2], component: AdvocayPage },
  { ...routesMeta[3], component: TheLounge },
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
