<template>
  <div id="app" class="wrap">
    <template>
      <app-header
        v-if="$route.meta.defaultHeader"
      />
      <alternative-header
        v-else
      />
    </template>
    <router-view/>
    <default-modal
      v-if="modalIsOpen"
    >
      <template #modal-error>
        <button
          class="close-modal reset-btn"
          @click="closeModal"
        >
          <img src="@/assets/images/icon/clear-icon.svg" alt="">
        </button>
        <p class="default-modal__text">Sorry no result!</p>
      </template>
    </default-modal>
  </div>
</template>

<script>
import appHeader from '@/components/app-header'
import defaultModal from '@/components/modals/default-modal'
import alternativeHeader from "@/components/alternative-header";

export default {
  name: 'App',
  components: {
    alternativeHeader,
    defaultModal,
    appHeader
  },
  created() {
    if(this.$route.fullPath === '/') {
      this.$router.replace('/hero')
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('setModalIsOpen', false)
    }
  },
  computed: {
    modalIsOpen() {
      return this.$store.getters.modalIsOpen
    }
  },
}
</script>

<style lang="sass">
.wrap
  background-color: #96b1a9
  display: grid
  grid-auto-rows: auto 1fr auto
  min-height: 100vh
</style>
