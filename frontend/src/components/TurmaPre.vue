<template>
  <div id="turma-pre" class="bkg-purple container">
    <h1><span class="text-highlight">Perfeito!</span> Cadastre agora mesmo sua primeira turma.</h1>
    <ul class="the-arrow-container">
      <li>
        <router-link :to="{name: 'turma'}" tag="a" class="animated-arrow">
          <span class='the-arrow -left'>
            <span class='shaft'></span>
          </span>
          <span class='main'>
            <span class='the-arrow -right'>
              <span class='shaft'></span>
            </span>
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
