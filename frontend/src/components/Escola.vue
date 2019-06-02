<template>
  <div id="escola" class="container">
    <div id="header">
      <div id="button-top" class="voltar">
        <a @click="voltar" v-if="passo !== 1">← Voltar</a>
      </div>
      <div id="breadcrumb">
        <p>/sobre a escola</p>
      </div>
    </div>
    <div id="passo-1" v-if="passo === 1">
      <h1 class="form-label">Qual é o nome da sua escola de idiomas?</h1>
      <div class="campos input-field">
        <input v-model="marca" type="text" placeholder="Digite o nome da sua escola" class="input-text">
      </div>
    </div>

    <div id="passo-2" v-if="passo === 2">
      <h1 class="form-label">Por favor, digite o endereço da sua escola</h1>
      <div class="campos">
        <input v-model="cidade" type="text" placeholder="Cidade" @blur="validarCidade">
        <input v-model="endereco" type="text" placeholder="Endereço">
      </div>
    </div>

    <div id="passo-3" v-if="passo === 3">
      <h1 class="form-label">Só falta agora o telefone da unidade</h1>
      <div class="campos">
        <input
          id="input-telefone"
          class="input-tooltip"
          v-model="telefone"
          type="text"
          placeholder="(12) 9999-9999"
          v-bind:class="{invalido: telefoneInvalido}"
          @keyup="validaTelefone"
        >
        <b-tooltip show target="input-telefone" title="DICA: Este é o telefone divulgado aos alunos"></b-tooltip>
      </div>
    </div>
    <div class="buttons">
      <div class="proximo">
        <button @click="proximo" class="button-cta button-next">Próximo</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import ApiService from '../services/api.service';
import { SET_ESCOLA } from '../store/actions.type';

export default {

  name: 'Escola',
  data() {
    return {
      numero_passos: 3,
      passo: 1,

      marca: '',
      cidade: '',
      endereco: '',
      telefone: '',

      telefoneInvalido: true,
      cidadeInvalida: true,
      enderecoInvalido: true
    };
  },

  methods: {
    validaPasso(valor) {
      return (
        this.passo + valor >= 1 && this.passo + valor <= this.numero_passos
      );
    },

    voltar() {
      this.validaPasso(-1) && --this.passo;
    },

    proximo() {
      this.passo === 3 && this.enviar();

      this.validaPasso(1) && ++this.passo;
    },

    validarMarca() {},

    validarCidade() {},

    validarEndereco() {},

    validarTelefone() {
      return /(^\d{2})(\d{4,5})(\d{4})$/gi.test(
        this.telefone.replace(/\D/g, '')
      );
    },

    validaTelefone() {
      if (this.validarTelefone()) {
        this.telefoneInvalido = false;
      } else {
        this.telefoneInvalido = true;
      }
    },

    async enviar() {
      if (this.telefoneInvalido) return;

      try {
        const result = await ApiService.post('/escolas', {
          nome: this.marca,
          cidade: this.cidade,
          endereco: this.endereco,
          numero_telefone: this.telefone,
          parceiroId: this.$store.getters.parceiro
        });

        this.$store.dispatch(SET_ESCOLA, result.data.id);
      } catch (error) {}
    }
  }
};

</script>

<style lang="css" scoped>
.invalido {
  background: #f00;
}

.valido {
  background-color: #00f;
}
</style>