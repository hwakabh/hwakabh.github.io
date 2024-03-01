<script setup>
import axios from "axios";
import { ref } from 'vue';

const projectData = ref([]);
axios.get('/api/v1/cv/projects')
  .then((resp) => {
    projectData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })

const educationData = ref([]);
axios.get('/api/v1/cv/educations')
  .then((resp) => {
    educationData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })

const publicationData = ref([]);
axios.get('/api/v1/cv/publications')
  .then((resp) => {
    publicationData.value = resp.data.content;
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

  <h3>
    Educations
  </h3>
  <div v-for="(e, idx) in educationData"
  :key="idx"
  class="education-detail" >
    <p>
      <h5> {{ e.start }} - {{ e.end }} : {{ e.title }} </h5>
      <div> {{ e.descriptions }}</div>
    </p>
  </div>

  <h3>
    Publications / Exposures
  </h3>
  <div v-for="(pb, idx) in publicationData"
  :key="idx"
  class="publications-detail" >
    <p>
      <h5> {{ pb.title }} </h5>
      <div> {{ pb.descriptions }}</div>
      <div> Presented at {{ pb.date }}, <a :href="pb.link" target="_target">Download Link(pdf)</a></div>
    </p>
  </div>

</template>
