import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventDetails from '../views/EventDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event',
    name: 'Event',
    component: EventDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { routes };
export default router;
