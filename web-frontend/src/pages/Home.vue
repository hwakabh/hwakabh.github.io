<script setup>
import { ref } from 'vue'
import VueWriter from 'vue-writer'

import SocialLink from '../components/SocialLink.vue'

const words = ref([
  "Welcome!",
  "ようこそ！",
  "欢迎！",
  "환영합니다！",
  "Bienvenue!",
  "Benvenuto!",
  "Willkommen!",
  "¡Bienvenido!",
  "Bem-vindo!",
  "Ласкаво просимо!",
  "ยินดีต้อนรับ!",
  "Nau mai!",
  "ברוכים הבאים!",
])
</script>

<template>

  <VueWriter
    class="top-message"
    :array="words"
    :delay="1000"
    :type-speed="80"
    :erase-speed="80"
    >
  </VueWriter>

  <section id="intro" class="wrapper style1 fullscreen fade-up">
    <div class="inner">
      <h1 class="top-message">Hi, there!</h1>
      <p>Just another fine responsive site template designed by <a href="http://html5up.net">HTML5 UP</a><br />
      and released for free under the <a href="http://html5up.net/license">Creative Commons</a>.</p>
      <SocialLink />
      <br>
      <ul class="actions">
        <!-- <li><a href="/about" class="button scrolly">Learn more</a></li> -->
        <li><router-link to="/about" class="button scrolly">Learn more</router-link></li>
      </ul>
    </div>
  </section>

</template>

<style scoped>
.top-message {
  font-size: 40pt;
}
</style>
