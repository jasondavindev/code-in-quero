<template>
  <div id="parceiro" class="container">
    <div id="header">
      <div id="button-top" class="voltar">
        <a @click="voltar" v-if="passo !== 1">← Voltar</a>
      </div>
      <div id="breadcrumb">
        <p>/contato profissional</p>
      </div>
    </div>
    <div id="passo-1" v-if="passo === 1">
      <h1 class="form-label">Qual é o seu <br/> e-mail de contato na escola?</h1>
      <div class="campos">
        <input
          v-model="email"
          type="text"
          placeholder="Digite o seu melhor e-mail"
          v-bind:class="{invalido: emailInvalido}"
          @keyup="validaEmail"
        >
      </div>
    </div>

    <div id="passo-2" v-if="passo === 2">
      <h1 class="form-label">E o seu nome completo?</h1>
      <div class="campos">
        <input v-model="nome" type="text" placeholder="Nome">
      </div>
    </div>

    <div id="passo-3" v-if="passo === 3">
      <h1 class="form-label">Para finalizar, qual é o seu telefone de contato?</h1>
      <div class="campos">
        <input
          v-model="telefone"
          type="text"
          placeholder="(12) 9999-9999"
          v-bind:class="{invalido: telefoneInvalido}"
          @keyup="validaTelefone"
        >
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
import { SET_ESCOLA, SET_PARCEIRO } from '../store/actions.type';

export default {
  name: 'Escola',
  data() {
    return {
      numero_passos: 3,
      passo: 1,

      email: '',
      nome: '',
      telefone: '',

      telefoneInvalido: true,
      emailInvalido: true
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

    emailValido() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(this.email);
    },

    telefoneValido() {
      return /(^\d{2})(\d{4,5})(\d{4})$/gi.test(
        this.telefone.replace(/\D/g, '')
      );
    },

    validaEmail() {
      if (this.emailValido()) {
        this.emailInvalido = false;
      } else {
        this.emailInvalido = true;
      }
    },

    validaTelefone() {
      if (this.telefoneValido()) {
        this.telefoneInvalido = false;
      } else {
        this.telefoneInvalido = true;
      }
    },

    async enviar() {
      if (this.emailInvalido || this.telefoneInvalido) return;

      try {
        const result = await ApiService.post('/parceiros', {
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
          tipo_parceria: 'qbmais'
        });

        this.$store.dispatch(SET_PARCEIRO, result.data.id);
        this.$router.push({ name: 'escola-pre' });
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