<template>
  <div class="card-preview">
    <div class="row">
      <div class="col s12">
        <img src="../assets/images/logo.png" alt="Logo" class="card-logo" />
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <ul class="collection with-header">
          <li class="collection-header"><h4>Nome: <strong>{{ nome }}</strong></h4></li>
          <li class="collection-item"><i class="material-icons">language</i><div>Idioma: <strong>{{ idioma }}</strong></div></li>
          <li class="collection-item"><i class="material-icons">school</i><div>Nível: <strong>{{ nivel }}</strong></div></li>
          <li class="collection-item"><i class="material-icons">schedule</i><div>Duração: <strong>{{ duracao }}</strong></div></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="desconto">
          <p class="card-infos-title">Desconto de</p>
          <span>{{ desconto }}%</span>
        </div>
      </div>
      <div class="col s6">
          <div class="mensalidade">
            <p class="card-infos-title">Mensalidade</p>
            <span>R$ {{ getMensalidade() }}</span>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="button-fake">
          Quero este curso
        </div>
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