<template>
  <div>
    <input type="text" id="search-input" v-model="key">  
    <button> Search </button>
  </div>
</template>

<script>
export default {
  name: "Search",
    data() {
    return {
      key : this.key
    }
  }
};
</script>
<style >
</style>