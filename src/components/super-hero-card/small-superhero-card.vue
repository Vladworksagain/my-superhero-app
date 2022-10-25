<template>
  <div
    class="small-card"
    @click="moreDetailsHero"
  >
    <div class="small-card__wrap">
      <div class="small-card__img">
        <img
          :src="superHeroObj.image.url"
          :alt="superHeroObj.name"
        >
      </div>
      <span class="small-card__title">
        {{ superHeroObj.name }}
      </span>
    </div>
    <add-favorite-btn
      :customHeight="30"
      :superHeroInfo="superHeroObj"
    />
  </div>
</template>

<script>
import addFavoriteBtn from '@/components/buttons/add-favorite-btn'

export default {
  name: "small-superhero-card",
  props: {
    superHeroObj: {
      type: Object,
      default: (() =>{})
    }
  },
  components: {
   addFavoriteBtn
  },
  methods: {
    moreDetailsHero() {
      this.$emit('moreDetailsHero', this.superHeroObj)
      this.$store.commit('setAllSuperHeroes', [])
    }
  }
}
</script>

<style scoped lang="sass">
.small-card
  cursor: pointer
  display: flex
  align-items: center
  justify-content: space-between
  padding-right: 10px
  &__wrap
    display: flex
    align-items: center

    .small-card__img
      max-width: 50px
      height: auto
      margin-right: 10px

      img
        width: 100%
        height: 100%
        object-fit: contain
        border-radius: 2px
        overflow: hidden

    .small-card__title
      color: $white
      font-size: 17px
</style>