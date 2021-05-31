<template>
  <section class="contact">
    <h1>Contact Info</h1>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
};
</script>

<style scoped lang="scss">
.contact {
  position: relative;
  background-color: $white;
  color: $primary-dark;
  box-shadow: 7px 3px 5px 4px $primary-dark;
  width: 75vw;
  margin: 0 auto;
  z-index: 2;
  border-radius: 7px;
  h1 {
    font-size: 4.4rem;
    font-weight: 500;
  }
}
</style>
