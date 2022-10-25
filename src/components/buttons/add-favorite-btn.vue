<template>
  <button
    v-if="isVisibleButton"
    @click.stop="addToFavorite"
    class="reset-btn add-to__favorite"
    :style="[{
      background: backgroundColor,
      height: customHeight + 'px',
      maxWidth: customWidth + 'px'
    }]"
  >
    Add to favorite
    <img src="@/assets/images/icon/favorite-icon.svg" alt="favorite-cino">
  </button>
</template>

<script>
export default {
  name: "add-favorite-btn",
  props: {
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    customHeight: {
      type: Number,
      default: 40
    },
    customWidth: {
      type: Number,
      default: 160
    },
    superHeroInfo: {
      type: Object,
      default: (() => {})
    },
    isVisibleButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    addToFavorite() {
      this.$store.commit('setFavoriteSuperHeroes', this.superHeroInfo)
      console.log(this.superHeroInfo, 'add to favorite')
    }
  }
}
</script>

<style scoped lang="sass">
.add-to__favorite
  border: 1px solid orange
  border-radius: 12px
  padding: 0 12px
  font-size: 11px
  font-weight: 700
  font-family: cursive
  text-transform: uppercase
  display: flex
  align-items: center

  &:disabled
    opacity: .5

  img
    width: 15px
    height: 15px
    vertical-align: middle
    margin-left: 5px
</style>