<template>
  <div id="eventDetail-container">
    <p class="event-name">
      {{event.name}}
    </p>
      <img width="200" :src="this.event.images[0].url"/>
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
    if(this.eventList.length>0){
     this.event=this.eventList.find(val=>val.id===this.$route.query.id)
     localStorage.setItem("eventDetail",JSON.stringify(this.event))
    }
    else{
      this.event=JSON.parse(localStorage.getItem("eventDetail"))
    }
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