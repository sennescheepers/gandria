<template>
  <div class="container">
    <article id="form">
      <h1>Add Product</h1>

      <label for="id">Id</label><br />
      <input v-model="product._id" type="number" id="id" name="id" /><br />

      <label for="name">Name</label><br />
      <input v-model="product.name" type="text" id="name" name="name" /><br />

      <label for="price">Price</label><br />
      <input v-model="product.price" type="number" id="price" name="price" /><br />

      <label for="image">Image</label><br />
      <input v-model="product.image" type="text" id="image" name="image" /><br />

      <label for="qr">Qr</label><br />
      <input v-model="product.qr" type="text" id="qr" name="qr" /><br />

      <label for="url">Url</label><br />
      <input v-model="product.url" type="text" id="url" name="url" /><br />

      <span id="add" v-on:click="this.add()">Add <i class="fas fa-plus"></i></span>
    </article>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import axios, { AxiosError, AxiosResponse } from 'axios';

@Options({
  components: {},
  data() {
    return {
      product: {
        _id: 0,
        name: '',
        price: 0,
        image: '',
        qr: '',
        url: '',
      },
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
  },
  methods: {
    add() {
      axios.post(`${this.$store.state.BASE_URL}/product`, this.product, {
        headers: this.headers,
      })
        .then((response: AxiosResponse) => {
          alert(response.data.message);
          this.$router.push('/dashboard');
        })
        .catch((error: AxiosError) => {
          alert(error.response?.data.message);
        });
    },
  },
})
export default class AddProduct extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.container {
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  padding: 50px;
  left: 0;
  top: 0;
  background: $color-background-dark;
  color: $color-text-light;

  #form {
    box-sizing: border-box;

    width: 50%;

    input {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      box-sizing: border-box;
    }

    span {
      display: inline-block;
      padding: 10px 20px;
      background: $color-primary;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: $color-primary-dark;
      }

      i {
        margin-left: 5px;
      }
    }
  }
}
</style>
