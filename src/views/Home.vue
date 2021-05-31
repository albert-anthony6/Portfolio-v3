<template>
  <main class="home">
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
    <AboutSection />
    <ProjectsSection />
    <WhySection />
    <ContactSection />
  </main>
</template>

<script>
import AboutSection from '../components/AboutSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import WhySection from '../components/WhySection.vue';
import ContactSection from '../components/ContactSection.vue';

export default {
  name: 'Home',
  components: {
    AboutSection,
    ProjectsSection,
    WhySection,
    ContactSection,
  },
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
    background-image: url('../assets/images/hero_bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;
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
      margin: auto 0;
      z-index: 2;
      @include mdh {
        text-align: center;
        z-index: 999;
      }
      .fa-envelope,
      .fa-linkedin,
      .fa-github {
        background-color: $primary;
        font-size: 2.4rem;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        color: #fff;
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
        @include xxl {
          font-size: 4rem;
        }
      }
      h2 {
        font-weight: 300;
        line-height: 1;
        @include xl {
          font-size: 3rem;
        }
      }
      h1 {
        font-size: 7.2rem;
        margin-top: -20px;
        margin-bottom: -20px;
        @include xxl {
          font-size: 6rem;
        }
        @include xl {
          font-size: 5rem;
          margin-bottom: -12px;
        }
      }
    }
    .hero-right {
      position: relative;
      margin-bottom: 5%;
      z-index: 2;
      @include mdh {
        position: absolute;
        bottom: 0;
        right: 10%;
        margin-bottom: 0;
      }
      @include tab {
        right: 50%;
        transform: translateX(50%);
        opacity: 0.7;
        filter: contrast(80%);
      }
      &:hover p {
        padding: 5%;
        opacity: 1;
      }
      p {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #ffffff73;
        color: #000;
        padding: 0px;
        border-radius: 50%;
        font-weight: 700;
        opacity: 0;
        cursor: pointer;
        transition: all 0.4s ease;
        @include mdh {
          display: none;
        }
        &:hover {
          background-color: #fff;
        }
      }
      .eyes {
        display: flex;
        position: absolute;
        top: 48%;
        left: 50%;
        width: 50%;
        height: 6%;
        transform: translate(-50%, -50%);
        @include mdh {
          display: none;
        }
        .eye {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: #fff;
          display: inline-block;
          margin: 10px;
          border-radius: 50%;
          .ball {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 27%;
            height: 52%;
            background-color: #000;
            border-radius: 50%;
            border: 5px solid #333;
          }
        }
      }
      img {
        width: 35vmin;
        @include tab {
          width: 35vmax;
        }
      }
    }
  }
}
</style>
