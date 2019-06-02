<template>
  <div id="preview-oferta" class="container">
    <div id="header">
      <div id="breadcrumb">
        <p>/visualização da turma</p>
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

    <div class="card-disclaimer">
      <p>Assim que seu curso será visualizado.<br />
        <strong>As informações estão corretas?</strong>
      </p>
    </div>

    <div class="row">
      <div class="col s6">
        <button @click="voltar" class="button-cta button-grid button-grid-back">Voltar</button>
      </div>

      <div class="col s6">
        <button @click="confirmar" class="button-cta button-grid">Confirmar</button>
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