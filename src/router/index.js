import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home/Home.vue'
import Delu from '@/views/Delu.vue'
const Login=()=> import('@/views/Login.vue');

const routes = [{
  path:'/',
  name:'Layout',
  component:Layout,
  children:[
    {
  path:'/',
  component:Home
    }
    
  ]
},{
  path:'/Login',
  component:Login
},{
  path:'/Delu',
  component:Delu
  
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
