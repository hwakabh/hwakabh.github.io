<script setup>
const myProps = defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>


<template>
  <div class="greetings">
    <h1 class="greetings">{{ msg }}</h1>
  </div>
</template>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.greetings h1 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: center;
  }
}
</style>
