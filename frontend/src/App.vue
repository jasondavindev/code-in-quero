<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import './assets/styles/style.css';
import 'materialize-css/dist/css/materialize.css';
import Vue from 'vue';
Vue.use(BootstrapVue);

export default {
  name: 'app',
  components: {}
};
</script>