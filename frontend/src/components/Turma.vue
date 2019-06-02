<template>
  <div id="tela-turma">
    <div id="passo-1" v-if="passo === 1">
      <h1>Qual é a faixa etária?</h1>
      <div class="campos">
        <div class="option">
          <input
            type="radio"
            name="range_idade"
            v-model="range_idade"
            value="kids"
            id="range-idade-kids"
          >
          <label for="range-idade-kids">kids</label>
        </div>
        <div class="option">
          <input
            type="radio"
            name="range_idade"
            v-model="range_idade"
            value="teens"
            id="range-idade-teens"
          >
          <label for="range-idade-teens">teens</label>
        </div>
        <div class="option">
          <input
            type="radio"
            name="range_idade"
            v-model="range_idade"
            value="adults"
            id="range-idade-adults"
          >
          <label for="range-idade-adults">adults</label>
        </div>
      </div>
    </div>

    <div id="passo-2" v-if="passo === 2">
      <h1>Qual é o nível dessa turma?</h1>
      <div class="campos">
        <div class="option">
          <input type="radio" name="nivel" v-model="nivel" value="basico" id="nivel-basico">
          <label for="nivel-basico">basico</label>
        </div>
        <div class="option">
          <input
            type="radio"
            name="nivel"
            v-model="nivel"
            value="intermediario"
            id="nivel-intermediario"
          >
          <label for="nivel-intermediario">intermediario</label>
        </div>
        <div class="option">
          <input type="radio" name="nivel" v-model="nivel" value="avancado" id="nivel-avancado">
          <label for="nivel-avancado">avancado</label>
        </div>
      </div>
    </div>

    <div id="passo-3" v-if="passo === 3">
      <h1>Qual é a duração de cada módulo, em meses?</h1>
      <div class="campos">
        <div class="option">
          <input type="radio" name="duracao" v-model="duracao" value="3" id="duracao-3">
          <label for="duracao-3">3</label>

          <input type="radio" name="duracao" v-model="duracao" value="6" id="duracao-6">
          <label for="duracao-6">6</label>
        </div>
        <div class="option">
          <input type="radio" name="duracao" v-model="duracao" value="12" id="duracao-12">
          <label for="duracao-12">12</label>

          <input type="radio" name="duracao" v-model="duracao" value="24" id="duracao-24">
          <label for="duracao-24">24</label>
        </div>
        <div class="option">
          <input type="radio" name="duracao" v-model="duracao" value="30" id="duracao-30">
          <label for="duracao-30">30</label>

          <input type="radio" name="duracao" v-model="duracao" value="36" id="duracao-36">
          <label for="duracao-36">36</label>
        </div>
      </div>
    </div>

    <div id="passo-4" v-if="passo === 4">
      <h1>Quantas vagas essa turma oferece?</h1>
      <div class="campos">
        <div class="option">
          <select name="tipo_vaga" v-model="tipo_vaga">
            <option value="ilimitada">Ilimitada</option>
            <option value="limitada">Limitada</option>
          </select>
        </div>
        <div class="option" v-if="tipo_vaga === 'limitada'">
          <input type="text" name="vagas" v-model="vagas" placeholder="Quantidade">
        </div>
      </div>
    </div>

    <div id="passo-5" v-if="passo === 5">
      <h1>Valor da mensalidade</h1>
      <div class="campos">
        <div class="option">
          <input type="text" name="mensalidade" v-model="mensalidade" placeholder="R$">
        </div>
      </div>
    </div>

    <div id="passo-6" v-if="passo === 6">
      <h1>Valor da mensalidade</h1>
      <div class="campos">
        <div class="option">
          <input type="range" name="desconto" v-model="desconto" min="20" max="100">
        </div>
        <span class="label-desconto" :class="classDesconto">{{ this.desconto }}%</span>
      </div>

      <div class="campos">
        <span>Preço com desconto</span>
        <h2>R$ {{ precoDesconto }}</h2>
      </div>
    </div>

    <div class="buttons">
      <div class="proximo">
        <button @click="proximo">Próximo</button>
      </div>
      <div class="voltar">
        <button @click="voltar">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ADD_CURSO } from '../store/actions.type.js';
export default {
  name: 'Turma',
  data() {
    return {
      passo: 1,
      numero_passos: 6,

      range_idade: '',
      nivel: '',
      duracao: 0,
      tipo_vaga: 'ilimitada',
      vagas: 0,
      mensalidade: 100,
      desconto: 60,
      classDesconto: 'desconto-medio',

      cursos: [],
      passos: ['range_idade', 'nivel', 'duracao', 'vagas', 'mensalidade']
    };
  },

  methods: {
    validaPasso(valor) {
      return (
        this.passo + valor >= 1 && this.passo + valor <= this.numero_passos
      );
    },

    voltar() {
      this.validaPasso(-1) && --this.passo;
    },

    antesProximo() {
      if (!this[this.passos[this.passo - 1]]) {
        if (
          (this.passo === 4 && this.tipo_vaga === 'ilimitada') ||
          this.passo === 6
        ) {
          return true;
        }
        return false;
      }

      return true;
    },

    proximo() {
      if (!this.antesProximo()) return;
      this.passo === this.numero_passos && this.adicionarCurso();

      this.validaPasso(1) && ++this.passo;
    },

    resetarValores() {
      this.range_idade = '';
      this.nivel = '';
      this.duracao = 0;
      this.tipo_vaga = 'ilimitada';
      this.vagas = 0;
      this.mensalidade = 100;
      this.desconto = 60;
      this.classDesconto = 'desconto-medio';
    },

    adicionarCurso() {
			console.log(this.$store._actions)
      this.$store.dispatch(
        ADD_CURSO,
        Object.assign(
          {},
          {
            range_idade: this.range_idade,
            nivel: this.nivel,
            duracao: this.duracao,
            tipo_vaga: this.tipo_vaga,
            vagas: this.vagas,
            mensalidade: this.mensalidade,
            desconto: this.desconto,
            classDesconto: this.classDesconto
          }
        )
      );

      this.resetarValores();
      this.passo = 1;
    }
  },
  watch: {
    desconto(val) {
      if (this.desconto < 60) {
        this.classDesconto = 'desconto-baixo';
      } else if (this.desconto >= 60 && this.desconto <= 80) {
        this.classDesconto = 'desconto-medio';
      } else if (this.desconto > 80) {
        this.classDesconto = 'desconto-alto';
      }
    }
  },

  computed: {
    precoDesconto() {
      return (this.mensalidade - (this.desconto / 100) * this.mensalidade)
        .toFixed(2)
        .toString()
        .replace('.', ',');
    }
	},
	
	mounted() {
		if (this.$store.getters.cursos.length) {
			this.cursos = this.$store.getters.cursos;
		}
	}
};
</script>

<style lang="css" scoped>
select[name='tipo_vaga'] {
  display: block;
}

.label-desconto {
  font-size: 42px;
  font-weight: bold;
}
.desconto-baixo {
  color: var(--red);
}
.desconto-medio {
  color: var(--blue);
}
.desconto-alto {
  color: var(--green);
}
</style>