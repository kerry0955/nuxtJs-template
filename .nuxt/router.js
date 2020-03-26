import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c13eac4 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _4e192ceb = () => interopDefault(import('..\\pages\\asyncData\\index.vue' /* webpackChunkName: "pages_asyncData_index" */))
const _63ae2860 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _079fa238 = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages_news__id" */))
const _79c1eac3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6c13eac4,
    name: "about"
  }, {
    path: "/asyncData",
    component: _4e192ceb,
    name: "asyncData"
  }, {
    path: "/news",
    component: _63ae2860,
    name: "news"
  }, {
    path: "/news/:id",
    component: _079fa238,
    name: "news-id"
  }, {
    path: "/",
    component: _79c1eac3,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
