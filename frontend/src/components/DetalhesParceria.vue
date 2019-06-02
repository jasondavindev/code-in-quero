<template>
  <div id="detalhe-parcerias">
    <div id="passo-1">
      <b>A primeira mensalidade equivale a pré-matrícula do Quero Bolsa.</b>
      <p>Das 12 parcelas, a primeira é do Quero Bolsa e as outras 11 são da sua escola. Também recomendamos que a matrícula seja isenta</p>

      <div class="buttons">
        <button @click="discordar">Discordo</button>
        <button @click="concordar">Concordo</button>
      </div>

      <div id="mensagem-confirmacao" v-if="discorda">
        <div class="mensagem">
          <p>Estou ciente que cobrando mais de 11 parcelas gero uma barreira de compra para o aluno. O mesmo terá que pagar no mesmo mês mensalidade e pré-matrícula.</p>

          <div class="buttons">
            <button @click="alterarIsencoes">Alterar mesmo assim</button>
          </div>
        </div>

        <div id="isencoes" v-if="alterar">
          <h2>O que você deseja alterar?</h2>
          <div class="campos">
            <p>
              <input id="isencao-matricula" type="checkbox" v-model="isentarMatricula">
              <label for="isencao-matricula">Quero isentar a matrícula</label>
            </p>
            <p>
              <input id="isencao-mensalidade" type="checkbox" v-model="isentarMensalidade">
              <label for="isencao-mensalidade">Quero isentar a primeira mensalidade</label>
            </p>
          </div>

          <div class="buttons">
            <button @click="enviar">Finalizar e enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '../services/api.service';
import Storage from '../services/storage.service';

export default {
  data() {
    return {
      isentarMatricula: false,
      isentarMensalidade: false,
      discorda: false,
      alterar: false,
      enviou: false
    };
  },

  methods: {
    concordar() {
      this.isentarMatricula = true;
      this.enviar();
    },

    discordar() {
      this.discorda = true;
    },

    alterarIsencoes() {
      this.alterar = true;
    },

    getTipoParceria() {
      return this.isentarMensalidade ? 'qbmais' : 'qbsimples';
    },

    async enviar() {
      if (this.enviou) return;

      try {
        const { data } = await ApiService.post('/respostas', {
          status: 'finalizado',
          string: ''
        });

        this.enviou = true;

        const patch = await ApiService.patch(
          `/parceiros/${Storage.get('parceiro')}`,
          {
            respostaId: parseInt(data.id),
            tipo_parceria: this.getTipoParceria()
          }
        );

        this.$router.push({ name: 'turma-finaliza' });
      } catch (error) {}
    }
  }
};
</script>

<style lang="scss" scoped>
</style>