<template>
  <div class="about container">
    <h1>¡Bienvenido a <strong>POKEDEX</strong>!</h1>
    <div class="about__info">
      <p>
        Hola en <strong class="bold">POKEDEX</strong> podrás encontrar informacion sobre, <strong><i>habilidades</i></strong>,<strong><i>estadísticas</i></strong>, <strong><i>movimientos</i></strong>, <strong><i>tipos</i></strong>, <strong><i>peso y altura</i></strong> de los siguientes Pokemons:
      </p>
      <ul class="about__pokemon_list">
        <li v-for="pokemon in availablePokemons" :key="pokemon">
          {{ pokemon }}
        </li>
      </ul>
      <p>¡Bienvenido! y que disfrutes conversando con <strong>HERMES</strong></p>
    </div>
  </div>
</template>

<script>
import { PokeApi } from '@/api'
export default {
  name: 'About',
  data () {
    return {
      availablePokemons: []
    }
  },
  async created () {
    this.availablePokemons = await PokeApi.list()
  }
}
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  padding-top: 2rem;
  .bold {
    color: #0b6767;
    font-size: 1.2rem;
  }
  &__info {
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    line-height: 1.5;
  }
  &__pokemon_list {
    list-style-type: none;
    margin-top: 2rem;
    margin-bottom: 2rem;
    li {
      text-transform: capitalize;
      padding: 0.5rem;
      &:not(:last-child) {
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
    }
    @media screen and ($tablet) {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and ($desktop) {
      width: 30%;
    }
  }
}
</style>
