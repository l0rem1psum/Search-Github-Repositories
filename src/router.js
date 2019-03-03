import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import SearchResultsView from './views/SearchResultsView.vue'
import RepositoriesView from './views/RepositoriesView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search/:userName',
      name: 'search',
      component: SearchResultsView
    },
    {
      path: '/repositories/:userName',
      name: 'repositories',
      component: RepositoriesView
    }
  ]
})
