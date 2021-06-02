<template>
  <section class="contact-form">
    <h1>Contact Info</h1>
    <div class="contact-container">
      <div class="contact-left">
        <p>
          Leave a message through this form or through my email. I'd love to get
          in touch!
        </p>
        <form
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          @submit.prevent="handleSubmit"
        >
          <p class="hidden">
            <label
              >Dont' fill this out if you're a human: <input name="bot-field"
            /></label>
          </p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            v-model="form.name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            v-model="form.email"
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            v-model="form.subject"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            v-model="form.message"
            required
          />
          <button type="submit" class="contact-btn">Send Message</button>
        </form>
      </div>
      <div class="contact-right">
        <h2>Email</h2>
        <p>valdesalbert21@gmail.com</p>
        <h2>Phone</h2>
        <p>901-265-2710</p>
        <h2>My Resumé</h2>
        <button class="download-resume">Download Resumé</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: this.encode({
          'form-name': 'contact',
          ...this.form,
        }),
      })
        .then(() => {
          this.form.name = '';
          this.form.email = '';
          this.form.subject = '';
          this.form.message = '';
          this.contactMessage('success');
        })
        .catch(() => {
          this.form.name = '';
          this.form.email = '';
          this.form.subject = '';
          this.form.message = '';
          this.contactMessage('fail');
        });
    },
    contactMessage(status) {
      this.$emit('contactMessage', status);
    },
  },
};
</script>

<style scoped lang="scss">
.contact-form {
  position: relative;
  background-color: $white;
  color: $primary-dark;
  box-shadow: 3px 3px 9px 8px #122846;
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
    padding: 1.5rem 0;
  }
  .contact-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 2% 2% 2%;
    text-align: left;
    .contact-left {
      width: 45%;
      .contact-btn {
        display: block;
        margin-top: 15px;
      }
    }
    .contact-right {
      width: 45%;
      h2 {
        &:not(:first-of-type) {
          margin-top: 1rem;
        }
      }
      .download-resume {
        background-color: $primary-dark;
        border: 1px solid $primary-dark;
        color: $white;
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
