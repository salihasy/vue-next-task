<template>
  <Header/>
  <body><Table> </Table> </body>
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
  width: 100%;
  height: 100%;
  margin: 0;
}
header {
  width: 100%;
  height: 4vh;
  background: rgb(165, 206, 165);
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 2vh;
}
img {
  margin: 2vh;
  width: 10%;
}
</style>