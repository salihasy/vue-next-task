<template>
  <div id="events-container">
    <button id="sort-button" v-if="this.eventList.length > 0"> {{tablekey}}'e göre sırala </button>
    <table>
    <tr>
      <th class="event-container" v-for="(event,i) in eventList" :key="i"> {{event.name}} 
          <button class="event-detail-button"> Detail </button>  
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

</style>