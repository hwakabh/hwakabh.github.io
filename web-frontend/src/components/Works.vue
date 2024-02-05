<script setup>
import axios from "axios";
import { onMounted } from "vue";


// axios.defaults.baseURL = 'http://localhost:3000';
const url = "https://jsonplaceholder.typicode.com/users";
// const url = "http://localhost:3000/projects";

// Since this is not the reactive data, need not to use `ref()`
const projects = axios.get(url)
  .then((resp) => {
    console.log("Promise complete");
    return resp.data
  })
  .catch((err) => {
    console.log("Promise broken");
    console.log(err);
    return null
  })

// Vue lifecycle hooks
onMounted(function() {
  console.log(projects);
})

</script>

<template>
  <p>
    Here is my works !
    {{ projects }}
  </p>
</template>
