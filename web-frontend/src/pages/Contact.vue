<script setup>
import axios from "axios";
import { ref, computed } from 'vue';

import ThanksContent from "../components/Thanks.vue";

const senderName = ref('');
const senderEmail = ref('');
const senderBody = ref('');

const isCompleted = ref(false);

// function should be defined as variables
const sendMail = () => {
  // We need not to use FormData() and .append()
  // since simply sending text to backend
  const data = {
    name: senderName.value,
    email: senderEmail.value,
    body: senderBody.value
  }

  axios.post('/api/v1/contact', data)
  .then((resp) => {
    console.log(resp.data);
    // Flip flags for rendering thanks page
    isCompleted.value = true;
  })
  .catch((err) => {
    console.log(err);
  })
};

const textCount = computed(() => {
  return senderBody.value.length
});
</script>

<template>
  <h3>
    Contact
  </h3>
  <p>
    Please feel free to get in touch!
  </p>

  <div v-if="isCompleted">
    <!-- Override part of templates in Thanks.vue -->
    <ThanksContent>
      <template v-slot:message>
        Thanks!
      </template>

    <template v-if="senderEmail" v-slot:sender>
        {{ senderEmail }}
      </template>
    </ThanksContent>
  </div>

  <form v-else @submit.prevent="sendMail">
	  <label for="name">Your Name</label>
  	  <input v-model="senderName" name="sendername" id="sendername">
    <br>

    <label for="email">Your Email</label>
  	  <input v-model="senderEmail" name="Email" id="email" type="email" placeholder="me@example.com">
    <br>

	  <label for="body">Body</label>
  	  <textarea v-model="senderBody"/>
    <br>
    <div>Word Count: {{ textCount }}</div>

    <button type="submit">Submit</button>
	</form>
</template>
