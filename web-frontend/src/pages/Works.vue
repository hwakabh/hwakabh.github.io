<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

import GitHubIcon from '../components/icons/GitHub.vue';

const projectData = ref([]);
axios.get('/api/v1/works')
  .then((resp) => {
    console.log(resp.data.content);
    projectData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })


// Vue lifecycle hooks
onMounted(() => {
  console.log(projectData);
})
</script>


<template>
  <p>
    Personal Works
  </p>

  <div v-for="(p, idx) in projectData"
  :key="idx"
  class="project-detail" >
    <p>
      <a :href="p.url" target="_blank"> {{ p.title }} </a>

      <a v-if="p.gitHubRepoUrl" :href="p.gitHubRepoUrl" target="_blank">
        <component :is="GitHubIcon" />
      </a>
      <br>

      Descriptions: {{ p.descriptions }}
      <br>
      <!-- TODO: loop with v-for -->
      Technical Stacks: {{ p.techStacks }}
      <br>
      {{ p.imageUrl }}
    </p>
  </div>

</template>
