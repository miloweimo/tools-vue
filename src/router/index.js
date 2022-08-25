import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Hello from '../components/HelloPage.vue'
import PoliceLight from '../components/PoliceLight.vue'
// import ScanQRCode from '../components/ScanQRCode.vue'
// import HelloWDNMD from '../components/HelloWDNMD.vue'
import EatWhat from '../components/eatwhat/IndexPage.vue'
// import CharacterStyle from '../components/character-style/IndexPage.vue'
import SeSe from '../components/sese/IndexPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/policelight',
    name: 'policelight',
    text: '假警灯',
    icon: '🚨',
    component: PoliceLight
  },
  // {
  //   path: '/scanqrcode',
  //   name: 'scanqrcode',
  //   text: '扫描二维码',
  //   icon: 'mdi-data-matrix-scan',
  //   component: ScanQRCode
  // },
  // {
  //   path: '/wdnmd',
  //   name: 'hellowdnmd',
  //   component: HelloWDNMD
  // },
  // {
  //   path: '/hello',
  //   name: 'hello',
  //   component: Hello
  // },
  {
    path: '/eatwhat',
    name: '今天吃什么？',
    icon: 'mdi-room-service',
    component: EatWhat
  },
  // {
  //   path: '/divine',
  //   name: '占卜',
  //   icon: '☯️🔮',
  //   component: Hello
  // },
  // {
  //   path: '/divine',
  //   name: '算命',
  //   icon: '🪙',
  //   component: Hello
  // },
  {
    path: '/divine',
    name: '色色语气转换',
    icon: '🥵',
    component: SeSe
  },
  // {
  //   path: '/character-style',
  //   name: '字体特效转换',
  //   icon: 'mdi-format-font',
  //   component: CharacterStyle
  // },
  // {
  //   path: '/divine',
  //   name: '文档排版转换',
  //   icon: '☯️🔮',
  //   component: Hello
  // },
  // {
  //   path: '/divine',
  //   name: '音效',
  //   icon: '☯️🔮',
  //   component: Hello
  // },
  // {
  //   path: '/divine',
  //   name: '相机',
  //   icon: '☯️🔮',
  //   component: Hello
  // },
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
