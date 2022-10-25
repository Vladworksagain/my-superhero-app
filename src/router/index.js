import VueRouter from "vue-router";
import SuperHeroView from '@/pages/SuperHeroView'
import FavoriteHeroes from '@/pages/FavoriteHeroes'

const router = new VueRouter({
  routes: [
    {
      path: '/hero',
      name: 'superhero',
      component: SuperHeroView,
      meta: {
        defaultHeader: true
      }
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteHeroes
    },
  ],
  mode: 'history'
})

export default router