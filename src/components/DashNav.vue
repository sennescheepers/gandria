<template>
  <nav id="navbar">
      <span id="logo">Gandria</span>
      <span v-on:click="this.$emit('setComponent', 'dashboard')"
        :class="[component == 'dashboard' ? 'current' : '']">Dashboard</span>
      <span v-on:click="this.$emit('setComponent', 'sales')"
        :class="[component == 'sales' ? 'current' : '']">Sales</span>
      <span v-on:click="this.$emit('setComponent', 'products')"
        :class="[component == 'products' ? 'current' : '']">Products</span>
      <span v-on:click="this.$emit('setComponent', 'users')"
        :class="[component == 'users' ? 'current' : '']">Users</span>
      <span id="logout" v-on:click="logout()">Log out</span>
  </nav>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
  props: ['component'],
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    },
  },
})
export default class DashNav extends Vue {}
</script>

<style lang='scss' scoped>
@import '@/scss/variables.scss';

#navbar {
    height: 100%;
    width: 30%;
    min-width: 210px;
    max-width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: $color-nav-dark;
    color: $color-text-light;
    border-right: 2px solid #344E68;

    span {
        display: inline-block;
        margin: 10px 0 10px 50px;
        font-size: larger;
        cursor: pointer;
    }

    span#logo {
        font-size: x-large;
        font-weight: $fw-semi-bold;
        margin-bottom: 100px;
        cursor: auto;
    }

    span#logout {
        margin-top: auto;
        margin-bottom: 50px;
        font-size: large;
    }

    span.current {
        font-weight: $fw-semi-bold;
    }
}
</style>
