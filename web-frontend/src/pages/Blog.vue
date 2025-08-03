<script setup>
import axios from "axios";
import { ref } from "vue";

const postData = ref([]);
axios.get('/api/v1/posts')
  .then((resp) => {
    postData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })

</script>

<template>
  <section class="wrapper fullscreen">
    <div class="inner">
      <h1 class="major">Blogs</h1>
        <div v-for="(p, idx) in postData"
          :key="idx"
          class="post-detail"
          >
            <div v-html="p.date"></div>
            <div v-html="p.body"></div>
          <hr />
        </div>
    </div>
  </section>
</template>
