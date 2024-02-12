<script setup>
import { IonCol, IonGrid, IonRow } from '@ionic/vue';

import HelloWorld from './components/HelloWorld.vue'
import FooterContent from './components/FooterContent.vue';
</script>

<template>
  <header>
    <ion-grid>
      <ion-row>
        <ion-col />
        <ion-col>
          <div class="wrapper">
            <router-link to="/">GO HOME</router-link>
            <router-link to="/about">About me</router-link> +
            <router-link to="/cv">Resume</router-link> +
            <router-link to="/works">Side Gigs</router-link> +
            <router-link to="/contact">Contact forms</router-link>
         </div>
        </ion-col>
        <ion-col />
      </ion-row>
    </ion-grid>

  </header>

  <main>
    <ion-grid>
      <ion-row>
        <ion-col />
        <ion-col>

          <HelloWorld msg="Hi, there!" />
          <router-view />

        </ion-col>
        <ion-col />
      </ion-row>
    </ion-grid>
  </main>

  <footer>
    <ion-grid>
      <ion-row>
        <ion-col />
        <ion-col>
          <FooterContent />
        </ion-col>
        <ion-col />
      </ion-row>
    </ion-grid>
  </footer>
</template>
