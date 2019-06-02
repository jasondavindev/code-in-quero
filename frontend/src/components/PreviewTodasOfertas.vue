<template>
  <div id="preview-cursos">
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
		console.log(this.cursos)
  }
};
</script>

<style lang="scss" scoped>
</style>