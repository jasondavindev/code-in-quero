<template>
  <div id="tela-1">
		<h2>Parceiro - Tela 1</h2>
    <div>
      <b-form-input v-model="parceiro.nome" type="text" placeholder="Qual o seu nome?"></b-form-input>
    </div>
		<div>
      <b-form-input v-model="parceiro.email" type="text" placeholder="Qual o seu e-mail?"></b-form-input>
    </div>
		<div>
      <b-form-input v-model="parceiro.telefone" type="text" placeholder="Qual o seu telefone?"></b-form-input>
    </div>

  </div>
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