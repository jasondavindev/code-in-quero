<template>
  <div id="tela-2">
		<h2>Escola - Tela 2</h2>
    <div>
      <input v-model="escola.marca" type="text" placeholder="marca">
    </div>
		<div>
      <input v-model="escola.cidade" type="text" placeholder="cidade">
    </div>
		<div>
      <input v-model="escola.endereco" type="text" placeholder="Endereco">
    </div>
		<div>
      <input v-model="escola.telefone" type="text" placeholder="telefone">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tela2',
  data() {
    return {
      escola: {}
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