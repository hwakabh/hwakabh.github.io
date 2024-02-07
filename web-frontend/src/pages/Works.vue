<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";


// axios.defaults.baseURL = 'http://localhost:3000';
const url = "http://localhost:3000/api/v1/cv/projects";

const projectData = ref('');
axios.get(url)
  .then((resp) => {
    console.log(resp.data)
    projectData.value = resp.data.content[0].descriptions[0];
  })
  .catch((err) => {
    console.log(err);
  })


// Vue lifecycle hooks
onMounted(function() {
  console.log(projectData);
})
</script>


<template>
  <p>
    Here is my works!
    {{ projectData }}
  </p>
</template>
