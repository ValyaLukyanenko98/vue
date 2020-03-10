import Vue from 'vue'
import VueRouter from 'vue-router'
import aboutMe from '../views/aboutMe.vue'
import info from '../views/info.vue'
import team from '../views/team.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'aboutMe',
    component: aboutMe
  }, 
  {
    path: '/info',
    name: 'info',
    component: info
  }, 
  {
    path: '/team',
    name: 'team',
    component: team
  }, 
]


const router = new VueRouter({
  routes
})

export default router
