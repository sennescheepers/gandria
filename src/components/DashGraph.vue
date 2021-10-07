<template>
  <div id="card">
    <h1>Graph</h1>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import axios, { AxiosError, AxiosResponse } from 'axios';

@Options({
  components: {},
  props: ['metric', 'time'],
  data() {
    return {
      stat: [],
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
  },
  mounted() {
    axios.get(`${this.$store.state.BASE_URL}/unlockCode`, {
      headers: this.headers,
    })
      .then((response: AxiosResponse) => {
        this.stat = response.data.map((data: any) => ({
          price: data.price,
        }));
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  },
})
export default class DashGraph extends Vue {}
</script>

<style lang='scss' scoped>
@import '@/scss/variables.scss';

#card {
    grid-area: graph;
    padding: 20px;
    width: calc(100% - 40px);
    background: $color-card-background-dark;
    color: $color-text-light;
    border-radius: 15px;
}
</style>
