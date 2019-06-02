<template>
  <div id="turma-finaliza" class="bkg-purple container">
    <h1>
      <span class="text-highlight">Enviamos</span> seu cadastro com sucesso!
    </h1>
    <ul class="the-arrow-container">
      <li></li>
    </ul>
    <div class="buttons">
      <div>
        <router-link :to="{ name: 'preview-geral' }">
          <button>Visualizar cursos</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '../services/api.service.js';
import Storage from '../services/storage.service';

export default {
  methods: {
    finalizar() {},

    async salvaCurso() {
      const escolaId = this.$store.getters.escola || Storage.get('parceiro');

      try {
        this.$store.getters.cursos.forEach(async curso => {
          const rsCurso = await ApiService.post('/cursos', {
            range_idade: curso.range_idade,
            nivel: curso.nivel,
            duracao: curso.duracao,
            escolaId
          });

          const rsOfertaEscola = await ApiService.post('/ofertasescola', {
            mensalidade_full: curso.mensalidade,
            cursoId: rsCurso.data.id
          });

          const rsOferta = await ApiService.post('/ofertas', {
            desconto_mensalidade: curso.desconto,
            vagas: curso.vagas,
            ofertaEscolaId: rsOfertaEscola.data.id
          });
        });
      } catch (error) {}
    }
  },

  // range_idade: this.range_idade,
  // nivel: this.nivel,
  // duracao: this.duracao,
  // tipo_vaga: this.tipo_vaga,
  // vagas: this.vagas,
  // mensalidade: this.mensalidade,
  // desconto: this.desconto,
  // classDesconto: this.classDesconto

  mounted() {
    this.salvaCurso();
  }
};
</script>

<style lang="scss" scoped>
</style>