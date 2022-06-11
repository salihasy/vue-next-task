<template>
  <div id="eventDetail-container">
    <p class="event-name">
      Event Name : {{this.event}}
    </p>
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

#eventDetail-container {
  width: 100vw;
  height: 100vh;
  background-color: #c7f3c7;
  display: flex;
  flex-direction: row;
  gap: 5vh;
  justify-content: center;
  align-items: center;
  border-bottom-color: black;
  background-color: rgb(110,197,119);
}
</style>