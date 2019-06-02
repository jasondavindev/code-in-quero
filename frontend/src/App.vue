<template>
  <div id="app">
    <b-container fluid>
      <img alt="Vue logo" src="./assets/logo.png">
      <Tela1></Tela1>
      <Tela2></Tela2>
      <Tela3></Tela3>
    </b-container>
  </div>
</template>

<script>
import Tela1 from './components/Tela1.vue';
import Tela2 from './components/Tela2.vue';
import Tela3 from './components/Tela3.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
Vue.use(BootstrapVue);

export default {
  name: 'app',
  components: {
    Tela1,
    Tela2,
    Tela3
  }
};
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