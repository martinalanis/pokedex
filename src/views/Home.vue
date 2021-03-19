<template>
  <div class="home container h-100">
    <Chat/>
  </div>
</template>

<script>
import Chat from '@/components/Chat'

export default {
  name: 'Home',
  components: {
    Chat
  },
  data () {
    return {
      pokemonList: []
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  @media screen and ($tablet) {
    padding: 1rem 0;
  }
}
</style>
