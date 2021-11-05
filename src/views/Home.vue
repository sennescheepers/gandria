<template>
  <NavBar/>
  <LandingPage />
  <ProductsPage @openPopUp="openPopUp"/>
  <PurchasePopUp :visible="visible" @closePopUp="closePopUp"/>
  <ReviewsPage />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from '@/components/NavBar.vue';
import LandingPage from '@/components/LandingPage.vue';
import ProductsPage from '@/components/ProductsPage.vue';
import PurchasePopUp from '@/components/PurchasePopUp.vue';
import ReviewsPage from '@/components/ReviewsPage.vue';

@Options({
  components: {
    NavBar,
    LandingPage,
    ProductsPage,
    PurchasePopUp,
    ReviewsPage,
  },
  data() {
    return {
      visible: false,
      id: 0,
    };
  },
  methods: {
    openPopUp(id: number) {
      this.$store.commit('setProduct', id);
      this.visible = true;
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    },
    closePopUp() {
      this.visible = false;
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
