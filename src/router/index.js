import { createRouter, createWebHistory } from 'vue-router'
import CollectionsView from '../views/CollectionsView.vue'
import AboutView from '../views/AboutView.vue'
import MenView from "../views/MenView.vue"
import WomenView from "../views/WomenView.vue"
import ContactView from "../views/ContactView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CollectionsView
    },
    {
      path: "/men",
      name: "men",
      component: MenView,
    },
    {
      path: "/women",
      name: "women",
      component: WomenView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ]
})

export default router
