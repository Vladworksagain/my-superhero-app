export default {
  state: {
    favoriteSuperHeroes: JSON.parse(localStorage.getItem('superHeroes')) || [],
  },
  getters: {
    getFavoriteSuperHeroes(state) {
      return state.favoriteSuperHeroes
    },
    favoriteSuperHeroesCount(state) {
      return state.favoriteSuperHeroes.length
    },
    disabledButtonAfterAddFavorite(state) {
      return state.disabledButton
    }
  },
  mutations: {
    setFavoriteSuperHeroes(state, favoriteHeroes) {
      const find = state.favoriteSuperHeroes.find( item => item.id === favoriteHeroes.id)

      if(!find) {
        state.favoriteSuperHeroes.push(favoriteHeroes)
        localStorage.setItem('superHeroes', JSON.stringify(state.favoriteSuperHeroes))
      } else {
        alert('nonono this item inside favroite')
      }
    },
  },
  actions: {}
}