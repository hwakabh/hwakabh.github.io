<script setup>
import axios from "axios";
import { ref, computed } from 'vue';

const senderName = ref('');
const senderEmail = ref('');
const senderBody = ref('');

// function should be defined as variables
const sendMail = () => {
  console.log('Invoke sendMail() ...!');

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
    console.log('Send payload to backend API.');
    // TODO: navigate to /thanks page
  })
  .catch((err) => {
    console.log(err);
  })
};

const textCount = computed(() => {
  return senderBody.value.length
})
</script>


<template>
  <h3>
    Contact
  </h3>
  <p>
    Please feel free to get in touch!
  </p>

  <form @submit.prevent="sendMail">
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
