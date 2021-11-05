<template>
  <section id="reviews">
    <div class="container">
      <h1>Reviews</h1>
      <section id="steps">
        <article class="step">
          <img src="/img/screenshots/review1.png" alt="review">
          <span class="title">Step 1</span>
          <p>Open the ConnectIQ app, and go to our watch face you want to give a review.</p>
        </article>
        <article class="step">
          <img src="/img/screenshots/review2.png" alt="review">
          <span class="title">Step 2</span>
          <p>Tap on the ‘Reviews’ section, and then tap on ‘Write a review’.</p>
        </article>
        <article class="step">
          <img src="/img/screenshots/review3.png" alt="review">
          <span class="title">Step 3</span>
          <p>
            Select a star rating and optionally write a review,
             then tap the ‘Send’ button. Thank you very much!
          </p>
      </article>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class ReviewsPage extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#reviews {
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      margin: 100px 0 30px 0;
      color: $color-text-dark;
    }

    #steps {
      display: flex;
      flex-direction: column;
      align-items: center;

      .step {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin-bottom: 50px;

        img {
          width: 50%;
        }

        span.title {
          margin: 10px 0;
          font-size: larger;
        }

        p {
          text-align: center;
        }
      }
    }
  }
}

@media (min-width: 800px) {
  #reviews {
    min-height: 100%;
    box-sizing: border-box;
    max-width: 100%;
    width: 100%;
    overflow: hidden;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      width: 70%;
      left: 15%;

      h1 {
        color: $color-text-dark;
        font-size: 32px;
        margin: 150px 0 40px 0;
      }

      #steps {
        .step {
          img {
            width: 70%;
          }
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  #reviews {
    .container {
      height: 100%;

      #steps {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;

        .step {
          width: 30%;
          margin: 0;

          img {
            width: 90%;
          }
        }
      }
    }
  }
}

@media (min-width: 1500px) {
  #reviews {
    .container {
      #steps {
        .step {
          width: 20%;
        }
      }
    }
  }
}
</style>
