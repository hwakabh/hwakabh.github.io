<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";


// axios.defaults.baseURL = 'http://localhost:3000';
// const url = "https://jsonplaceholder.typicode.com/users";
const url = "http://localhost:3000/api/v1/cv/projects";

const projectData = ref('');
axios.get(url)
  .then((resp) => {
    // console.log(resp.data.projects[0].title);
    projectData.value = resp.data.projects[0].descriptions[0];
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
