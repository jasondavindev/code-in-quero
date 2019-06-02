<template>
  <div></div>
</template>

<script>
import ApiService from '../services/api.service.js';
import Storage from '../services/storage.service';

export default {
  methods: {
    finalizar() {},

    async salvaCurso() {
      const escolaId = this.$store.getters.escola || Storage.get('parceiro');
      // console.log(this.$store.getters.cursos)

      try {
        this.$store.getters.cursos.forEach(async curso => {
          console.log(curso)
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