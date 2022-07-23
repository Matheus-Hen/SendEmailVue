import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import {Store} from './store/index.js'

const app = createApp(App)
app.use(Store)
app.mount('#app')
