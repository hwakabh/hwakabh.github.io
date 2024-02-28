<script setup>
import axios from "axios";
import { ref } from 'vue';

const projectData = ref([]);
axios.get('/api/v1/cv/projects')
  .then((resp) => {
    console.log(resp.data.content);
    projectData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })
</script>

<template>
  <h3>
    Selected Accomplishments
  </h3>

  <div v-for="(p, idx) in projectData"
  :key="idx"
  class="project-detail" >
    <p>
      <h5> {{ p.title }} </h5>
      <li v-for="(d, idx) in p.descriptions">
        {{ d }}
      </li>
      <br>
      <div> Period: {{ p.start }} - {{ p.end }} </div>
      <!-- TODO: loop with v-for -->
      Skills: {{ p.skills }}
    </p>
  </div>
</template>
