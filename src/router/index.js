import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/scanqrcode',
    name: 'scanqrcode',
    text: '扫描二维码',
    icon: 'mdi-data-matrix-scan',
    component: () => import(/* webpackChunkName: "scanqrcode" */ '../views/ScanQRCode.vue')
  },
  {
    path: '/wdnmd',
    name: 'hellowdnmd',
    component: () => import(/* webpackChunkName: "hellowdnmd" */ '../views/HelloWDNMD.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  },
  {
    path: '*',
    name: 'sb404',
    redirect: '/404',
  },
]

const router = new VueRouter({
  routes
})

export { router, routes }
