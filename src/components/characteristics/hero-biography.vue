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
          <span class="char__title">
            {{ item }}:
          </span>
          <span
            class="char__subtitle"
            v-if="!Array.isArray(superHeroChar[item])"
          >
            {{ superHeroChar[item] }}
          </span>
          <template
            v-else
          >
            <div class="char-sub__wrap">
              <span
                class="char__subtitle"
                v-for="(item,idx) in superHeroChar[item]"
                :key="idx"
              >
                {{ item }},
              </span>
            </div>
          </template>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: "hero-biography",
  props: {
    superHeroChar: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
.char-sub__wrap
  max-width: 500px
  width: 100%
</style>