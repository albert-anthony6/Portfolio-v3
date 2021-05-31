<template>
  <div class="app">
    <Navigation />
    <Modal v-on:hideModal="hideModal" :status="status" v-if="showModal" />
    <router-view v-on:handleMessage="handleModal($event)" />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  data() {
    return {
      showModal: false,
      status: 'success',
    };
  },
  components: {
    Navigation,
    Modal,
  },
  methods: {
    hideModal() {
      this.showModal = false;
    },
    handleModal(status) {
      this.status = status;
      this.showModal = true;
    },
  },
};
</script>

<style>
@import './assets/themes/_themes.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
