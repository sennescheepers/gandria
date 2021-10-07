<template>
  <div id="dashboard">
    <DashNav :component="this.component" @setComponent="setComponent" />
    <div class="right">
        <Dashboard v-if="checkComponent('dashboard')" />
        <h1 v-if="checkComponent('sales')">Sales</h1>
        <h1 v-if="checkComponent('products')">Products</h1>
        <h1 v-if="checkComponent('users')">Users</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DashNav from '@/components/DashNav.vue';
import Dashboard from '@/components/Dashboard.vue';

@Options({
  components: {
    DashNav,
    Dashboard,
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
