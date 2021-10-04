<template>
  <div id='button' ref='paypal'></div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';

declare const window: any;

@Options({
  components: {},
  data() {
    return {
      loaded: false,
      paidFor: false,
    };
  },
  computed: {
    product() {
      const product = this.$store.getters.getProduct;
      return {
        price: product.price,
        description: product.name,
      };
    },
  },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AWhRz2J_88lgTCTLJnMq_OS9NvihJzn9vlsltQtep2IJGBMUVj1h3EWRvxriOTx1UwptzsSA95u2tkhW&currency=USD&enable-funding=credit';
    script.addEventListener('load', this.setLoaded);
    document.body.append(script);
  },
  methods: {
    setLoaded() {
      this.loaded = true;
      window.paypal
        .Buttons({
          style: {
            layout: 'horizontal',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
            tagline: false,
          },
          commit: true,
          createOrder: (data: any, actions: any) => actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price,
                },
              },
            ],
          }),
          onApprove: (data: any, actions: any) => actions.order.capture()
            .then((details: any) => {
              const unlockCode = {
                _id: details.id,
                id: details.id,
                watchFace: this.product.description.toLowerCase().replace(/\s+/g, ''),
                payerEmail: details.payer.email_address,
              };
              axios.post('http://localhost:4000/unlockCode/add', unlockCode)
                .then((response: any) => {
                  if (response.status === 200) {
                    this.$store.commit('setUnlockCode', unlockCode.id);
                    this.$router.push('/activate');
                  }
                })
                .catch((error: any) => {
                  console.log(error);
                });
            }),
        })
        .render(this.$refs.paypal);
    },
  },
})
export default class PaypalButton extends Vue {}
</script>

<style lang='scss' scoped>
#button {
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
