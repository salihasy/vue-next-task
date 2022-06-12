<template>
  <div id="eventDetail-container">
    <img class="event-image" :src="this.event.images[0].url"/>
    <p class="event">
      <strong> Event Name : </strong> {{event.name}}
    </p>
    <p>
      <strong> Event startDateTime : </strong> {{event.dates.start.localDate}} - {{event.dates.start.localTime}}
    </p>

    <p v-if="event.priceRanges !== (null || undefined)">
      <strong> Price Ranges : </strong> {{event.priceRanges[0].min}} - {{event.priceRanges[0].max}} {{event.priceRanges[0].currency}}
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
  flex-direction: column;
  gap: 5vh;
  justify-content: center;
  align-items: center;
  border-bottom-color: black;
  background-color: rgb(110,197,119);
}

.event-image {
  height: 50vh;
  width: 100vh;
}
</style>