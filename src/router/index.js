import { createRouter, createWebHistory } from 'vue-router'
import ClientsView from '../views/ClientsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'clients',
      component: ClientsView,
      props: {
        title: 'Client List'
      }
    },
    {
      path: '/add-client',
      name: 'add-client',
      component: () => import('../views/AddClientView.vue'),
      props: {
        title: 'Add Client'
      }
    },
    {
      path: '/update-client/:id',
      name: 'update-client',
      component: () => import('../views/UpdateClientView.vue'),
      props: {
        title: 'Update Client'
      }
    }
  ]
})

export default router
