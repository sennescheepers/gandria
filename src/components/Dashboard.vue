<template>
  <div class="container">
    <StatCard :position="'stat1'" :metric="'revenue'" :time="7" />
    <StatCard :position="'stat2'" :metric="'orders'" :time="7" />
    <StatCard :position="'stat3'" :metric="'revenue'" :time="30" />
    <StatCard :position="'stat4'" :metric="'orders'" :time="30" />
    <OrderHistory />
    <DashGraph />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import StatCard from './StatCard.vue';
import OrderHistory from '@/components/OrderHistory.vue';
import DashGraph from '@/components/DashGraph.vue';

@Options({
  components: {
    StatCard,
    OrderHistory,
    DashGraph,
  },
})
export default class Dashboard extends Vue {}
</script>

<style lang='scss' scoped>
@import '@/scss/variables.scss';

.container {
    width: 90%;
    padding: 50px 0;
    height: calc(100% - 100px);
    left: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "stat1 stat2 stat3 stat4"
        "graph graph history history"
        "graph graph history history"
        "bar bar history history";
    grid-row-gap: 30px;
    grid-column-gap: 30px;
}
</style>
