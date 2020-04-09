import Vue from 'vue'
// importing components
import SectionsAggregator from './components/SectionsAggregator.vue'
import OnlineVideos from './components/OnlineVideos.vue'
import Slides from './components/Slides.vue'
import Books from './components/Books.vue'
import Links from './components/Links.vue'
import NotFound from './components/NotFound.vue'

import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: SectionsAggregator },
  { path: '/Videos', component: OnlineVideos },
  { path: '/Slides', component: Slides},
  { path: '/Books', component: Books },
  { path: '/Links', component: Links},
  { path: '*', component: NotFound},
]
const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

