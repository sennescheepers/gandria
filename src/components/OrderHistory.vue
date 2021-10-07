<template>
  <div id="history">
    <h1>Latest orders</h1>
    <div id="orders">
      <div v-for="d in data" v-bind:key="d._id" class="order">
      <span class="name">{{ d.watchFace }}</span>
      <span class="price">+ ${{ d.price }}</span><br>
      <span class="date">{{ new Date(d.date).toLocaleDateString('en-UK', this.options) }}</span>
    </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import axios, { AxiosError, AxiosResponse } from 'axios';

@Options({
  components: {},
  data() {
    return {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
      data: [],
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        minute: 'numeric',
        hour: 'numeric',
      },
    };
  },
  mounted() {
    axios.get('http://localhost:4000/unlockCode', {
      headers: this.headers,
    })
      .then((response: AxiosResponse) => {
        this.data = response.data.slice(0, 6);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  },
})
export default class StatCard extends Vue {}
</script>

<style lang='scss' scoped>
@import '@/scss/variables.scss';

#history {
  grid-area: history;
  background: $color-card-background-dark;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: $fw-semi-bold;
    font-size: 38px;
  }

  #orders {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .order {
      margin: 20px 0;

      .name {
        font-weight: $fw-semi-bold;
        float: left;
      }

      .price {
        font-weight: $fw-semi-bold;
        float: right;
      }
    }
  }
}
</style>
