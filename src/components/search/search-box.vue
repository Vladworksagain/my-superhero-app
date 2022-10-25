<template>
  <form
    class="search-box__form"
    @submit.prevent
  >
    <div class="search-box__wrap">
      <input
        class="search-box__field"
        type="text"
        placeholder="Search your superhero here..."
        v-model="searchField"
        @keyup="initSearchHero"
      >
      <transition
        name="fade"
      >
        <button
          type="button"
          class="reset-btn default-btn"
          v-if="!searchField.length"
          key="1"
        >
          <img src="@/assets/images/icon/search-icon.svg" alt="search-icon">
        </button>
        <button
          type="button"
          class="reset-btn default-btn"
          @click="clearSearch"
          key="2"
          v-else
        >
          <img class="modify-icon" src="@/assets/images/icon/clear-icon.svg" alt="clear-icon">
        </button>
      </transition>
    </div>
  </form>
</template>

<script>
export default {
  name: "search-box",
  data() {
    return {
      searchField: '',
    }
  },
  watch: {
    '$store.state.superHero.currentSuperHeroId'() {
      this.searchField = ''
    }
  },
  methods: {
    clearSearch() {
      this.searchField = ''
      this.$emit('clearSearch', [])
    },
    initSearchHero() {
      if(this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.$emit('initSearchHero', this.searchField)
      }, 500)
    }
  }
}
</script>

<style scoped lang="sass">
.search-box__form
  border: 1px solid rgba(204, 204, 204, .7)
  border-radius: 10px
  position: relative
  width: 100%

  .search-box__wrap
    padding: 10px 35px 10px 10px

    .search-box__field
      border: none
      background-color: transparent
      padding: 0
      margin: 0
      outline: none
      font-size: 16px
      font-family: cursive
      width: 100%
      color: $white

      &::placeholder
        color: rgba(204, 204, 204, .5)

    .default-btn
      transform: translateY(-50%)
      position: absolute
      right: 5px
      top: 50%
      width: 25px
      height: 25px
      display: flex
      align-items: center
      justify-content: center

      img
        width: 25px
        height: 25px
        vertical-align: middle

      .modify-icon
        filter: invert(1)

  .fade-enter-active, .fade-leave-active
    transition: opacity .3s

  .fade-enter, .fade-leave-to
    opacity: 0

</style>