<template>
  <div class="container">
    <section id="top">
      <h1>Users</h1>
      <span v-on:click="this.add()" id="add">Add <i class="fa fa-plus"></i></span>
    </section>
    <section id="list">
      <article
        class="user"
        v-for="u in this.users"
        v-bind:key="u._id"
      >
        <span class="email">{{ u.email }}</span>
        <span class="roles">${{ u.roles }}</span>
        <div class="actions">
          <!--<span class="edit" v-on:click="this.edit(u._id)"><i class="fas fa-pencil"></i>
          </span>-->
          <span class="remove" v-on:click="this.remove(u._id)"><i class="fas fa-times"></i></span>
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
    axios.get(`${this.$store.state.BASE_URL}/user`, {
      headers: this.headers,
    })
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          this.users = response.data;
        }
      });
  },
  data() {
    return {
      users: [],
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
  },
  methods: {
    add() {
      this.$router.push('/add/user');
    },
    edit(id: number) {
      console.log(id);
    },
    remove(id: number) {
      if (window.confirm(`Do you really want to remove the user with id: ${id}`)) {
        axios.delete(`${this.$store.state.BASE_URL}/user/${id}`, {
          headers: this.headers,
        })
          .then((response: AxiosResponse) => {
            this.products = this.products.filter((u: any) => u._id !== id);
            alert(response.data.message);
          })
          .catch((error: AxiosError) => {
            alert(error.response?.data.message);
          });
      }
    },
  },
})
export default class Users extends Vue {}
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

    .user {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid $color-card-background-dark;
      padding: 10px 0;
      position: relative;

      .roles {
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
