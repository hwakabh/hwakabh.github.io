<script setup>
import axios from "axios";
import { ref } from "vue";

const bookData = ref('');

axios.get('/api/v1/about/books')
  .then((res) => {
    console.log(res.data);
    bookData.value = res.data.content.tana.name;
  })
</script>


<template>
  <h2 class="subsections">About</h2>
  <p>
    Born in 1991 in Tokyo, and got into IT from maintaining a university club's homepage. <br>
    Currently works as a software engineer and also works as a freelancer.  <br>
    Likes coffee, gin, music and relaxing cafes, dislike sweet or spicy foods.  <br>
  </p>
  <h2 class="subsections">Musics</h2>
    <p>
      TBD
    </p>
  <h2 class="subsections">Books</h2>
    <p>
      Personal bookshelf name: {{ bookData }}
    </p>
  <h2 class="subsections">Movies</h2>
    <p>
      TBD
    </p>
</template>

<style scoped>
.subsections {
  margin-top: 10pt;
  margin-bottom: 10pt;
}
</style>
