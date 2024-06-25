import './assets/base.css';
import "@fontsource/open-sans";
import "@fontsource/montserrat";

import { createApp } from 'vue'
import store from './stores/counter'
// import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router'

const app = createApp(App)


// app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')
