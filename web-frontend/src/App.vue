<script setup>
// required for page scrolling
import { IonPage, IonContent } from '@ionic/vue';

import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import FooterContent from './components/FooterContent.vue';
</script>

<template>
  <ion-page>
    <ion-content>

      <header>
        <ion-grid>
          <ion-row>
            <ion-col />
            <ion-col size="8">
              <div class="route-wrap">
                <router-link to="/">Home</router-link>
                |
                <router-link to="/about">About me</router-link>
                |
                <router-link to="/cv">Resume</router-link>
                |
                <router-link to="/works">Side Gigs</router-link>
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
            <ion-col size="10">

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
            <ion-col size="10">
              <FooterContent />
            </ion-col>
            <ion-col />
          </ion-row>
        </ion-grid>
      </footer>

    </ion-content>
  </ion-page>
</template>

<style scoped>
.route-wrap {
  display: flex;
  justify-content: space-between;
}
</style>
