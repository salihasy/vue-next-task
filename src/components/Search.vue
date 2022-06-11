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
</style>