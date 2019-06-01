<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Tela1></Tela1>
    <Tela2></Tela2>
  </div>
</template>

<script>
import Tela1 from './components/Tela1.vue'
import Tela2 from './components/Tela2.vue'

export default {
  name: 'app',
  components: {
    Tela1,
    Tela2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
