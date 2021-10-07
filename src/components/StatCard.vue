<template>
  <div id="card" :style="'grid-area:' + position">
    <span id="description">{{ metric }} last {{ time }} days</span>
    <span id="stat">{{ stat }}</span>
    <!--<span id="trend">+{{ trend }}%</span>-->
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import axios, { AxiosError, AxiosResponse } from 'axios';

@Options({
  components: {},
  props: ['position', 'metric', 'time'],
  data() {
    return {
      stat: 0,
      trend: 0,
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
  },
  methods: {
    getRevenue() {
      axios.get(`${this.$store.state.BASE_URL}/unlockCode`, {
        headers: this.headers,
      })
        .then((response: AxiosResponse) => {
          const { data } = response;
          const date = new Date();
          date.setDate(date.getDate() - this.time);
          for (let i = 0; i < data.length; i += 1) {
            if (data[i].date > date.getTime()) {
              this.stat += data[i].price;
            }
          }
          this.stat = `$${this.stat}`;
        })
        .catch((error: AxiosError) => {
          console.error(error);
        });
    },
    getOrders() {
      axios.get(`${this.$store.state.BASE_URL}/unlockCode`, {
        headers: this.headers,
      })
        .then((response: AxiosResponse) => {
          const { data } = response;
          const date = new Date();
          date.setDate(date.getDate() - this.time);
          for (let i = 0; i < data.length; i += 1) {
            if (data[i].date > date.getTime()) {
              this.stat += 1;
            }
          }
        })
        .catch((error: AxiosError) => {
          console.error(error);
        });
    },
  },
  mounted() {
    if (this.metric === 'revenue') this.getRevenue();
    else if (this.metric === 'orders') this.getOrders();
  },
})
export default class StatCard extends Vue {}
</script>

<style lang='scss' scoped>
@import '@/scss/variables.scss';

#card {
    padding: 20px;
    width: calc(100% - 40px);
    background: $color-card-background-dark;
    color: $color-text-light;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    #description {
        font-size: larger;
        text-transform: capitalize;
    }

    #stat {
        font-size: 64px;
        font-weight: $fw-semi-bold;
    }

    #trend {
        font-size: large;
    }
}
</style>
