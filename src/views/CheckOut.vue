<template>
  <div class="container">
    <article id="checkout">
      <h1>Unlock your watch face</h1>
      <span>Purchase summary</span>
      <table>
        <tr>
          <td>{{ this.product.name }}</td>
          <td>${{ this.product.price }}</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>${{ this.product.price }}</strong></td>
        </tr>
      </table>
      <PaypalButton />
    </article>
    <span id="warning">Check if your watch is compatible before paying!</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PaypalButton from '@/components/PayPalButton.vue';

@Options({
  components: {
    PaypalButton,
  },
  computed: {
    product() {
      return this.$store.getters.getProduct;
    },
  },
})
export default class CheckOut extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.container {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #checkout {
    width: 40%;
    padding: 20px;
    background: #efefef;
    border-radius: 5px;
    max-width: 750px;

    h1 {
      font-size: xx-large;
      color: #525252;
      margin-bottom: 10px;
    }

    table {
      background: #fff;
      width: 100%;
      margin: 15px 0;
      border: 1px solid #bebebe;
      border-spacing: 0;

      td {
        padding: 5px 10px;
        text-align: start;
      }

      tr:first-child td {
        border-bottom: 1px solid #bebebe;
      }

      tr td:last-child {
        text-align: end;
      }
    }
  }

  span#warning {
    color: #a7a7a7;
    margin-top: 5px;
    width: 80%;
    text-align: center;
  }

  strong {
    font-weight: $fw-semi-bold;
  }
}

@media (max-width: 1200px) {
  .container {
    #checkout {
      width: 80%;
    }
  }
}

@media (max-width: 700px) {
  .container {
    #checkout {
      width: 90%;
    }
  }
}
</style>
