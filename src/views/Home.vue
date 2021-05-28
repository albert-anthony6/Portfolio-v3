<template>
  <div class="home">
    <div @mousemove="moveEyes" class="hero-section">
      <div class="hero-left">
        <p><span class="hello">Hello</span>, I'm</p>
        <h1>Albert Valdes</h1>
        <h2>Frontend Web Developer</h2>
        <p><span>This is my portfolio</span>.</p>
        <a href="mailto: valdesalbert21@gmail.com"
          ><i class="fa fa-envelope"
        /></a>
        <a href="https://www.linkedin.com/in/avaldes21/" target="_blank"
          ><i class="fa fa-linkedin"
        /></a>
        <a href="https://github.com/albert-anthony6" target="_blank"
          ><i class="fa fa-github"
        /></a>
      </div>
      <div class="hero-right">
        <p>Hire Albert?</p>
        <div class="eyes">
          <div class="eye">
            <div ref="ball1" class="ball" />
          </div>
          <div class="eye">
            <div ref="ball2" class="ball" />
          </div>
        </div>
        <img src="../assets/icons/alien_silhouette_v2.svg" alt="Alien." />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    moveEyes(event) {
      const x = `${(event.clientX * 100) / window.innerWidth}%`;
      const y = `${(event.clientY * 100) / window.innerHeight}%`;
      // For eyeball 1
      this.$refs.ball1.style.left = x;
      this.$refs.ball1.style.top = y;
      this.$refs.ball1.style.transform = `transform(-${x}, -${y})`;
      // For eyeball 2
      this.$refs.ball2.style.left = x;
      this.$refs.ball2.style.top = y;
      this.$refs.ball2.style.transform = `transform(-${x}, -${y})`;
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  .hero-section {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    height: 62vh;
    padding: 0 10%;
    background-image: url('../assets/images/hero_bg2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 7px;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #00000081;
      border-radius: 7px;
      z-index: 1;
    }
    .hero-left {
      text-align: left;
      margin-bottom: 10%;
      z-index: 2;
      .fa-envelope,
      .fa-linkedin,
      .fa-github {
        background-color: $primary;
        font-size: 2.4rem;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
      }
      .fa-linkedin,
      .fa-github {
        padding: 10px 12px;
        margin-left: 5px;
      }
      span {
        font-family: $pattaya;
        font-size: 3.5rem;
        color: $primary;
      }
      p,
      .hello,
      h2 {
        font-size: 5.2rem;
      }
      h2 {
        font-weight: 300;
      }
      h1 {
        font-size: 7.2rem;
        margin-top: -20px;
        margin-bottom: -20px;
      }
    }
    .hero-right {
      position: relative;
      z-index: 2;
      &:hover p {
        padding: 20px;
        opacity: 1;
      }
      p {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 0.452);
        color: #000;
        padding: 0px;
        border-radius: 50%;
        font-weight: 700;
        opacity: 0;
        cursor: pointer;
        transition: all 0.4s ease;
        &:hover {
          background-color: #fff;
        }
      }
      .eyes {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .eye {
          position: relative;
          width: 60px;
          height: 30px;
          background-color: #fff;
          display: inline-block;
          margin: 10px;
          border-radius: 50%;
          .ball {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background-color: #000;
            border-radius: 50%;
            border: 5px solid #333;
          }
        }
      }
      img {
        width: 35vmin;
      }
    }
  }
}
</style>
