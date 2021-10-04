<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import '@/scss/variables.scss';

* {
  padding: 0;
  margin: 0;
  font-weight: $fw-regular;
  scroll-behavior: smooth;
}

body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Poppins', sans-serif;
  background: $color-background;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.container {
  position: relative;
  width: 90%;
  height: 100%;
  left: 5%;
}
</style>
