<template>
  <section id="blur" :class="[visible ? 'visible' : '']" v-on:click="close()">
      <article id="download" v-on:click.stop>
        <img :src="this.$store.getters.getProduct.image" :alt="this.product.name">
        <div class="horizontal">
            <h1>Install</h1>
            <img :src="this.product.qr" :alt="this.product.name"><br>
            <span>Scan the QR code with your phone to install this watch face.</span>
        </div>
        <span id="close-button" v-on:click="close()">
            <i class="fas fa-times"></i>
        </span>
      </article>
      <article id="purchase" v-on:click.stop v-if="product.price > 0.0">
        <h1>Purchase</h1>
        <span>Click the button below to unlock this watch face.</span>
        <router-link to="/checkout">Purchase</router-link>
      </article>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
  props: ['visible'],
  emits: ['closePopUp'],
  data() {
    return {
    };
  },
  methods: {
    close() {
      console.log('close');
      this.$emit('closePopUp');
    },
  },
  computed: {
    product() {
      return this.$store.getters.getProduct;
    },
  },
})
export default class PurchasePopUp extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
#blur {
    width: 100%;
    height: 100%;
    display: none;
    background: $color-blur;
    position: fixed;
    top: 0;
    left: 0;
    z-index: +20;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #download {
        background: $color-popup-background;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 20px;
        width: 25%;
        height: 40%;
        position: relative;
        border-radius: 5px;

        img {
            max-height: 80%;
        }

        .horizontal {
            height: 100%;
            max-height: 100%;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            box-sizing: border-box;
            margin-left: 25px;

            h1 {
                color: $color-text-dark;
                font-size: 36px;
            }

            img {
                max-height: 35%;
                position: relative;
                left: -15px;
                margin: 10px;
            }

            span {
                display: inline-block;
                color: $color-text-dark;
            }
        }

        #close-button {
            position: absolute;
            top: 15px;
            right: 15px;

            i {
                color: $color-text-dark;
                cursor: pointer;
                animation: .3s ease-in-out;
                font-size: 28px;
            }

            i:hover {
                color: #000;
            }
        }

    }

    #purchase {
        background: $color-popup-background;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 20px;
        width: 25%;
        position: relative;
        border-radius: 5px;
        margin-top: 20px;

        h1 {
            color: $color-text-dark;
            font-size: 36px;
        }

        span {
            color: $color-text-dark;
            max-width: 100%;
            margin: 10px 0;
        }

        a {
            text-decoration: none;
            color: $color-text-light;
            background: $color-primary;
            font-size: 20px;
            width: 100%;
            padding: 5px 0;
            text-align: center;
            border-radius: 5px;
            transition: .3s ease-in-out;
        }

        a:hover {
            background: $color-primary-dark;
        }
    }

}
#blur.visible {
    display: flex;
}
</style>
