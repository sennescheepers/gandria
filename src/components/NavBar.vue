<template>
  <nav id="navbar">
      <div class="container">
          <span id="logo">Gandria</span>
          <span class="current"><a v-on:click="scrollTo('landing-page')">HOME</a></span>
          <span><a v-on:click="scrollTo('watch-faces')" >WATCH FACES</a></span>
          <span><a v-on:click="scrollTo('reviews')" >REVIEWS</a></span>
          <span>ABOUT</span>
          <!-- <span><a>FAQ</a></span> -->
          <span id="hamburger" v-on:click="openMenu()"><i class="fas fa-bars"></i></span>
      </div>
  </nav>
  <section id="menu" :class="[menuOpen ? 'active' : '']">
    <span id="close"  v-on:click="closeMenu()"><i class="fas fa-times"></i></span>
    <span class="current" v-on:click="closeMenu(), scrollTo('landing-page')"><a>HOME</a></span>
    <span><a v-on:click="closeMenu(), scrollTo('watch-faces')">WATCH FACES</a></span>
    <span v-on:click="closeMenu(), scrollTo('reviews')">REVIEWS</span>
    <span v-on:click="closeMenu()">ABOUT</span>
    <!-- <span v-on:click="closeMenu()"><a>FAQ</a></span> -->
  </section>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.menuOpen = true;
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    },
    closeMenu() {
      this.menuOpen = false;
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    },
    scrollTo(id: string) {
      const res = document.getElementById(id)?.scrollIntoView();
    },
  },
  mounted() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0 && navbar) {
        navbar.className = 'opague';
      } else if (navbar) {
        navbar.className = '';
      }
    });
  },
})
export default class NavBar extends Vue {}
</script>

<style lang='scss' scoped>
@import '@/scss/variables.scss';

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  transition: .5s ease-out;
  z-index: +10;

  .container {
    width: 100%;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    span {
      padding: 10px 20px;
      display: none;
      color: $color-text-dark;
    }

    span#logo {
      display: inline-block;
      margin-right: auto;
      font-size: x-large;
      font-weight: $fw-medium;
    }

    span#hamburger {
      display: inline-block;
      cursor: pointer;
      font-size: larger;
    }
  }
}

#menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: +15;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 80%;
  background: $color-popup-background;
  transform: translateX(100%);
  transition: .5s;

  span {
    margin: 10px 30px;
    font-size: 28px;

    a {
      text-decoration: none;
      color: $color-text-dark;
    }
  }

  span.current a {
    font-weight: $fw-semi-bold;
  }

  span#close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
    margin: 0;
    font-size: x-large;
  }
}

#menu.active {
  transform: translateX(0);
}

@media (min-width: 700px) {
  #navbar {
    padding: 15px 0;

    .container {
      width: 90%;
      left: 5%;

      span {
        padding: 5px 10px;
        display: inline-block;

        a {
            text-decoration: none;
            color: $color-text-dark;
            cursor: pointer;
            transition: .1s ease-in-out;
        }

        a:hover {
            font-weight: $fw-semi-bold;
        }
      }

      span#logo {
        font-size: larger;
        font-weight: $fw-semi-bold;
        margin-right: auto;
      }

      span.current a {
        font-weight: $fw-semi-bold;
      }

      span#hamburger {
        display: none;
      }
    }
  }
  #menu {
    display: none;
  }
}

#navbar.opague {
    background: #fff;
}
</style>
