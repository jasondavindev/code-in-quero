<template>
  <div id="escola-pre" class="bkg-purple container">
    <h1><span class="text-highlight">First things</span><br/> <span class="text-highlight">first:</span> conta pra gente como podemos te contactar.</h1>
    <ul class="the-arrow-container">
      <li>
        <router-link :to="{name: 'parceiro'}" tag="a" class="animated-arrow">
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
