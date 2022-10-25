<template>
  <ul class="default-hero__list">
    <template>
      <li
        class="default-hero__item"
        v-for="item in Object.keys(superHeroChar)"
        :key="item.id"
      >
        <div
          class="char__wrap"
          v-if="item !== 'response' && item !== 'id' && item !== 'name'"
        >
          <div class="char-sub__wrap">
            <img src="@/assets/images/icon/shield-icon.svg" alt="shield">
            <span class="char__title">
              {{ item }}
            </span>
          </div>
          <span class="char__subtitle">
            {{ superHeroChar[item] }}
          </span>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: "hero-powerstats",
  props: {
    superHeroChar: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
.default-hero__list

  .default-hero__item

    &:last-of-type

      .char__wrap
        margin-bottom: 0

    .char__wrap
      background-color: rgba(0, 0, 0, .6)
      padding: 10px
      margin-bottom: 10px
      box-shadow: 1px 1px 1px black
      justify-content: space-between

      .char-sub__wrap
        display: flex
        align-items: center

        img
          vertical-align: middle
          margin-right: 5px
</style>