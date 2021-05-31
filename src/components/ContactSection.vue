<template>
  <section class="contact-form">
    <h1>Contact Info</h1>
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <p class="hidden">
        <label
          >Dont' fill this out if you're a human: <input name="bot-field"
        /></label>
      </p>
      <input type="text" name="name" id="name" placeholder="Name" />
      <input type="email" name="email" id="email" placeholder="Email" />
      <input type="text" name="subject" id="subject" placeholder="Subject" />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Message"
      />
      <button type="submit">Send Message</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
};
</script>

<style scoped lang="scss">
.contact-form {
  position: relative;
  background-color: $white;
  color: $primary-dark;
  box-shadow: 7px 3px 5px 4px $primary-dark;
  width: 75vw;
  margin: 0 auto;
  z-index: 2;
  border-radius: 7px;
  .hidden {
    display: none;
  }
  h1 {
    font-size: 4.4rem;
    font-weight: 500;
  }
}
</style>
