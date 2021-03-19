<template>
  <div class="header relative">
    <div class="nav container h-100">
      <h2 class="brand">POKEDEX</h2>
      <nav>
        <router-link to="/">HOME</router-link>
        <router-link to="/about">ABOUT</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.brand {
  font-weight: 700;
}
.header {
  background: #FFF;
  box-shadow: $box-shadow;
  @media screen and ($tablet) {
    border-bottom: 1px solid rgba(0,0,0,0.15);
    box-shadow: none;
  }
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  .brand {
    display: inline-block;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 0.3rem 0.6rem;
    border-radius: 0 0 15px 15px;
    font-size: 1.2rem;
  }
  nav {
    a {
      display: inline-block;
      font-weight: 700;
      font-size: 1rem;
      height: 100%;
      color: #323132;
      text-decoration: none;
      padding: 0.3rem 0.6rem;
      &:hover, &.router-link-exact-active {
        color: #0b6767;
      }
    }
  }
}
</style>
