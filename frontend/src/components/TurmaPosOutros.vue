<template>
  <div id="turma-pos" class="bkg-purple container">
    <h1>
      <span class="text-highlight">Parabéns!</span> você cadastrou mais uma turma!
    </h1>
		<p>
			Para ter ainda mais visualizações na sua turma, recomendamos o cadastro de ao menos três. O que deseja fazer?
		</p>
    <div class="buttons">
			<router-link :to="{ name: 'turma' }">
				<button class="button-cta button-cta-underline">Cadastrar nova turma</button>
			</router-link>
			<router-link :to="{ name: 'turma-finaliza' }">
				<button class="button-cta button-cta-white">Finalizar e enviar</button>
			</router-link>
		</div>
  </div>
</template>
<script>
export default {};
</script>
