<template>
  <section class="why">
    <h1>Why work with me?</h1>
    <div class="cards-container">
      <div class="card">
        <i class="fa fa-hourglass-start" />
        <h2>Time Managment</h2>
        <p>
          I am able to manage tickets from their severity. I am able to track
          how much time is spent on minor tickets vs critical tickets which
          allows me to meet deadlines and have development ready in time for
          quality assurance.
        </p>
      </div>
      <div class="card">
        <i class="fa fa-search" />
        <h2>Attention to Detail</h2>
        <p>
          I am careful to get design details down correctly or revise until it's
          right. My goal is to have the site looking exactly like what the
          client is expecting while also having users get a great UI experience
          to keep them coming back.
        </p>
      </div>
      <div class="card">
        <i class="fa fa-leanpub" />
        <h2>Adaptable</h2>
        <p>
          Always excited to learn about new things. One of the most valuable
          things that I can provide to your company is the ability to be molded
          to your stack and become comfortable with the software that the team
          is comfortable using.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.why {
  position: relative;
  width: 100%;
  background-color: $primary-dark;
  background-image: url('../assets/images/hero_bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transform: skewY(-7deg);
  transform: skewY(-7deg);
  padding: 15rem 0 20rem 0;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00398390;
    background-image: linear-gradient(to bottom right, #00398390, #00000090);
    z-index: -1;
  }
  & > * {
    -webkit-transform: skewY(7deg);
    transform: skewY(7deg);
  }
  h1 {
    font-size: 4.4rem;
    margin-bottom: 40px;
  }
  .cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .card {
      // width: 15%;
      width: 285px;
      padding: 40px 15px;
      background-color: $primary;
      border-radius: 7px;
      box-shadow: 0 0 10px #000;
      transition: all 0.2s;
      &:nth-child(2) {
        margin: 0 50px;
      }
      &:hover {
        transform: translateY(-20px);
        box-shadow: 0 0 20px #000;
      }
      i {
        font-size: 5rem;
      }
      h2 {
        font-size: 2.4rem;
        margin: 15px 0;
        font-weight: 500;
        text-transform: uppercase;
      }
      p {
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 1.5;
      }
    }
  }
}
</style>
