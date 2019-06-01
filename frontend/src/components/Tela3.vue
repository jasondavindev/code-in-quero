<template>
  <div id="tela-3">
		<h2>Cadastro de Turmas - Tela 1</h2>
    <h3>Vamos agora cadastrar as suas turma</h3>
    <div>
      <input v-model="turma.nivel" type="text" placeholder="Nível">
    </div>
		<div>
      <input v-model="turma.idade" type="text" placeholder="Duração do Módulo">
    </div>
		<div>
      <input v-model="turma.numero" type="text" placeholder="Número de Parcelas">
    </div>
    <div>
      <input v-model="turma.duracaomaterial" type="text" placeholder="Duração do Material">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tela3',
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