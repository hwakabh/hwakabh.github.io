<script setup>
import axios from "axios";
import { ref } from "vue";

const bookData = ref('');
axios.get('http://localhost:3000/api/v1/about/books')
  .then((res) => {
    console.log(res.data);
    bookData.value = res.data.content.tana.name;
  })
</script>


<template>
  <p>
    My 本棚 name is: {{ bookData }}
  </p>
</template>
