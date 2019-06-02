<template>
  <div id="turma" class="container">
    <div id="header">
      <div id="button-top" class="voltar">
        <a @click="voltar" v-if="passo !== 1">← Voltar</a>
      </div>
      <div id="breadcrumb">
        <p>/cadastro de turma</p>
      </div>
    </div>
    <div id="passo-1" v-if="passo === 1">
      <h1 class="form-label">Qual é a faixa etária?</h1>
      <div class="campos">
        <div id="option1" class="option" v-bind:class="ativos_Range[0]">
          <input
            type="radio"
            name="range_idade"
            v-model="range_idade"
            value="kids"
            id="range-idade-kids"
            @click="selectRange(0)"
          >
          <label for="range-idade-kids">Kids</label>
        </div>
        <div id="option2" class="option" v-bind:class="ativos_Range[1]">
          <input
            type="radio"
            name="range_idade"
            v-model="range_idade"
            value="teens"
            id="range-idade-teens"
            @click="selectRange(1)"
          >
          <label for="range-idade-teens">Teens</label>
        </div>
        <div id="option3" class="option"  v-bind:class="ativos_Range[2]">
          <input
            type="radio"
            name="range_idade"
            v-model="range_idade"
            value="adults"
            id="range-idade-adults"
            @click="selectRange(2)"
          >
          <label for="range-idade-adults">Adults</label>
        </div>
      </div>
    </div>

    <div id="passo-2" v-if="passo === 2">
      <h1 class="form-label">Qual é o nível desta turma?</h1>
      <div class="campos">
        <div class="option" v-bind:class="ativos_Nivel[0]">
          <input
            type="radio"
            name="nivel"
            v-model="nivel"
            value="basico"
            id="nivel-basico"
            @click="selectNivel(0)"
          >
          <label for="nivel-basico">Básico</label>
        </div>
        <div class="option" v-bind:class="ativos_Nivel[1]">
          <input
            type="radio"
            name="nivel"
            v-model="nivel"
            value="intermediario"
            id="nivel-intermediario"
            @click="selectNivel(1)"
          >
          <label for="nivel-intermediario">Intermediário</label>
        </div>
        <div class="option" v-bind:class="ativos_Nivel[2]">
          <input
            type="radio"
            name="nivel"
            v-model="nivel"
            value="avancado"
            id="nivel-avancado"
            @click="selectNivel(2)"
          >
          <label for="nivel-avancado">Avançado</label>
        </div>
      </div>
    </div>

    <div id="passo-3" v-if="passo === 3">
      <h1 class="form-label">Qual é a duração de cada módulo, em meses?</h1>
      <div class="campos">
        <div class="row">
          <div class="col s6">
            <div class="option" v-bind:class="ativos_Duracao[0]">
              <input type="radio" name="duracao" v-model="duracao" value="3" id="duracao-3" @click="selectDuracao(0)">
              <label for="duracao-3">3</label>
            </div>
          </div>
          <div class="col s6">
            <div class="option" v-bind:class="ativos_Duracao[1]">
              <input type="radio" name="duracao" v-model="duracao" value="6" id="duracao-6" @click="selectDuracao(1)">
              <b-tooltip show target="duracao-6" title="DICA: Alunos preferem módulos mais curtos"></b-tooltip>
                <label for="duracao-6">6</label>
            </div>
          </div>
        </div>
        <div class="row">
        
          <div class="col s6">
            <div class="option" v-bind:class="ativos_Duracao[2]">
              <input type="radio" name="duracao" v-model="duracao" value="12" id="duracao-12" @click="selectDuracao(2)">
              <label for="duracao-12">12</label>
            </div>
          </div>
          <div class="col s6">
            <div class="option" v-bind:class="ativos_Duracao[3]">
            
              <input type="radio" name="duracao" v-model="duracao" value="24" id="duracao-24" @click="selectDuracao(3)">
              <label for="duracao-24">24</label>
            </div>
          </div>
        </div>
        <div class="row">

          <div class="col s6">
            <div class="option" v-bind:class="ativos_Duracao[4]">
              <input type="radio" name="duracao" v-model="duracao" value="30" id="duracao-30" @click="selectDuracao(4)">
              <label for="duracao-30">30</label>
            </div>

          </div>
          <div class="col s6">
            <div class="option" v-bind:class="ativos_Duracao[5]">
            

              <input type="radio" name="duracao" v-model="duracao" value="36" id="duracao-36" @click="selectDuracao(5)">
              <label for="duracao-36">36</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="passo-4" v-if="passo === 4">
      <h1 class="form-label">Quantas vagas essa turma oferece?</h1>
      <div class="campos">
        <div class="select">
          <select name="tipo_vaga" v-model="tipo_vaga">
            <option value="ilimitada">Ilimitada</option>
            <option value="limitada">Limitada</option>
          </select>
        </div>
        <div class="input" v-if="tipo_vaga === 'limitada'">
          <input type="text" name="vagas" v-model="vagas" placeholder="Insira a quantidade de vagas">
        </div>
      </div>
    </div>

    <div id="passo-5" v-if="passo === 5">
      <h1 class="form-label">Valor da mensalidade</h1>
      <div class="campos">
        <div class="field">
          <input type="text" name="mensalidade" v-model="mensalidade" placeholder="Insira o valor em R$">
        </div>
      </div>
    </div>

    <div id="passo-6" v-if="passo === 6">
      <h1 class="form-label">Pra fechar, qual será o desconto oferecido?</h1>
      <div class="campos">
        <div class="range">
          <input id="range-preco" type="range" name="desconto" v-model="desconto" min="20" max="100">
          <b-tooltip show target="range-preco" title="Este é o desconto ideal para a sua região"></b-tooltip>
        </div>
        <span class="label-desconto" :class="classDesconto">{{ this.desconto }}%</span>
      </div>

      <div id="preco-desconto" class="campos">
        <h2>Preço com desconto</h2>
        <p>R$ {{ precoDesconto }}</p>
      </div>
    </div>

    <div class="buttons">
      <div class="proximo">
        <button @click="proximo" class="button-cta button-next">Próximo</button>
      </div>
    </div>
    <div id="footer">
      <button class="button-footer"><i class="material-icons left">search</i>Pré-visualizar turma</button>
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
      passos: ['range_idade', 'nivel', 'duracao', 'vagas', 'mensalidade'],
      ativos_Range: ['','',''],
      ativos_Nivel: ['','',''],
      ativos_Duracao: ['','','','','','']
    };
  },

  methods: {
    selectRange: function(index) {
      this.ativos_Range = this.ativos_Range.map(el => '');
      this.ativos_Range[index] = 'option-selected';
    },
    selectNivel:function(index) {
      this.ativos_Nivel = this.ativos_Nivel.map(el => '');
      this.ativos_Nivel[index] = 'option-selected';
    },
    selectDuracao:function(index) {
      this.ativos_Duracao = this.ativos_Duracao.map(el => '');
      this.ativos_Duracao[index] = 'option-selected';
    },

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
      this.$router.push({ name: 'preview-unico' });
      // if (this.$store.getters.cursos.length === 1) {
      // 	this.$router.push({ name: 'turma-pos-1' });
      // } else {
      // 	this.$router.push({ name: 'turma-pos-2' });
      // }
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
    const cursos = this.$store.getters.cursos;

    if (cursos.length) {
      const curso = cursos[cursos.length - 1];
      this.range_idade = curso.range_idade;
      this.nivel = curso.nivel;
      this.duracao = curso.duracao;
      this.tipo_vaga = curso.tipo_vaga;
      this.vagas = curso.vagas;
      this.mensalidade = curso.mensalidade;
      this.desconto = curso.desconto;
      this.classDesconto = curso.classDesconto;
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