<template>
  <div>
    <input type="text" id="search-input" v-model="key">  
    <button id="search-button" @click="getEvents"> Search </button>
  </div>
</template>

<script>
export default {
  name: "Search",
    data() {
    return {
      key : this.key
    }
  },
    methods : {
    getEvents() {
        if (this.key !== "" && this.key !== undefined) {
        this.$store.dispatch('getEvents', {
        key: this.key,
        page: 1
        })
      }
    }
  }
};
</script>
<style >


#search-input {
  background-color: rgb(49,168,75);
  width: 30vh;
  height: 5%;
  border: none;
  border-radius: 1vh;
  border-bottom: 0.2vh solid rgba(0, 0, 0, 0.3);
  padding: 2vh;
}
#search-button {
  background: #fff;
  border: none;
  text-align:left;
  cursor: pointer;
}

input[type=text]::placeholder {
  font: 1.5vh arial;
  color: rgb(79,82,84);
}

</style>