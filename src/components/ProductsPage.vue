<template>
  <NavBar/>
  <section id="watch-faces">
    <div class="container">
      <h1>Watch faces</h1>
      <section id="products">
        <ProductCard class="product" v-for="p in this.$store.getters.getProducts"
          v-bind:key="p.id" :product="p" @cardClick="openPopUp"/>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductCard from '@/components/ProductCard.vue';

@Options({
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  emits: ['openPopUp'],
  mounted() {
    this.$store.commit('setProducts');
    this.products = this.$store.getters.getProducts;
  },
  methods: {
    openPopUp(id: number) {
      this.$emit('openPopUp', id);
    },
  },
})
export default class ProductsPage extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#watch-faces {
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
    position: relative;
    width: 70%;
    left: 15%;

    h1 {
      color: $color-text-dark;
      font-size: 32px;
      margin: 150px 0 40px 0;
    }

    #products {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 100px;
      grid-row-gap: 75px;
      margin-bottom: 50px;
    }
  }
}
</style>
