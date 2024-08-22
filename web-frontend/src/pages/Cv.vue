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

const certificationData = ref([]);
axios.get('/api/v1/cv/certifications')
  .then((resp) => {
    certificationData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })
</script>

<template>
  <h3>
    Selected Accomplishments
  </h3>
  <p>
    All of the project data has been fetched from <a href="https://www.linkedin.com/in/hiroyuki-wakabayashi-61b661157/" target="_blank" rel="noopener noreferrer">LinkedIn profiles</a>.
  </p>

  <div v-for="(p, idx) in projectData.items"
  :key="idx"
  class="project-detail" >
    <p>
      <h5> {{ p.title }} </h5>
      <div> {{ p.description }} </div>
      <br>
      <div> Period: {{ p.start.year }}/{{ p.start.month }} - {{ p.end.year }}/{{ p.end.month }} </div>
      <!-- TODO: loop with v-for -->
      <!-- Since we can not retrieve skills associated to projects from responses of RapidApi, need to consider design -->
      <!-- Skills: {{ p.skills }} -->
    </p>
  </div>

  <h3>
    Certifications
  </h3>
  <p>
    Certified badges are all stored in <a href="https://www.credly.com/users/hiroyuki-wakabayashi.056b817e" target="_blank" rel="noopener noreferrer">Credly Public Profile</a>
  </p>
  <li v-for="(c, idx) in certificationData"
  :key="idx"
  class="certification-detail" >
    <div>
      {{ c.start.year }}/{{ c.start.month }}: {{ c.name }}
    </div>
  </li>

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
