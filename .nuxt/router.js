import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e8e0cad = () => interopDefault(import('..\\pages\\category.vue' /* webpackChunkName: "pages/category" */))
const _e7558e16 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _5a29e0e4 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _143a4690 = () => interopDefault(import('..\\pages\\product_detail.vue' /* webpackChunkName: "pages/product_detail" */))
const _417263c6 = () => interopDefault(import('..\\pages\\product_list.vue' /* webpackChunkName: "pages/product_list" */))
const _4297b49a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category",
    component: _4e8e0cad,
    name: "category"
  }, {
    path: "/checkout",
    component: _e7558e16,
    name: "checkout"
  }, {
    path: "/home",
    component: _5a29e0e4,
    name: "home"
  }, {
    path: "/product_detail",
    component: _143a4690,
    name: "product_detail"
  }, {
    path: "/product_list",
    component: _417263c6,
    name: "product_list"
  }, {
    path: "/",
    component: _4297b49a,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
