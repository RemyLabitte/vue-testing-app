import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faUserSecret, faCommentDots } from '@fortawesome/free-solid-svg-icons'

import './assets/main.css'

library.add(fas, faUserSecret, faCommentDots)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
