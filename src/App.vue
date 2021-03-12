<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/all">All</router-link> |
      <router-link to="/add-new">AddNew kj</router-link> -->
      <Header></Header>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "@/style/main.scss";
body {
  margin: 0 !important;
  overflow-x: hidden;
  background-color: $background;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
