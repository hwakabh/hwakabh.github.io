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
    <!-- Three -->
    <section id="three" class="wrapper style1 fade-up">
      <div class="inner">
        <h2>Contact</h2>
        <div class="style1">
          <section>
            <form method="post" action="#">
              <div class="fields">
                <div class="field half">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div class="field half">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div class="field">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" rows="5"></textarea>
                </div>
              </div>
              <ul class="actions">
                <li><a href="" class="button submit">Send Message</a></li>
              </ul>
            </form>
          </section>
        </div>
      </div>
    </section>



  <!-- <h3>
    Contact
  </h3>
  <p>
    Please feel free to get in touch!
  </p>

  <div v-if="isError">
    <p>
      Failed to send email!
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

  <form v-if="!isCompleted && !isError" @submit.prevent="sendMail">
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
	</form> -->
</template>
