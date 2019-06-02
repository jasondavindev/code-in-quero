<template>
  <div id="preview-oferta">
    <div id="header">
      <div id="breadcrumb">
        <p>/contato profissional</p>
      </div>
    </div>
    <CardPreview
      :idioma="idioma"
      :nivel="nivel"
      :duracao="duracao"
      :desconto="desconto"
      :mensalidade="mensalidade"
      :nome="range_idade"
    ></CardPreview>

    <div class="texto">
      <p>
        Assim que seu curso será visualizado.
        <b>As informações estão corretas?</b>
      </p>

      <div class="buttons">
        <button @click="voltar">Voltar</button>
        <button @click="confirmar">Confirmar</button>
      </div>
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
      idioma: '',
      nivel: '',
      duracao: '',
      desconto: '',
      mensalidade: '',
      range_idade: ''
    };
  },

  mounted() {
    const length = this.$store.getters.cursos.length;
    const curso = this.$store.getters.cursos[length - 1];

    this.idioma = 'Inglês';
    this.nivel = curso.nivel;
    this.duracao = curso.duracao;
    this.mensalidade = curso.mensalidade;
    this.desconto = curso.desconto;
    this.range_idade = curso.range_idade;
  },

  methods: {
    voltar() {
      this.$router.go(-1);
    },

    confirmar() {
      if (this.$store.getters.cursos.length === 1) {
        this.$router.push({ name: 'turma-pos-1' });
      } else {
        this.$router.push({ name: 'turma-pos-2' });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>