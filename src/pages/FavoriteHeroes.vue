<template>
  <main>
    <section class="favorite-heroes__section">
      <div class="container">
        <div
          class="sort-buttons__wrap"
        >
          {{ defaultSortValue }}
          <button
            class="reset-btn sort-btn"
            v-for="button in sortButtons"
            :key="button.id"
            @click="setDefaultSortValue(button)"
          >
            {{ button.title }}
          </button>
        </div>
        <div class="favorite-heroes__grid">
          <superhero-card
            class="favorite-hero"
            v-for="item in getFavoriteSuperHeroes"
            :key="item.id"
            :superHero="item"
            :isVisibleButton="false"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import superheroCard from "@/components/super-hero-card/superhero-card";

export default {
  name: "FavoriteHeroes",
  components: {
    superheroCard
  },
  data() {
    return {
      defaultSortValue: '',
      sortButtons: [
        {
          id: 1,
          title: 'Sort by full-name',
          value: 'full-name'
        },
        {
          id: 2,
          title: 'Sort by strength',
          value: 'strength'
        },
        {
          id: 3,
          title: 'Sort by gender',
          value: 'gender'
        },
        {
          id: 4,
          title: 'Sort by alignment',
          value: 'alignment'
        },
      ]
    }
  },
  computed: {
    getFavoriteSuperHeroes() {
      if(this.defaultSortValue === 'full-name') {
        return this.$store.getters.getFavoriteSuperHeroes.slice().sort((a,b)=>{
          if(a.biography['full-name'].toLowerCase() < b.biography['full-name'].toLowerCase()) {
            return -1
          }
          if(a.biography['full-name'] > b.biography['full-name']) {
            return 1
          }
          return 0
        })
      } else if(this.defaultSortValue === 'strength') {
        return this.$store.getters.getFavoriteSuperHeroes.slice().sort(( a, b ) => {
          if(a.powerstats.strength > b.powerstats.strength) {
            return -1
          }
          if(a.powerstats.strength < b.powerstats.strength) {
            return 1
          }
          return 0
        })
      }
      return this.$store.getters.getFavoriteSuperHeroes
    }
  },
  methods: {
    setDefaultSortValue(btn) {
      this.defaultSortValue = btn.value
    }
  }
}
</script>

<style lang="sass">
.favorite-heroes__section
  padding: 25px 0

  .favorite-heroes__grid
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr))
    grid-gap: 10px

    .favorite-hero
      flex-direction: column

      .hero-card__img
        margin-right: 0

      .tabs-wrap
        overflow-y: auto
        padding-bottom: 5px

        &::-webkit-scrollbar
          width: 1px
          height: 1px

        &::-webkit-scrollbar-track
          background-color: orange
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3)

        &::-webkit-scrollbar-thumb
          background-color: $white
          outline: 1px solid slategrey

      .tab-content__inner
        width: 100%
        height: auto

      .hero-card__main
        width: 100%
        .hero-card__top
          justify-content: center

  .sort-buttons__wrap
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 25px

    .sort-btn
      padding: 10px
      background-color: $white
      border-radius: 10px
      margin-right: 15px
      transition: .3s ease all

      &:hover
        background-color: rgba(0, 0, 0, .7)
        color: $white

      &:last-of-type
        margin-right: 0
</style>