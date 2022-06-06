<template>
  <header> <img alt="Tarfin logo" src="https://tarfin.com/img/logo.svg" /> </header>
  <body><Table> </Table> </body>
</template>

<script>
export default {
  name: "App",
};
</script>
<style >
* {
  width: 100%;
  height: 100%;
  margin: 0;
}
header {
  width: 100%;
  height: 4vh;
  background: rgb(165, 206, 165);
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 2vh;
}
img {
  margin: 2vh;
  width: 10%;
}
</style>