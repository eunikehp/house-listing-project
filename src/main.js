import './assets/base.css';
import "@fontsource/open-sans"; //regular
import "@fontsource/open-sans/600.css"; //semibold
import "@fontsource/montserrat"; //regular
import "@fontsource/montserrat/500.css"; //medium
import "@fontsource/montserrat/500-italic.css"; //medium-italic
import "@fontsource/montserrat/600.css"; //semibold
import "@fontsource/montserrat/700.css"; //bold

import { createApp } from 'vue'
import store from './stores/counter'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
