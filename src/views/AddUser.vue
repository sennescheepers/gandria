<template>
  <div class="container">
    <article id="form">
      <h1>Add User</h1>

      <label for="email">Email</label><br />
      <input v-model="user.email" type="email" id="email" name="email" /><br />

      <label for="name">Password</label><br />
      <input v-model="user.password" type="text" id="password" name="password" /><br />

      <label for="roles">Roles</label><br />
      <input v-model="user.rolesString" type="text" id="roles" name="roles" /><br />

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
      user: {
        email: '',
        password: '',
        rolesString: '',
        roles: [],
      },
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
  },
  methods: {
    add() {
      this.user.roles = this.user.rolesString.split(',');
      axios.post(`${this.$store.state.BASE_URL}/user`, {
        email: this.user.email,
        password: this.user.password,
        roles: this.user.roles,
      }, {
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
export default class AddUser extends Vue {}
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
