<template>
  <div id="events-container">
    <button id="sort-button" @click="sortByKey" v-if="this.eventList.length > 0"> {{tablekey}}'e göre sırala </button>
    <table>
    <tr>
      <th class="event-container" v-for="(event,i) in eventList" :key="i"> {{event.name}} 
        <router-link :to="{ path: '/event', query: {id: event.id} }">
            <button class="event-detail-button"> Detail </button>  
        </router-link>
      </th>
    </tr>
    </table>
  </div>
</template>
  
<script>
import {mapState} from "vuex";
export default {
  name: "Events",
  computed: 
  {
    ...mapState([
    'eventList'
  ]),
    tablekey() {
     return  Object.keys(this.eventList[0])[0]
  }
  },
    methods : {
    sortByKey() {
    this.$store.dispatch('sortByKey',
     { sortKey : this.tablekey})
    } 
  }
};
</script>
<style >
.event-container {
  display: flex;
  justify-content: space-between;
  gap: 100vh;
  padding-left: 2vh;
  padding-right: 2vh;
}

table {
  margin-top: 3vh ;
  font-family: Arial, Helvetica, sans-serif;
  border: 0.3vh solid rgb(55,107,73)
}

table th:nth-child(even){background-color: #6ec577;}

table th:hover {background-color: rgb(67, 139, 91);}

th {
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
}

.event-detail-button {
  border-radius: 0.5vh;
  border: none;
  font-size: 1.5vh;
}

#sort-button {
  margin: 1vh 15vh 0vh 0vh;
  align-self: flex-end;
}

</style>