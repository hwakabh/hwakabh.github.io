<script setup>
import { ref } from 'vue'
import VueWriter from 'vue-writer'

import HelloWorld from '../components/HelloWorld.vue'
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
  <!-- <HelloWorld msg="Hi, there!" />

  <VueWriter
    class="top-message"
    :array="words"
    :delay="1000"
    :type-speed="80"
    :erase-speed="80"
     >
  </VueWriter> -->


    <!-- Intro -->
    <section id="intro" class="wrapper style1 fullscreen fade-up">
      <div class="inner">
        <h1>Hi, there!</h1>
        <p>Just another fine responsive site template designed by <a href="http://html5up.net">HTML5 UP</a><br />
        and released for free under the <a href="http://html5up.net/license">Creative Commons</a>.</p>
        <SocialLink />
        <!-- <ul class="icons">
          <li><a href="#" class="fa-twitter"><span class="label">Twitter</span></a></li>
          <li><a href="#" class="fa-facebook"><span class="label">Facebook</span></a></li>
          <li><a href="#" class="fa-github"><span class="label">GitHub</span></a></li>
          <li><a href="#" class="fa-instagram"><span class="label">Instagram</span></a></li>
          <li><a href="#" class="fa-linkedin"><span class="label">LinkedIn</span></a></li>
        </ul> -->
        <ul class="actions">
          <li><a href="#one" class="button scrolly">Learn more</a></li>
        </ul>
      </div>
    </section>


</template>

<style scoped>
.top-message {
  font-size: 40pt;
  text-align: center;
}
</style>
