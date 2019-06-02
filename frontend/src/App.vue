<template>
  <div id="app">
    <b-container fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import './assets/styles/style.css';
import Vue from 'vue';
Vue.use(BootstrapVue);

export default {
  name: 'app',
  components: {}
};
</script>