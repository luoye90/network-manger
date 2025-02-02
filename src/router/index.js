import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '', 
    redirect: '/Home'
  },
  {
    path: '/Home', 
    component: () => import('../views/Home'),
  }
]

const router = new VueRouter({
  routes
})

export default router
