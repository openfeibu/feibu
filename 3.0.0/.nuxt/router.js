import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _932806a4 = () => import('..\\pages\\new\\index.vue' /* webpackChunkName: "pages_new_index" */).then(m => m.default || m)
const _a2879254 = () => import('..\\pages\\case\\index.vue' /* webpackChunkName: "pages_case_index" */).then(m => m.default || m)
const _493db3a1 = () => import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */).then(m => m.default || m)
const _45debfa4 = () => import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages_contact_index" */).then(m => m.default || m)
const _77141284 = () => import('..\\pages\\case\\_id.vue' /* webpackChunkName: "pages_case__id" */).then(m => m.default || m)
const _748d5296 = () => import('..\\pages\\new\\_id.vue' /* webpackChunkName: "pages_new__id" */).then(m => m.default || m)
const _49749ef4 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/new",
			component: _932806a4,
			name: "new"
		},
		{
			path: "/case",
			component: _a2879254,
			name: "case"
		},
		{
			path: "/about",
			component: _493db3a1,
			name: "about"
		},
		{
			path: "/contact",
			component: _45debfa4,
			name: "contact"
		},
		{
			path: "/case/:id",
			component: _77141284,
			name: "case-id"
		},
		{
			path: "/new/:id",
			component: _748d5296,
			name: "new-id"
		},
		{
			path: "/",
			component: _49749ef4,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
