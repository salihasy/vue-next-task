<template>
  <div id = "table-container">
  <Search id="search-component"> </Search>
  <Events id="events-component"> </Events>
  </div>
</template>

<script>
import Events from "../../src/components/Events.vue"
import Search from "../../src/components/Search.vue"
export default {
  name: "Table",
  components : {
    Search, Events
  }

};
</script>
<style>
</style>