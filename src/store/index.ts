import axios, { AxiosResponse } from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    product: {},
    unlockCode: '',
    products: [],
    BASE_URL: process.env.VUE_APP_BASE_URL || 'http://localhost:4000',
  },
  getters: {
    getProduct: (state) => state.product,
    getUnlockCode: (state) => state.unlockCode,
    getProducts: (state) => state.products,
  },
  mutations: {
    setProduct: (state, id) => {
      axios.get(`${state.BASE_URL}/product/${id}`)
        .then((response: AxiosResponse) => {
          if (response.status === 200) {
            state.product = response.data;
          }
        });
    },
    setUnlockCode: (state, code) => {
      state.unlockCode = code;
    },
    setProducts: (state) => {
      axios.get(`${state.BASE_URL}/product`)
        .then((response: AxiosResponse) => {
          state.products = response.data;
        });
    },
  },
  actions: {
  },
  modules: {
  },
});
