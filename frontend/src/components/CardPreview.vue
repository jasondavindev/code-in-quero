<template>
  <div class="card-preview">
    <p>
      Nome:
      <strong>{{ nome }}</strong>
    </p>
    <p>
      Idioma:
      <strong>{{ idioma }}</strong>
    </p>
    <p>
      Nível:
      <strong>{{ nivel }}</strong>
    </p>
    <p>
      Duração:
      <strong>{{ duracao }}</strong>
    </p>
    <div class="precos">
      <div class="desconto">
        <p>Desconto de</p>
        <span>{{ desconto }}%</span>
      </div>
      <div class="mensalidade">
        <p>Mensalidade</p>
        <span>R$ {{ getMensalidade() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: ['idioma', 'nivel', 'duracao', 'desconto', 'mensalidade', 'nome'],
  methods: {
    getMensalidade() {
      return (this.mensalidade - (this.mensalidade * this.desconto) / 100)
        .toFixed(2)
        .toString()
        .replace('.', ',');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>