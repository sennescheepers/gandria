<template>
    <article id="product">
        <div id="card" v-on:click="this.$emit('cardClick', product._id)">
            <img :src="product.image" :alt="product.name">
        </div>
        <span id="name">{{ product.name }}</span><br>
        <span id="price">{{ (product.price === 0) ? 'Free' : '$' + product.price }}</span>
    </article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
  props: ['product'],
  emits: ['cardClick'],
  data() {
    return {
      products: [],
    };
  },
})
export default class ProductCard extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#product {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: fit-content;
    margin-bottom: 50px;

    #card {
        background: $color-card-background;
        padding: 50px;
        cursor: pointer;
        border-radius: 15px;
        transition: .3s ease-in-out;

        img {
            width: 100%;
        }
    }

    #card:hover {
        transform: scale(1.01);
        //box-shadow: 0px 0px 15px 1px $color-dropshadow;
    }

    span {
        color: $color-text-dark;
        text-align: center;
    }

    #name {
        font-size: larger;
        margin: 20px 0 10px 0;
    }
}
</style>
