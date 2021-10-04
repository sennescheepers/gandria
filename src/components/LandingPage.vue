<template>
  <NavBar />
  <section id="landing-page">
    <div class="container">
      <h1>Welcome</h1>
      <span>We design and build great watch faces for your Garmin watch.</span
      ><br />
      <a href="#watch-faces" class="desktop">Discover</a>
      <a href="#watch-faces" class="mobile"
        >Watch Faces <i class="fas fa-angle-down"></i
      ></a>
    </div>
    <div id="images">
      <img id="image1" src="@/assets/FR945LTE.png" alt="FR945LTE" />
      <img id="image2" src="@/assets/FR55.png" alt="FR55" />
      <img id="image3" src="@/assets/FR745.png" alt="FR">
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from '@/components/NavBar.vue';

@Options({
  components: {
    NavBar,
  },
})
export default class LandingPage extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

#landing-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .container {
    width: 100%;
    height: 40%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 50px;
      margin-bottom: 20px;
    }

    span,
    a.desktop {
      display: none;
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 5px 10px;
      font-size: larger;
      text-decoration: none;
      background: $color-primary;
      color: $color-text-light;
      font-size: medium;
      border-radius: 5px;
      transition: 0.3s ease-in-out;

      i {
        margin-left: 10px;
      }
    }

    a:hover {
      background-color: $color-primary-dark;
    }
  }

  #images {
    height: calc(60% - 30px);
    margin-bottom: 30px;
    max-width: 80%;
    position: relative;

    img {
      height: auto;
      max-height: 100%;
      max-width: 100%;
    }

    #image1 {
      display: none;
    }
    #image3 {
      display: none;
    }
  }
}

@media (min-width: 900px) {
  #landing-page {
    .container {
      h1 {
        font-size: 60px;
      }

      span {
        display: inline-block;
        margin-bottom: 30px;
        font-size: 22px;
      }

      a {
        padding: 10px 30px;
      }

    }

    #images {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;

      img#image1 {
        display: inline-block;
        position: relative;
        max-width: 35%;
        right: -10%;
      }

      img#image2 {
        z-index: +1;
        max-width: 40%;
      }

      img#image3 {
        display: inline-block;
        position: relative;
        max-width: 35%;
        left: -10%;
      }
    }
  }
}

@media (min-width: 1200px) {
  #landing-page {
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;

    .container {
      display: flex;
      width: 90%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: relative;

      h1 {
        color: $color-text-dark;
        font-size: 96px;
        margin: 0;
      }

      span {
        color: $color-text-dark;
        font-size: 36px;
        width: 42%;
        display: inline-block;
        margin: 0 0 30px 0;
      }

      a.mobile {
        display: none;
      }

      a.desktop {
        display: inline-block;
        padding: 5px 70px;
        font-size: larger;
        text-decoration: none;
        background: $color-primary;
        color: $color-text-light;
        border-radius: 5px;
        font-size: 32px;
        transition: 0.3s ease-in-out;
      }

      a:hover {
        background-color: $color-primary-dark;
      }
    }

    #images {
      position: absolute;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 90%;
      overflow: hidden;
      right: 0;
      bottom: 0;
      margin: 0;
      pointer-events: none;

      img {
        position: absolute;
        transform: scale(1.35);
      }

      img#image1 {
        position: absolute;
        bottom: 40px;
        right: calc(5% + 400px);
        display: none;
      }

      img#image2 {
        position: absolute;
        bottom: 40px;
        right: calc(5% * 1.35);
        display: inline-block;
      }

      img#image3 {
        display: none;
      }
    }
  }
}
@media (min-width: 1650px) {
  #landing-page {
    #images {
      img#image1 {
        display: inline-block;
      }
    }
  }
}
</style>
