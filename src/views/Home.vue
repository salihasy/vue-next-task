<template>
  <div id="home-container">
        <Table/>
  </div>
</template>

<script>
import Table from "../components/Table.vue";
export default {
  name: "Home",
  components : {
      Table
  }
};
</script>

<style>

#home-container {
  width: 100vw;
  height: 100vh;
  background-color: #c7f3c7;
}


</style>
