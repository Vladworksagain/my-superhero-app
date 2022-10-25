<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <router-link to="/hero" class="header-title">
          <span>Super</span>
          <span class="header-subtitle__red">Hero</span>
          <span>App</span>
        </router-link>
        <div class="header-sub__wrap">
          <searchBox
            @clearSearch="clearSearch"
            @initSearchHero="initSearchHero"
            :class="{'__open': allSuperHeroesCount}"
          />
          <transition
            name="dropdown"
            mode="in-out"
          >
            <div
              class="header-search__dropdown"
              v-if="allSuperHeroesCount > 0"
            >
              <ul
                class="header-search__list">
                <li
                  class="header-search__item"
                  v-for="superHero in allSuperHeroes"
                  :key="superHero.id"
                >
                  <small-superhero-card
                    :superHeroObj="superHero"
                    @moreDetailsHero="moreDetailsHero"
                  />
                </li>
              </ul>
            </div>
          </transition>
          <router-link
            to="/favorite"
            class="default-favorite__inner"
            v-if="favoriteSuperHeroesCount > 0"
          >
            <span class="favorite-title">
              Favorite
            </span>
            <span class="favorite-counter">
              {{ favoriteSuperHeroesCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import searchBox from '@/components/search/search-box'
import smallSuperheroCard from '@/components/super-hero-card/small-superhero-card'

export default {
  name: "app-header",
  components: {
    searchBox,
    smallSuperheroCard
  },
  data() {
    return {
      searchVal: '',
    }
  },
  computed: {
    ...mapGetters([
      'allSuperHeroes',
      'allSuperHeroesCount',
      'favoriteSuperHeroesCount'
    ])
  },
  methods: {
    initSearchHero(searchValue) {
      this.searchVal = searchValue
      if(searchValue.length) {
        this.$store.dispatch('getAllSuperHeroes', searchValue)
      } else {
        this.$store.commit('setAllSuperHeroes', [])
      }
    },
    clearSearch(val) {
      this.$store.commit('setAllSuperHeroes', val)
      this.searchVal = ''
    },
    moreDetailsHero(data) {
      this.$store.commit('setSuperHeroId', data.id)
    }
  },
}
</script>

<style scoped lang="sass">
.header

  &-sub__wrap
    max-width: 450px
    width: 100%
    position: relative
    display: flex
    align-items: center

    .header-search__dropdown
      border: 1px solid rgba(204, 204, 204, .7)
      border-top: none
      border-radius: 0 0 10px 10px
      position: absolute
      left: 0
      right: 0
      top: 100%

      .header-search__list
        max-height: 250px
        overflow-y: auto
        background-color: rgba(0, 0, 0, .7)

        &::-webkit-scrollbar
          width: 1px

        &::-webkit-scrollbar-track
          background-color: orange
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3)

        &::-webkit-scrollbar-thumb
          background-color: $white
          outline: 1px solid slategrey

        .header-search__item
          margin-bottom: 10px
          &:first-of-type
            padding-top: 10px
          &:last-of-type
            padding-bottom: 10px
            margin-bottom: 0

  .__open
    border-bottom-right-radius: 0
    border-bottom-left-radius: 0

  .dropdown-enter-active, .dropdown-leave-active
    transition: opacity .3s

  .dropdown-enter, .dropdown-leave-to
    opacity: 0
</style>