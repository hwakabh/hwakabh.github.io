<script setup>
// import { IonCol, IonGrid, IonRow } from '@ionic/vue';

// SNS Links: SVG from tabler
// https://tabler.io/icons
// https://github.com/tabler/tabler-icons/tree/master/packages/icons-vue)
import FacebookIcon from './icons/Facebook.vue'
import GitHubIcon from './icons/GitHub.vue'
import InstagramIcon from './icons/Instagram.vue'
import LinkedInIcon from './icons/LinkedIn.vue'
import XIcon from './icons/X.vue'
import ContactIcon from './icons/Contact.vue'

const snsIcons = [
  {
    comp: GitHubIcon,
    url: "https://github.com/hwakabh"
  },
  {
    comp: LinkedInIcon,
    url: "https://www.linkedin.com/in/hiroyuki-wakabayashi-61b661157/"
  },
  { comp: XIcon,
    url: "https://twitter.com/hwakabh"
  },
  {
    comp: InstagramIcon,
    url: "https://www.instagram.com/hwakabh/"
  },
  {
    comp: FacebookIcon,
    url: "https://www.facebook.com/hiroyuki.wakabayashi.146"
  },
  {
    comp: ContactIcon,
    url: '/contact'
  }
]
</script>


<template>
  <ion-grid>
    <ion-row class="sns-links">
      <div v-for="(snsIcon, idx) in snsIcons"
      :key="idx"
      class="sns-icon" >
        <ion-col>
          <a
            target="_blank"
            :href="snsIcon.url"
            class="sns-link" >
            <component :is="snsIcon.comp" />
          </a>
        </ion-col>
      </div>
    </ion-row>
  </ion-grid>
</template>


<style scoped>
.sns-links {
  display: flex;
  justify-content: center;
}
</style>
