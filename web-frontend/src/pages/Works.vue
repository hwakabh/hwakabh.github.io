<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

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
  <section id="two" class="wrapper style2-alt fullscreen spotlights">
    <div class="inner">
      <h2>Personal Works</h2>
      <p>
        Some of the featured projects I have built, mainly for personal purpose or works as freelancer.<br>
        Also there is a full list as repositories in <a href="https://github.com/hwakabh" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>

      <ul v-for="(w, idx) in workData"
        :key="idx"
        class="alt work-detail" >
        <li>
          <strong><a :href="w.url" target="_blank"> {{ w.title }} </a></strong>
          <br>
          {{ w.descriptions }}
          <br>
          <span v-for="(t, idx) in w.techStacks" :key="idx">
            {{ t }}
            <span v-if="idx+1 != w.techStacks.length"> / </span>
          </span>
        </li>
      </ul>

    </div>
  </section>
</template>
