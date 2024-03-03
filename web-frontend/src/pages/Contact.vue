<script setup>
import axios from "axios";
import { ref } from 'vue';

const senderName = ref('');
const senderEmail = ref('');
const senderBody = ref('');

// const data = new FormData();
// data.append('name', senderName);
// data.append('email', senderEmail);
// data.append('body', senderBody);

const data = {
  name: senderName,
  email: senderEmail,
  body: senderBody
}

function sendMail() {
  console.log('Invoke sendMail() ...!');
  axios.post('/api/v1/contact', data)
  .then((resp) => {
    console.log(resp);
    console.log('Send payload to backend API.');
  })
  .catch((err) => {
    console.log(err);
  })
};
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

    <button type="submit">Submit</button>
	</form>
</template>
