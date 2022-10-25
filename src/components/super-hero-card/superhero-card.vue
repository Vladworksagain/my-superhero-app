<template>
  <div class="hero-card">
    <div class="hero-card__img">
      <img
        :src="superHero.image.url"
        alt=""
      >
    </div>
    <div class="hero-card__main">
      <div class="hero-card__top">
        <span class="hero-card__name">
          {{ superHero.name }}
        </span>
        <add-favorite-btn
          :superHeroInfo="superHero"
          :isVisibleButton="isVisibleButton"
        />
      </div>
      <div
        class="tabs-wrap"
      >
        <button
          class="hero-card__tab reset-btn"
          v-for="tab in tabs"
          :class="{'__active-tab': currentTab === tab.title }"
          @click="setActiveTab(tab)"
          :key="tab.id"
        >
          {{ tab.title }}
        </button>
      </div>
      <div class="tab-content__inner">
        <component
          v-if="!isLoading"
          :is="currentTabComponent"
          :superHeroChar="superHeroChar"
        />
        <default-loader
          v-else
        />
      </div>
    </div>
  </div>
</template>

<script>
import heroAppearance from '@/components/characteristics/hero-appearance'
import heroBiography from '@/components/characteristics/hero-biography'
import heroConnections from '@/components/characteristics/hero-connections'
import heroPowerstats from '@/components/characteristics/hero-powerstats'
import defaultLoader from '@/components/preloader/default-loader'
import addFavoriteBtn from '@/components/buttons/add-favorite-btn'
import getHeroCharactersitics from "@/services/getHeroCharactersitics";

export default {
  name: "superhero-card",
  props: {
    superHero: {
      type: Object,
      default: (() => {})
    },
    isVisibleButton: {
      type: Boolean,
      default: true
    }
  },
  components: {
    heroAppearance,
    heroBiography,
    heroConnections,
    heroPowerstats,
    defaultLoader,
    addFavoriteBtn
  },
  data() {
    return {
      currentTab: 'Powerstats',
      tabs: [
        {
          id: 1,
          title: 'Powerstats'
        },
        {
          id: 2,
          title: 'Biography'
        },
        {
          id: 3,
          title: 'Appearance'
        },
        {
          id: 4,
          title: 'Connections'
        },
      ],
      superHeroChar: {},
      isLoading: false
    }
  },
  watch: {
    '$store.state.superHero.currentSuperHeroId'() {
      this.getHeroChar(this.superHero.id, 'powerstats')
      this.currentTab = 'Powerstats'
    }
  },
  created() {
    this.getHeroChar(this.superHero.id, 'powerstats')
  },
  methods: {
    async setActiveTab(tab) {
      this.currentTab = tab.title
      this.isLoading = true
      try {
        const result = await getHeroCharactersitics(this.superHero.id, tab.title.toLowerCase())
        this.isLoading = false
        this.superHeroChar = result.data
        console.log(this.superHeroChar,'this.superHeroCharthis.superHeroChar')
      } catch (err) {
        console.log(err,' error request')
      }
    },
    async getHeroChar(superHeroId, char) {
      this.isLoading = true
      try {
        const result = await getHeroCharactersitics(superHeroId, char)
        this.isLoading = false
        this.superHeroChar = result.data
      } catch (err) {
        console.log(err,'error request')
      }
    }
  },
  computed: {
    currentTabComponent() {
      return 'hero-' + this.currentTab.toLowerCase()
    },
  }
}
</script>

<style scoped lang="sass">
.hero-card
  display: flex
  align-items: center
  background-color: rgba(0, 0, 0, .8)
  padding: 15px

  .hero-card__img
    margin-right: 35px
    max-width: 400px
    max-height: 520px
    height: 100%

    img
      width: 100%
      height: 100%
      vertical-align: middle
      object-fit: contain

  .hero-card__main
    flex: 100%

    .hero-card__top
      display: flex
      align-items: center
      justify-content: space-between
      margin-bottom: 20px

      .hero-card__name
        font-size: 40px
        color: $red
        font-weight: 700
        display: block
        opacity: .8

  .tabs-wrap
    display: flex
    justify-content: space-between
    margin-bottom: 25px

    .hero-card__tab
      font-size: 20px
      color: $white
      font-weight: 500
      text-transform: uppercase

      &.__active-tab
        text-decoration: underline

  .tab-content__inner
    min-height: 339px
    height: 100%
    position: relative

</style>