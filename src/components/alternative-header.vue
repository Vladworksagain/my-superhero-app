<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <router-link to="/hero" class="header-title">
          <span>Super</span>
          <span class="header-subtitle__red">Hero</span>
          <span>App</span>
        </router-link>
        <h1
          class="default-title"
        >
          You`r favorite heroes
        </h1>
        <div
          class="default-favorite__inner"
          v-if="favoriteSuperHeroesCount > 0"
        >
          <span class="favorite-title">
            Favorite
          </span>
          <span class="favorite-counter">
            {{ favoriteSuperHeroesCount }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "alternative-header",

  computed: {
    favoriteSuperHeroesCount() {
      return this.$store.getters.favoriteSuperHeroesCount
    }
  }
}
</script>

<style scoped>

</style>