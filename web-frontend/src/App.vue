<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Navigation msg="hello world from gh-pages and gh-actions !"/>
  <About/>
</template>

<script>
import Navigation from './components/Navigation.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    About
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
