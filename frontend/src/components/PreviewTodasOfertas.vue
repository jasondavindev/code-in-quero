<template>
  <div id="preview-cursos" class="container">
    <div id="header">
      <div id="breadcrumb">
        <p>/todas as turmas</p>
      </div>
    </div>
    <div class="cursos" v-for="curso in cursos">
      <CardPreview
        :nivel="curso.nivel"
        :duracao="curso.duracao"
        :desconto="curso.desconto"
        :mensalidade="curso.mensalidade"
        :nome="curso.range_idade"
				idioma="Inglês"
      ></CardPreview>
    </div>
    <div class="buttons">
      <button class="button-cta">Falar com meu Key Account</button>
    </div>
  </div>
</template>

<script>
import CardPreview from './CardPreview';

export default {
  components: {
    CardPreview
  },

  data() {
    return {
      cursos: []
    };
  },

  mounted() {
		this.cursos = this.$store.getters.cursos;
  }
};
</script>

<style lang="scss" scoped>
</style>