<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";


const projectData = ref('');
axios.get('/api/v1/cv/projects')
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
