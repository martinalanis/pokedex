<template>
  <div id="app" class="h-screen app">
    <Header/>
    <div class="w-100 main_content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
</style>
