<template>
  <div id="splash" class="bkg-purple">
    <div id="logo-container" class="valign-wrapper">
      <h1 class="logo">Selfdesk</h1>
    </div>
    <div id="powered-by">
      <h2>Powered By</h2>
      <img src="../assets/images/logo_quero-education_white.png" title="Quero Education" />
    </div>
  </div>
</template>
<script>
export default {
  created(){
    setTimeout( () => this.$router.push({
      path: '/inicio'
    }), 2000);
    
  }
}
</script>
<style lang="scss">
</style>