<template>
  <div class="container">
    <section id="top">
      <h1>Products</h1>
      <span v-on:click="this.add()" id="add">Add <i class="fa fa-plus"></i></span>
    </section>
    <section id="list">
      <article
        class="product"
        v-for="p in this.products"
        v-bind:key="p._id"
      >
        <span class="name">{{ p.name }}</span>
        <span class="price">${{ p.price }}</span>
        <div class="actions">
          <span class="edit" v-on:click="this.edit(p._id)"><i class="fas fa-pencil"></i></span>
          <span class="remove" v-on:click="this.remove(p._id)"><i class="fas fa-times"></i></span>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import axios, { AxiosError, AxiosResponse } from 'axios';

@Options({
  components: {},
  mounted() {
    axios.get(`${this.$store.state.BASE_URL}/product`)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          this.products = response.data;
        }
      });
  },
  data() {
    return {
      products: [],
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
  },
  methods: {
    add() {
      this.$router.push('/add/product');
    },
    edit(id: number) {
      console.log(id);
    },
    remove(id: number) {
      if (window.confirm(`Do you really want to remove the watchface with id: ${id}`)) {
        axios.delete(`${this.$store.state.BASE_URL}/product/${id}`, {
          headers: this.headers,
        })
          .then((response: AxiosResponse) => {
            this.products = this.products.filter((p: any) => p._id !== id);
            alert(response.data.message);
          })
          .catch((error: AxiosError) => {
            alert(error.response?.data.message);
          });
      }
    },
  },
})
export default class Products extends Vue {}
</script>

<style lang='scss' scoped>
@import "@/scss/variables.scss";

.container {
  width: 90%;
  padding: 50px 0;
  height: calc(100% - 100px);
  left: 5%;
  overflow: hidden;

  #top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 36pt;
    }

    #add {
      display: inline-block;
      padding: 10px 20px;
      background: $color-primary;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        background: $color-primary-dark;
      }

      i {
        margin-left: 5px;
      }
    }
  }

  #list {
    width: 100%;
    height: calc(100% - 20px - 36pt - 50px);
    margin-top: 20px;
    overflow-y: scroll;

    .product {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid $color-card-background-dark;
      padding: 10px 0;
      position: relative;

      .price {
        display: inline-block;
        position: absolute;
        left: 50%;
      }

      .actions {
        font-size: 18px;
        margin-left: auto;
        margin-right: 15px;

        .edit {
          margin-right: 15px;
          cursor: pointer;

          i {
            transition: .3s ease-in-out;
          }

          &:hover i {
            color: $color-primary;
          }
        }

        .remove {
          cursor: pointer;

          i {
            transition: .3s ease-in-out;
          }

          &:hover i {
            color: red;
          }
        }
      }
    }
  }
}
</style>
