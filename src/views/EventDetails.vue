<template>
<div class="event-name">
  {{event.name}}
</div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "EventDetails",
  computed: 
  {
    ...mapState([
    'eventList'
  ])
  },
  beforeMount(){
    this.event=this.eventList.find(val=>val.id===this.$route.query.id)
  }
};
</script>
<style >
</style>