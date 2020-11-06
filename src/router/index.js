import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stress',
    name: 'SvgStress',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SvgStress.vue')
  },
  {
    path: '/simple',
    name: 'SvgSimple',
    component: () => import(/* webpackChunkName: "about" */ '../views/SvgSimple.vue')
  },
  {
    path: '/esnext',
    name: 'SvgEsnext',
    component: () => import(/* webpackChunkName: "about" */ '../views/SvgEsnext.vue')
  },
  {
    path: '/multiple',
    name: 'SvgMultiple',
    component: () => import(/* webpackChunkName: "about" */ '../views/SvgMultiple.vue')
  },
  {
    path: '/font',
    name: 'SvgFonts',
    component: () => import(/* webpackChunkName: "about" */ '../views/SvgFonts.vue')
  },
  {
    path: '/memory',
    name: 'SvgMemory',
    component: () => import(/* webpackChunkName: "about" */ '../views/SvgMemory.vue')
  },
  {
    path: '/db',
    name: 'SvgDb',
    component: () => import(/* webpackChunkName: "about" */ '../views/SvgDb.vue')
  },
  {
    path: '/cancel',
    name: 'SvgCancel',
    component: () => import(/* webpackChunkName: "about" */ '../views/SvgCancel.vue')
  },
  {
    path: '/control',
    name: 'SvgControl',
    component: () => import(/* webpackChunkName: "about" */ '../views/SvgControl.vue')
  },
  {
    path: '/control',
    name: 'SvgAwarded',
    component: () => import(/* webpackChunkName: "about" */ '../views/SvgAwarded.vue')
  },
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
