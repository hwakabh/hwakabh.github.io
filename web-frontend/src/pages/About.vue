<script setup>
import axios from "axios";
import { ref } from "vue";

const bookData = ref([]);
axios.get('/api/v1/about/books')
  .then((res) => {
    console.log(res.data);
    res.data.content.books.forEach((b) => {
      bookData.value.push(b.title)
    })
  })

const movieData = ref([]);
axios.get('/api/v1/about/movies')
  .then((res) => {
    console.log(res.data);
    res.data.content.forEach((m) => {
      movieData.value.push(m.title);
    })
  })
</script>


<template>
  <h2 class="subsections">About</h2>
  <p>
    Born in 1991 in Tokyo, and got into IT from maintaining a university club's homepage. <br>
    Currently works as a software engineer and also works as a freelancer.  <br>
    Likes coffee, gin, music and relaxing cafes <br>
    Dislike sweet or spicy foods  <br>
  </p>
  <h2 class="subsections">Musics</h2>
    <p>
      Fetched from <a href="https://music.apple.com/jp/playlist/pl.u-xlyNEdkuA4ymPy">Personal Apple Music playlist</a>
    </p>
    <iframe
      allow="autoplay *; encrypted-media *;"
      frameborder="0"
      height="450"
      style="width:100%;max-width:660px;overflow:hidden;background:transparent;"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src="https://embed.music.apple.com/jp/playlist/pl.u-xlyNEdkuA4ymPy">
    </iframe>

  <h2 class="subsections">Books</h2>
    <p>Fetched from latest books in bookshelf from <a href="https://booklog.jp">booklog</a></p>
    <li v-for="(b, idx) in bookData" :key="idx">
      {{ b }}
    </li>
  <h2 class="subsections">Movies</h2>
    <p>Fetched from latest clips from <a href="https://filmarks.com">Filmarks</a></p>
    <li v-for="(m, idx) in movieData" :key="idx">
      {{ m }}
    </li>
</template>

<style scoped>
.subsections {
  margin-top: 10pt;
  margin-bottom: 10pt;
}
</style>
