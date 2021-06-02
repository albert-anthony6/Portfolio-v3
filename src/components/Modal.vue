<template>
  <div class="modal-container">
    <div class="modal-background" @click="removeModal" />
    <div class="modal" v-if="status === 'success'">
      <i class="fa fa-times" @click="removeModal" />
      <h2>Success!</h2>
      <p>
        Thanks for reaching out! I've received your message and will get back to
        you as soon as I can. You can also reach me through my LinkedIn at
        <a
          href="https://www.linkedin.com/in/avaldes21/"
          target="_blank"
          class="anchor"
          >linkedin.com/in/avaldes21/</a
        >
        or my email
        <a href="mailto: valdesalbert21@gmail.com" class="anchor"
          >valdesalbert21@gmail.com</a
        >.
      </p>
    </div>
    <div class="modal" v-else-if="status === 'fail'">
      <i class="fa fa-times" @click="removeModal" />
      <h2>Oops!</h2>
      <p>
        Something went wrong while sending your message! You can also reach me
        through my LinkedIn at
        <a
          href="https://www.linkedin.com/in/avaldes21/"
          target="_blank"
          class="anchor"
          >linkedin.com/in/avaldes21/</a
        >
        or my email
        <a href="mailto: valdesalbert21@gmail.com" class="anchor"
          >valdesalbert21@gmail.com</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['status'],
  methods: {
    removeModal() {
      this.$emit('hideModal');
    },
  },
};
</script>

<style scoped lang="scss">
.modal-container {
  .modal-background {
    position: fixed;
    background-color: hsla(0, 0%, 20%, 0.584);
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 35%;
    padding: 6rem 3rem 10rem 3rem;
    transform: translate(-50%, -50%);
    z-index: 1001;
    background-color: $white;
    color: $primary-dark;
    text-align: center;
    h2 {
      font-size: 3rem;
      text-transform: uppercase;
    }
    p {
      font-size: 1.8rem;
      line-height: 1.6;
    }
    .anchor {
      color: $primary-dark;
      border-bottom: 2px solid $primary-dark;
    }
    .fa-times {
      background-color: $primary-dark;
      color: $white;
      font-size: 3rem;
      padding: 1rem 1.4rem;
      border-radius: 50%;
      position: absolute;
      top: 4%;
      right: 2%;
      cursor: pointer;
    }
  }
}
</style>
