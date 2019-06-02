<template>
  <div id="inicio" class="container">
    <div id="inicio-icon">
      <img src="../assets/images/icon_inicio.png" title="Selfdesk" />
    </div>
    <h1>Bem-vindo ao Selfdesk</h1>

    <p>Aqui você cadastra e precifica seus cursos de forma simples, fácil e rápida.</p>

    <router-link :to="{name: 'escola'}" tag="button" class="button-cta">Vamos começar!</router-link>

  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
</style>