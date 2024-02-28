<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

import GitHubIcon from '../components/icons/GitHub.vue';

const workData = ref([]);
axios.get('/api/v1/works')
  .then((resp) => {
    console.log(resp.data.content);
    workData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })


// Vue lifecycle hooks
onMounted(() => {
  console.log(workData);
})
</script>


<template>
  <h3>
    Personal Works
  </h3>

  <div v-for="(w, idx) in workData"
  :key="idx"
  class="work-detail" >
    <p>
      <a :href="w.url" target="_blank"> {{ w.title }} </a>

      <a v-if="w.gitHubRepoUrl" :href="w.gitHubRepoUrl" target="_blank">
        <component :is="GitHubIcon" />
      </a>
      <br>

      Descriptions: {{ w.descriptions }}
      <br>
      <!-- TODO: loop with v-for -->
      Technical Stacks: {{ w.techStacks }}
      <br>
      {{ w.imageUrl }}
    </p>
  </div>

</template>
