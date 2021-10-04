<template>
  <NavBar/>
  <LandingPage />
  <ProductsPage @openPopUp="openPopUp"/>
  <PurchasePopUp :visible="visible" @closePopUp="closePopUp"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LandingPage from '@/components/LandingPage.vue';
import ProductsPage from '@/components/ProductsPage.vue';
import PurchasePopUp from '@/components/PurchasePopUp.vue';

@Options({
  components: {
    LandingPage,
    ProductsPage,
    PurchasePopUp,
  },
  data() {
    return {
      visible: false,
      id: 0,
    };
  },
  methods: {
    openPopUp(id: number) {
      console.log('open');
      this.$store.commit('setProduct', id);
      this.visible = true;
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    },
    closePopUp() {
      console.log('ehehe');
      this.visible = false;
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
