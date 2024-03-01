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

const educationData = ref([]);
axios.get('/api/v1/cv/educations')
  .then((resp) => {
    console.log(resp.data.content);
    educationData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })

const publicationData = ref([]);
axios.get('/api/v1/cv/publications')
  .then((resp) => {
    console.log(resp.data.content);
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
      <h5> {{ e.title }} </h5>
      <div> {{ e.descriptions }}</div>
      <div> Period: {{ e.start }} - {{ e.end }} </div>
    </p>
  </div>

  <h3>
    Publications
  </h3>
  <div v-for="(pb, idx) in publicationData"
  :key="idx"
  class="publications-detail" >
    <p>
      <h5> {{ pb.title }} </h5>
      <div> {{ pb.descriptions }}</div>
      <div> Download Link(pdf): {{ pb.link }} </div>
    </p>
  </div>

</template>
