<script setup>
import { ref } from 'vue'
import VueWriter from 'vue-writer'

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
  <h1> Hi there! </h1>
  <VueWriter
    class="top-message"
    :array="words"
    :delay="1000"
    :type-speed="80"
    :erase-speed="80"
     >
  </VueWriter>
</template>

<style>
.top-message {
  font-size: 60pt;
}
</style>
