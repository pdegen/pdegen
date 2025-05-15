//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.ts'
import './assets/js/scripts.js'
import './assets/js/anims.js'
import './assets/css/anim_styles.css'

createApp(App).use(router).mount('#app')
