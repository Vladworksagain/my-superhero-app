import axios from 'axios'

export default {
  state: {
    superHeroes: [],
    currentSuperHeroId: '',
    modalIsOpen: false
  },
  getters: {
    allSuperHeroesCount(state) {
      return state.superHeroes.length
    },
    allSuperHeroes(state) {
      return state.superHeroes
    },
    modalIsOpen(state) {
      return state.modalIsOpen
    }
  },
  mutations: {
    setAllSuperHeroes(state, superHeroesData) {
      state.superHeroes = superHeroesData
    },
    setSuperHeroId(state, id) {
      state.currentSuperHeroId = id
    },
    setModalIsOpen(state, bool) {
      state.modalIsOpen = bool
    }
  },
  actions: {
    async getAllSuperHeroes({ commit }, searchValue) {
      await axios(`/search/${searchValue}`).then( res => {
        const resultError = res.data.error
        const superHeroesRes = res.data.results

        if(resultError) {
          commit('setAllSuperHeroes', [])
          commit('setModalIsOpen', true)
        } else {
          commit('setAllSuperHeroes', superHeroesRes)
        }

      }).catch( err => {
        console.log(err,'err')
      })
    }
  },
}