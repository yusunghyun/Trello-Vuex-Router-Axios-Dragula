import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'
import store from '../store'


Vue.use(VueRouter);

const requireAuth = ( to, from, next ) =>{
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  store.getters.isAuth ? next() : next(loginPath)
}
//  {beforeEnter:requireAuth}   <--이놈이 로그인 이미 했다라는 인증용ㅇㅇ

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:Home ,beforeEnter:requireAuth},
    {path:'/login',component:Login},
    {path:'/b/:bid',component:Board,beforeEnter:requireAuth,children:[
      {path: 'c/:cid', component:Card,beforeEnter:requireAuth}
    ]},
    {path:'*',component:NotFound} //else
  ]
})

export default router