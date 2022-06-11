<template>
    <div class="header">
        <img alt="Tarfin logo" src="https://tarfin.com/img/logo.svg" />
    </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style >
.header {
  background-color: lightgreen;
  height: 5vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1vh;
}

img {
  height: 100%;
  margin-left: 3vh;
}
</style>