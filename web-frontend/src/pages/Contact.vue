<script setup>
import axios from "axios";
import { ref, computed } from 'vue';

import ThanksContent from "../components/Thanks.vue";

const senderName = ref('');
const senderEmail = ref('');
const senderBody = ref('');

const isCompleted = ref(false);
const isError = ref(false);

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
    isError.value = true;
  })
};

const textCount = computed(() => {
  return senderBody.value.length
});
</script>

<template>
  <section id="three" class="wrapper style1 fullscreen fade-up">
    <div class="inner">
      <h2>Contact</h2>
      <p>Please feel free to get in touch! </p>
      <div v-if="isError">
        <p>
          Failed to send email, please try again after reload!
        </p>
      </div>
      <div v-if="isCompleted">
        <ThanksContent>
          <template v-slot:message>
            Thanks!
          </template>

        <template v-if="senderEmail" v-slot:sender>
            {{ senderEmail }}
          </template>
        </ThanksContent>
      </div>

      <div class="style1">
        <section>
          <form v-if="!isCompleted && !isError" @submit.prevent="sendMail">
            <div class="fields">
              <div class="field half">
                <label for="name">Name</label>
                <input v-model="senderName" name="sendername" id="sendername" type="text">
              </div>
              <div class="field half">
                <label for="email">Email</label>
                <input v-model="senderEmail" name="Email" id="email" type="email" placeholder="me@example.com">
              </div>
              <div class="field">
                <label for="body">Message</label>
                <textarea v-model="senderBody" />
              </div>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  </section>

</template>
