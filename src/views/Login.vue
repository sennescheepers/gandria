<template>
  <div class="container">
      <article id="login">
        <h1>Log in</h1>
        <span id="error">{{ errorMessage }}</span><br>
        <label for="email" >Email</label><br>
        <input type="email" name="email" id="email-input" v-model="email"><br>
        <label for="password">Password</label><br>
        <input type="password" name="password" id="password-input" v-model="password"><br>
        <button id="login-button" v-on:click="login()">Log in</button>
      </article>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios, { AxiosError, AxiosResponse } from 'axios';

@Options({
  components: {
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    login() {
      axios.post(`${this.$store.state.BASE_URL}/user/login`, {
        email: this.email,
        password: this.password,
      })
        .then((response: AxiosResponse) => {
          if (response.data.ok) {
            localStorage.setItem('token', response.data.token);
            this.$router.push('/dashboard');
          }
        })
        .catch((error: AxiosError) => {
          this.errorMessage = error.response?.data.message;
        });
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.container {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  #login {
    padding: 20px;
    background: $color-popup-background;
    border-radius: 5px;
    width: calc(90% - 40px);

    #error {
      color: #a51010;
    }

    input {
      padding: 5px;
      margin: 5px 0 10px 0;
      border: none;
      border-radius: 5px;
      background: $color-card-background;
      width: 100%;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      padding: 5px;
      border-radius: 5px;
      border: none;
      color: $color-text-light;
      background: $color-primary;
      transition: .3s ease-in-out;
      cursor: pointer;
    }

    button:hover {
      background: $color-primary-dark;
    }
  }
}

@media (min-width: 600px) {
  .container {
    #login {
      width: 70%;
    }
  }
}

@media (min-width: 800px) {
  .container {
    #login {
      width: 100%;
      max-width: 400px;
    }
  }
}
</style>
