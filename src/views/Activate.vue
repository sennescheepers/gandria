<template>
<div id="container">
    <h3>This is your activation code</h3>
    <h1>{{ this.$store.getters.getUnlockCode || "NO UNLOCK CODE" }}</h1>
    <h3>How do I use this code?</h3>
    <p>
        First of all: write this code down somewhere, if you ever reinstall this watch face you'll
         need it again! To activate your watch face open up the ConnectIQ app and go to your devices
        , now press on {{ this.$store.getters.getProduct.name || "NO PRODUCT" }} and go to the
         settings, paste the code in the input field and save the settings. Your watch face should
          now be activated. A more detailed guide can be found in the <router-link to="/FAQ">
        FAQ</router-link>.
    </p>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Activate extends Vue {}
</script>

<style lang="scss" scoped>
#container {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 48pt;
        margin: 10px 0 40px 0;
    }

    h3 {
        opacity: .75;
    }

    p {
        width: 50%;
        text-align: center;
        margin-top: 10px;
        opacity: .6;
    }
}

@media (max-width: 1200px) {
    #container {
        h1 {
            font-size: 36pt;
        }
        p {
            width: 80%;
        }
    }
}

@media (max-width: 750px) {
    #container {
        h1 {
            font-size: 32pt;
        }
    }
}

@media (max-width: 450px) {
    #container {
        h1 {
            font-size: x-large;
        }

        h3 {
            font-size: large;
        }
    }
}
</style>
