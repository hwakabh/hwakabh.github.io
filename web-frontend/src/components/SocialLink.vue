<script setup>
// SNS Links: SVG from tabler
// https://tabler.io/icons
// https://github.com/tabler/tabler-icons/tree/master/packages/icons-vue)
import FacebookIcon from './icons/Facebook.vue'
import GitHubIcon from './icons/GitHub.vue'
import InstagramIcon from './icons/Instagram.vue'
import LinkedInIcon from './icons/LinkedIn.vue'
import XIcon from './icons/X.vue'

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
  }
]
</script>


<template>
  <div class="sns-links">
    <div v-for="(snsIcon, idx) in snsIcons"
      :key="idx"
      class="sns-icon">
      <a target="_blank" :href="snsIcon.url">
        <component :is="snsIcon.comp" />
      </a>
    </div>
  </div>
</template>


<style scoped>
.sns-icon {
  display: inline-block;
  margin-left: 10pt;
  margin-right: 10px;
}
</style>
