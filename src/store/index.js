import Vue from 'vue'
import Vuex from 'vuex'
import superHero from './modules/superHero'
import favoriteSuperHeroes from './modules/favoriteSuperHeroes'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {},
  mutations: {},
  state: {},
  getters: {},

  modules: {
    superHero,
    favoriteSuperHeroes
  }
})