import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import EditarCliente from '../components/EditarCliente.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import('../views/Clientes.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/clientes/edit/:id',
    name: 'EditarCliente',
    component: EditarCliente,
    props: true // Permitir que os parâmetros sejam passados como props
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router