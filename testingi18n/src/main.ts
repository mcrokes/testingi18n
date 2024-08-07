import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {i18n} from "@/plugins/i18n.config";
import vuetify from "@/plugins/vuetify";

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(vuetify)
app.use(router)

app.mount('#app')
