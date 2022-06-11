<template>
  <div>
    <table>
    <tr>
      <th v-for="(event,i) in eventList" :key="i"> {{event.name}} </th>
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
  ])
  }
};
</script>
<style >
</style>