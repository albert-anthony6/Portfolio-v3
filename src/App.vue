<template>
  <div class="app">
    <!-- <Navigation /> -->
    <router-view />
  </div>
</template>

<script>
// import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    // Navigation,
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
