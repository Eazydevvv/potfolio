import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import 'tailwindcss/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')

createApp(App).use(router).mount('#app')
