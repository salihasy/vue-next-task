<template>
  <div id="app-container">
  <Header> </Header>
  </div>
</template>

<script>
import Header from "../src/components/Header.vue"
export default {
  name: "App",
  components : {
    Header
  }
};
</script>
<style >
* {
  margin : 0;
  box-sizing:border-box;
}
#app-container {
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>