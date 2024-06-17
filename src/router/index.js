import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import HouseDetailView from '../views/HouseDetailView.vue';
import NewListingView from '../views/NewListingView.vue';
import EditListingView from '@/views/EditListingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/house/:id',
      name: 'HouseDetail',
      component: HouseDetailView,
      props: true,
    },
    {
      path: '/create',
      name: 'CreateListing',
      component: NewListingView,
    },
    {
      path: '/edit',
      name: 'EditListing',
      component: EditListingView,
    },

  ]
})

export default router
