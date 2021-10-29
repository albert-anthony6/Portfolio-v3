<template>
  <nav ref="navigation" class="navigation">
    <input @click="toggleShrink" ref="active" type="checkbox" id="active" />
    <div class="wrapper">
      <label for="active" class="menu-button">
        <span class="burger-icon" />
      </label>
      <ul class="menu">
        <li @click="hideMenu"><router-link to="/">Home</router-link></li>
        <li @click="hideMenu">
          <router-link to="/projects">Projects</router-link>
        </li>
        <li @click="hideMenu">
          <router-link to="/about">About 24G</router-link>
        </li>
        <li @click="hideMenu"><a href="#">Resume</a></li>
        <li @click="hideMenu"><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    toggleShrink() {
      if (this.$refs.active.checked) {
        this.$refs.navigation.classList.remove('shrink');
        this.$refs.navigation.classList.add('unshrink');
      } else {
        this.$refs.navigation.classList.remove('unshrink');
        this.$refs.navigation.classList.add('shrink');
      }
    },
    hideMenu() {
      this.$refs.active.checked = false;
      this.toggleShrink();
    },
  },
};
</script>

<style scoped lang="scss">
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  clip-path: circle(100px at calc(100% - 86px) 74px);
  z-index: 999;
  #active {
    display: none;
  }
  #active:checked ~ .wrapper {
    clip-path: circle(75%);
    background-image: linear-gradient(
      to bottom right,
      $bg-linear-1,
      $bg-linear-2
    );
  }
  #active:not(:checked) ~ .wrapper .menu {
    opacity: 0;
  }
  #active:checked ~ .wrapper .menu-button {
    background-color: $white;
    .burger-icon {
      background-color: transparent;
      &::before,
      &::after {
        top: 0;
        width: 100%;
        background-color: $primary-dark;
      }
      &::before {
        transform: rotate(40deg);
      }
      &::after {
        transform: rotate(-40deg);
      }
    }
  }
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    clip-path: circle(100px at calc(100% - 86px) 74px);
    transition: all 0.3s ease-in;
    z-index: 999;
    .menu-button {
      position: absolute;
      top: 5%;
      right: 3%;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background-color: $primary;
      cursor: pointer;
      &:hover {
        .burger-icon {
          &::before,
          &::after {
            width: 50%;
          }
        }
      }
      .burger-icon {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 55%;
        height: 3px;
        margin-left: 0.5px;
        border-radius: 7px;
        background-color: $white;
        transition: all 0.2s ease-in-out;
        &::before,
        &::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          background-color: inherit;
          border-radius: 7px;
          transition: all 0.2s ease-in-out;
        }
        &::before {
          top: -8px;
          left: 0;
        }
        &::after {
          top: 8px;
          right: 0;
        }
      }
    }
    .menu {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      li {
        margin-bottom: 15px;
      }
      a {
        font-size: 4.2rem;
        font-weight: 500;
        color: $white;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;
        &:hover {
          border-bottom: 2px solid $white;
        }
      }
    }
  }
}
.shrink {
  clip-path: circle(100px at calc(100% - 86px) 74px);
}
.unshrink {
  clip-path: none;
}
</style>
