<template>
  <div id="tela-3">
    <h2>Cadastro de Turmas - Tela 1</h2>
    <h3>Vamos agora cadastrar as suas turmas</h3>

    <div id="bloco-niveis" v-if="passo === 1">
      <div>
        <input type="radio" name="nivel" v-model="curso.nivel" value="basico" id="nivel-basico">
        <label for="nivel-basico">basico</label>
      </div>
      <div>
        <input
          type="radio"
          name="nivel"
          v-model="curso.nivel"
          value="intermediario"
          id="nivel-intermediario"
        >
        <label for="nivel-intermediario">intermediario</label>
      </div>
      <div>
        <input type="radio" name="nivel" v-model="curso.nivel" value="avancado" id="nivel-avancado">
        <label for="nivel-avancado">avancado</label>
      </div>
    </div>

    <div div="bloco-range-idade" v-if="passo === 2">
      <div>
        <input
          type="radio"
          name="range_idade"
          v-model="curso.range_idade"
          value="kids"
          id="range-idade-kids"
        >
        <label for="range-idade-kids">kids</label>
      </div>
      <div>
        <input
          type="radio"
          name="range_idade"
          v-model="curso.range_idade"
          value="intermediario"
          id="range-idade-teens"
        >
        <label for="range-idade-teens">teens</label>
      </div>
      <div>
        <input
          type="radio"
          name="range_idade"
          v-model="curso.range_idade"
          value="adults"
          id="range-idade-adults"
        >
        <label for="range-idade-adults">adults</label>
      </div>
    </div>

    <div id="bloco-adicionais" v-if="passo === 3">
      <div>
        <input v-model="curso.duracao" type="text" placeholder="Duração do Módulo">
      </div>
      <div>
        <input v-model="curso.numero_parcelas" type="text" placeholder="Número de Parcelas">
      </div>
      <button @click="finalizar">Pronto</button>
      <!-- <button @click="adicionarOutro">Adicionar outra oferta</button> -->
      <div>
        <span>Voce cadastrou {{ this.getLabelQuantTurmas() }}</span>
      </div>
      <div v-if="mensagemErro">
        <h2>Erro</h2>
        <p>{{ this.mensagemErro }}</p>
      </div>
    </div>
    <button v-if="passo > 1" @click="voltar">Voltar</button>
    <button @click="proximo">Proximo</button>
  </div>
</template>

<script>
export default {
  name: 'Tela3',
  data() {
    return {
      passo: 1,
      cursos: [],
      curso: {
        nivel: '',
        range_idade: '',
        duracao: '',
        numero_parcelas: ''
      },
      mensagemErro: ''
    };
  },
  methods: {
    proximo() {
      ++this.passo;
    },

    voltar() {
      --this.passo;
    },

    resetarCurso() {
      this.curso = {
        nivel: '',
        range_idade: '',
        duracao: '',
        numero_parcelas: ''
      };

      this.mensagemErro = '';
    },

    cursoCompleto() {
      const campos = Object.keys(this.curso);

      for (let campo of campos) {
        if (!this.curso[campo]) {
          this.mensagemErro = `campo ${campo} vazio`;
          return false;
        }
      }

      return true;
    },

    validarCurso() {
      return this.cursoCompleto();
    },

    adicionarCurso() {
      if (this.validarCurso()) {
        this.cursos.push(Object.assign({}, this.curso));
        this.resetarCurso();
      }
    },

    finalizar() {
      this.adicionarCurso();
    },

    getLabelQuantTurmas() {
      if (this.cursos.length === 0) {
        return 'nenhuma turma';
      }

      if (this.cursos.length === 1) {
        return '1 turma';
      }

      return `${this.cursos.length} turmas`;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>