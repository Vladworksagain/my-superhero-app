<template>
  <div class="connections__wrap">
    <div
      class="hero-connections__inner"
      v-for="item in Object.keys(superHeroChar)"
      :key="item.id"
    >
      <template
        v-if="item !== 'response' && item !== 'id' && item !== 'name'"
      >
        <span class="hero-connections__title">
          {{ item }}
        </span>
        <p class="hero-connections__descr">
          {{ superHeroChar[item] !== '-' ? superHeroChar[item] : 'It is unknown' }}
        </p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero-connections",
  props: {
    superHeroChar: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
.connections__wrap

  .hero-connections__inner
    display: flex
    flex-direction: column

    &:not(&:first-of-type, &:nth-of-type(2), &:nth-of-type(3))
      margin-bottom: 15px

    .hero-connections__title
      font-size: 20px
      text-transform: uppercase
      color: brown
      margin-bottom: 5px
      display: flex
      align-items: center

      &:before
        content: ''
        width: 10px
        height: 10px
        display: inline-block
        background-color: $white
        border-radius: 50%
        margin-right: 5px

    .hero-connections__descr
      font-size: 18px
      color: orange
</style>