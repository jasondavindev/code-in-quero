<template>
  <b-row id="tela-1">
    <b-col>
		  <h1>Dados da sua escola</h1>
      <b-form-row>
        <b-form-input v-model="parceiro.nome" type="text" placeholder="Qual o seu nome?"></b-form-input>
      </b-form-row>
      <b-form-row>
        <b-form-input v-model="parceiro.email" type="text" placeholder="Qual o seu e-mail?"></b-form-input>
      </b-form-row>
		  <b-form-row>
        <b-form-input v-model="parceiro.telefone" type="text" placeholder="Qual o seu telefone?"></b-form-input>
		  </b-form-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Tela1',
  data() {
    return {
      parceiro: {
        nome:""
      }
    };
	},
	methods: {
		teste() {
			
		}
	}
};
</script>