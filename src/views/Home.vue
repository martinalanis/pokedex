<template>
  <div class="h-100">
    <Chat/>
  </div>
</template>

<script>
import Chat from '@/components/Chat'
import { PokeApi } from '@/api'

export default {
  name: 'Home',
  components: {
    Chat
  },
  data () {
    return {
      pokemonList: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      /**
       * Fetch first 10 names of pokemon repository
       */
      try {
        this.pokemonList = await PokeApi.list()
          .then(
            list => list.results.slice(0, 10)
              .map(pokemon => pokemon.name)
          )
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
