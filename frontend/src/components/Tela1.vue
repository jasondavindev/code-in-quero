<template>
  <div id="tela-1">
		<h2>Parceiro - Tela 1</h2>
    <div>
      <input v-model="parceiro.nome" type="text" placeholder="Nome">
    </div>
		<div>
      <input v-model="parceiro.email" type="text" placeholder="email">
    </div>
		<div>
      <input v-model="parceiro.telefone" type="text" placeholder="Numero telefone">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tela1',
  data() {
    return {
      parceiro: {}
    };
	},
	methods: {
		teste() {
			
		}
	}
};
</script>

<style lang="scss" scoped>
</style>