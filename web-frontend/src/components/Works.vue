<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";


// axios.defaults.baseURL = 'http://localhost:3000';
// const url = "https://jsonplaceholder.typicode.com/users";
const url = "http://localhost:3000/projects";

const projectData = ref('');

const projects = axios.get(url)
  .then((resp) => {
    console.log(resp.data.data);
    console.log(resp.data.data[0].title);
    projectData.value = resp.data.data[0].descriptions[0];
    // console.log("Promise complete");
    // return resp.data
  })
  .catch((err) => {
    // console.log("Promise broken");
    console.log(err);
    return null
  })


// Vue lifecycle hooks
onMounted(function() {
  // console.log(projects.path)
  // console.log(projects.data)
  console.log(projectData);
})

</script>

<template>
  <p>
    Here is my works!
    {{ projectData }}
  </p>
</template>
