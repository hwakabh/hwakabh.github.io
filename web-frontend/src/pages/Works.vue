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
    <!-- Two -->
    <section id="two" class="wrapper style2-alt spotlights">
      <div class="inner">
        <h2>Personal Works</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
        <p>Full repository list in <a href="#">GitHub</a></p>

        <ul class="alt">
          <li><a href=""><strong>bennu-official</strong></a> <br> Official Homepage of Bennu</li>
          <li><strong>random-travelers</strong><br> Some Descriptions </li>
          <li><strong>Luana Shanti</strong> </li>
          <li><strong>waseda-mochida</strong> </li>
        </ul>

      </div>
    </section>


 <!-- <h3>
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
      Technical Stacks: {{ w.techStacks }}
      <br>
      {{ w.imageUrl }}
    </p>
  </div> -->

</template>
