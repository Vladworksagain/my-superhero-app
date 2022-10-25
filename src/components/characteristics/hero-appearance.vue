<template>
  <ul class="default-hero__list">
    <template>
      <li
        class="default-hero__item"
        v-for="item in Object.keys(superHeroChar)"
        :key="item.id"
      >
        <div
          class="char__wrap appearance-char__wrap"
          v-if="item !== 'response' && item !== 'id' && item !== 'name'"
        >
          <span class="char__title">
            {{ item }}:
          </span>
          <span
            class="char-subtitle__inner"
            v-if="!Array.isArray(superHeroChar[item])"
          >
            {{ superHeroChar[item] }}
          </span>
          <span
            class="char-subtitle__inner"
            v-else
          >
            {{ superHeroChar[item][1] }}
          </span>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: "hero-appearance",
  props: {
    superHeroChar: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
.appearance-char__wrap
  justify-content: space-between

  .char-subtitle__inner
    padding: 5px
    border-radius: 20px
    background-color: $red
    color: $white
    font-size: 14px
</style>