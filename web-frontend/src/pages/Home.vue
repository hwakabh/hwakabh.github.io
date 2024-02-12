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
  <HelloWorld msg="Hi, there!" />

  <VueWriter
    class="top-message"
    :array="words"
    :delay="1000"
    :type-speed="80"
    :erase-speed="80"
     >
  </VueWriter>

  <SocialLink />
</template>

<style scoped>
.top-message {
  font-size: 40pt;
  text-align: center;
}
</style>
