import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from  '../views/CharactersView.vue'
import CharactersListView from  '../views/CharactersListView.vue'
import CharacterDetailView from  '../views/CharacterDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/rickandmorty',
      component: CharactersView,
      redirect: { path: '/rickandmorty/all' },
      children: [
        {
          path: 'all',
          component: CharactersListView
        },
        {
          path: 'character/:id',
          component: CharacterDetailView,
          name: 'characterDetail',
          props: true
        }
      ]
    }
  ]
})

export default router
