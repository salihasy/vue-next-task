import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import Paginate from "vuejs-paginate-next";

const app = createApp(App).use(router).use(store)
app.config.globalProperties.$axios = axios
app.use(Paginate)
app.mount("#app")