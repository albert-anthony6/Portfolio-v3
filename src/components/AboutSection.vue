<template>
  <section class="about-section">
    <div class="about-left">
      <p class="about-me">About me</p>
      <span class="bio-container">
        <p class="bio">
          I am a <strong>passionate</strong> frontend web developer that has
          grown and learned a lot about <strong>programming</strong>,
          <strong>the web</strong>, and
          <strong>general best practices</strong> from working full-time at an
          agency based in Michigan called
          <a href="https://24g.com" target="_blank" class="link">24G</a>. I
          enjoy learning new things and building great relationships with my
          team; all while doing my best to satisfy the clients and the company!
        </p>
        <div class="logos">
          <img
            class="react-logo"
            src="../assets/icons/react.svg"
            alt="React logo."
          />
          <img
            class="vue-logo"
            src="../assets/images/vue.png"
            alt="Vue logo."
          />
        </div>
      </span>
    </div>
    <div class="about-right">
      <p class="skills-tools">Skills/Tools</p>
      <div class="skills-container">
        <div class="skills">
          <p>Programming Skills</p>
          <ul>
            <li>&check; Semantic HTML5</li>
            <li>&check; Responsive CSS3</li>
            <li>&check; JavaScript</li>
            <li>&check; sass</li>
            <li>&check; git</li>
            <li>&check; Vue</li>
            <li>&check; Vuex</li>
            <li>&check; Vue Router</li>
            <li>&check; React/React Hooks</li>
            <li>&check; React Router</li>
            <li>&check; Redux</li>
            <li>&check; Axios</li>
            <li>&check; NPM</li>
          </ul>
        </div>
        <div class="tools">
          <p>Teamwork Tools</p>
          <ul>
            <li>&check; GitHub</li>
            <li>&check; Bitbucket</li>
            <li>&check; Slack</li>
            <li>&check; Jira</li>
            <li>&check; Adobe XD</li>
            <li>&check; Figma</li>
            <li>&check; Airbnb Style Guide</li>
            <li>&check; Communication</li>
            <li>&check; 24G</li>
            <li>&check; Google</li>
            <li>&check; Stack Overflow</li>
            <li>&check; Documentation</li>
            <li>&check; Problem Solver</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped lang="scss">
.about-section {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 75vw;
  height: 100%;
  margin: -5% auto 100px auto;
  z-index: 3;
  box-shadow: 10px 5px 5px $primary-dark;
  background-color: $white;
  border-radius: 7px;
  @include mdh {
    flex-direction: column;
    box-shadow: 0px 0px 9px 8px $primary-dark;
  }
  .about-left {
    text-align: left;
    background-color: $primary;
    width: 40%;
    padding: 20px 2%;
    border-radius: 7px;
    @include mdh {
      width: 100%;
      border-end-start-radius: 0;
      border-end-end-radius: 0;
      padding: 4%;
      .bio-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        @include tab {
          align-items: center;
        }
        .logos {
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          .react-logo {
            margin-top: -1.5rem;
          }
          .vue-logo {
            margin-top: 1.5rem;
          }
        }
        @include sm {
          display: block;
          .logos {
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            .react-logo {
              margin-top: 0;
            }
            .vue-logo {
              margin-top: 0;
            }
          }
        }
      }
    }
    @include sm {
      text-align: center;
    }
    .about-me {
      font-size: 2.3rem;
    }
    .bio {
      font-size: 1.6rem;
      padding: 1rem 0;
    }
    .logos {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .vue-logo {
        width: 11.5vmax;
        animation: moveVue 2s infinite linear;
        filter: drop-shadow(0 0.5rem 0.5rem hsl(101, 96%, 20%));
      }
      .react-logo {
        width: 11.5vmax;
        animation: rotateReact 15s infinite linear;
        filter: drop-shadow(0 0 0.75rem $primary-light);
      }
    }
  }
  .about-right {
    width: 60%;
    background-color: $white;
    border-radius: 7px;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    color: $primary-dark;
    padding: 20px 2%;
    @include mdh {
      width: 100%;
      border-end-start-radius: 7px;
    }
    .skills-tools {
      font-size: 2.3rem;
      font-weight: 500;
    }
    .skills-container {
      display: flex;
      justify-content: space-around;
      @include sm-tab {
        flex-direction: column-reverse;
      }
      p {
        font-size: 2.3rem;
        font-weight: 500;
        border-bottom: 2px solid $primary-dark;
        padding: 0 5px 0 5px;
        margin-bottom: 10px;
        @include mdh {
          display: inline-block;
          width: auto;
        }
      }
      @include mdh {
        .skills,
        .tools {
          margin: 0 auto;
          p {
            padding-top: 10px;
          }
        }
      }
      ul {
        text-align: left;
      }
    }
  }
}
@keyframes moveVue {
  from {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes rotateReact {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
