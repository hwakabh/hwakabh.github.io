<script setup>
// import { ref } from 'vue'
// import VueWriter from 'vue-writer'
import SocialLink from '../components/SocialLink.vue'

// const words = ref([
//   "Welcome!",
//   "ようこそ！",
//   "欢迎！",
//   "환영합니다！",
//   "Bienvenue!",
//   "Benvenuto!",
//   "Willkommen!",
//   "¡Bienvenido!",
//   "Bem-vindo!",
//   "Ласкаво просимо!",
//   "ยินดีต้อนรับ!",
//   "Nau mai!",
//   "ברוכים הבאים!",
// ])
</script>

<template>

  <!-- <VueWriter
    class="top-message"
    :array="words"
    :delay="1000"
    :type-speed="80"
    :erase-speed="80"
    >
  </VueWriter> -->

  <section id="intro" class="wrapper style1 fullscreen fade-up">
    <div class="inner">
      <h1 class="top-message">Hi, there!</h1>
      <p>
        Whether it is good or bad with your decisions, the results can be known only afterwards, <br />
        the sky is the limit for your creativities !
      </p>
      <SocialLink />
      <br>
      <ul class="actions">
        <li><router-link to="/about" class="button scrolly">About me</router-link></li>
      </ul>
    </div>
  </section>

</template>

<style scoped>
.top-message {
  font-size: 40pt;
}
</style>
