<template>
  <div>
    <p>
      <router-link to="/">go to home</router-link>
    </p>
    <p>
      <router-link to="/example">go to example</router-link>
    </p>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  mounted() {
    console.info("app");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
