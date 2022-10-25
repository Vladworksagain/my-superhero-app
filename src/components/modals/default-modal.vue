<template>
  <div class="default-modal">
    <div class="default-modal__content">
      <slot name="modal-error"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "default-modal"
}
</script>

<style scoped lang="sass">
.default-modal
  position: fixed
  top: 0
  right: 0
  left: 0
  bottom: 0
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  background-color: rgba(0, 0, 0, .6)
  z-index: 99999

  .default-modal__content
    max-width: 500px
    width: 100%
    background-color: $white
    padding: 15px
    display: flex
    align-items: center
    justify-content: center
    position: relative
    min-height: 200px
</style>