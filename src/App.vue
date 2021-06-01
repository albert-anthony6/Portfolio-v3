<template>
  <div class="app">
    <Navigation />
    <Modal v-on:hideModal="hideModal" :status="status" v-if="showModal" />
    <Footer />
    <router-view v-on:handleMessage="handleModal($event)" />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Modal from './components/Modal.vue';
import Footer from './components/Footer.vue';

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
    Footer,
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
  position: relative;
  padding: 0 0 20rem 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
