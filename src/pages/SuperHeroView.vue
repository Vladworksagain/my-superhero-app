<template>
  <main>
    <section class="main-section">
      <div class="container">
        {{ getFavoriteSuperHeroes }}
        <div class="main-section__wrap">
          <superhero-card
            v-if="Object.keys(superHero).length"
            :superHero="superHero"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import superheroCard from "@/components/super-hero-card/superhero-card";
import getSuperHero from "@/services/getSuperHoro"

export default {
  name: "HomePage",
  components: {
    superheroCard
  },
  watch: {
    '$store.state.superHero.currentSuperHeroId'(id) {
      this.getSuperHero(id)
    }
  },
  created() {
    this.getRandomId(0, 200)
  },
  computed: {
    getFavoriteSuperHeroes() {
      return this.$store.getters.getFavoriteSuperHeroes
    }
  },
  data() {
    return {
      superHero: {}
    }
  },
  methods: {
    async getSuperHero(id) {
      try {
        const result = await getSuperHero(id)
        this.superHero = result.data
        console.log(result.data,'result data')
      } catch (err) {
        console.log(err,'error')
      }
    },
    getRandomId(min, max) {
      const resultRandomId = Math.random() * (max - min) + min
      this.$store.commit('setSuperHeroId', resultRandomId.toFixed(0))
    }
  }
}
</script>

<style scoped lang="sass">
.main-section
  padding-top: 100px

  .main-section__wrap
    max-width: 1100px
    width: 100%
    margin: 0 auto
</style>