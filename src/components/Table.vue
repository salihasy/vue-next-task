<template>
  <div id = "table-container">
  <Search id="search-component"> </Search>
  <Events id="events-component"> </Events>
  <Pagination/>
  </div>
</template>

<script>
import Events from "../../src/components/Events.vue"
import Search from "../../src/components/Search.vue"
import Pagination from '../components/Pagination.vue';
export default {
  name: "Table",
  components : {
    Search, Events,Pagination
  }

};
</script>
<style>
#search-component {
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  gap: 5vh;
  justify-content: center;
  align-items: center;
  border-bottom-color: black;
  background-color: rgb(110,197,119);
}

#events-component {
  width: 100%;
  background-color: #c7f3c7;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>