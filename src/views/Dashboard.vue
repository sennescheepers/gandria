<template>
  <div id="dashboard">
    <DashNav :component="this.component" @setComponent="setComponent" />
    <div class="right">
        <Dashboard v-if="checkComponent('dashboard')" />
        <Sales v-if="checkComponent('sales')" />
        <Products v-if="checkComponent('products')" />
        <Users v-if="checkComponent('users')" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DashNav from '@/components/DashNav.vue';
import Dashboard from '@/components/Dashboard.vue';
import Products from '@/components/Products.vue';
import Users from '@/components/Users.vue';
import Sales from '@/components/Sales.vue';

@Options({
  components: {
    DashNav,
    Dashboard,
    Products,
    Users,
    Sales,
  },
  data() {
    return {
      component: 'dashboard',
    };
  },
  methods: {
    setComponent(component: string) {
      this.component = component;
    },
    checkComponent(component: string) {
      return this.component === component;
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#dashboard {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: $color-background-dark;
    display: flex;
    flex-direction: row;

    .right {
        flex-grow: 1;
        left: 0;
        color: $color-text-light;
    }
}
</style>
