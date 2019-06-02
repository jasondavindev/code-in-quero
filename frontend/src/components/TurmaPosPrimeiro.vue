<template>
  <div id="turma-pos" class="bkg-purple container">
    <h1>
      <span class="text-highlight">Parabéns!</span> você cadastrou sua primeira turma!
    </h1>
    <div class="buttons">
      <router-link :to="{ name: 'turma' }">
        <button>Cadastrar nova turma</button>
      </router-link>
      <router-link :to="{ name: 'turma-finaliza' }">
        <button>Finalizar e enviar</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
