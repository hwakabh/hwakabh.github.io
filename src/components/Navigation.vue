<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This is navigation component
    </p>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
