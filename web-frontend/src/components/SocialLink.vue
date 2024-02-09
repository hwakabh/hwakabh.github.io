<script setup>
// SNS Links: SVG from tabler
// https://tabler.io/icons
// https://github.com/tabler/tabler-icons/tree/master/packages/icons-vue)
import FacebookIcon from './icons/Facebook.vue'
import GitHubIcon from './icons/GitHub.vue'
import InstagramIcon from './icons/Instagram.vue'
import LinkedInIcon from './icons/LinkedIn.vue'
import XIcon from './icons/X.vue'
</script>

<template>
  <div class="sns-links">
    <div class="sns-icon">
      <a href="https://github.com/hwakabh">
        <GitHubIcon />
      </a>
    </div>
    <div class="sns-icon">
      <a href="https://www.linkedin.com/in/hiroyuki-wakabayashi-61b661157/">
        <LinkedInIcon />
      </a>
    </div>
    <div class="sns-icon">
      <a href="https://twitter.com/hwakabh">
        <XIcon />
      </a>
    </div>
    <div class="sns-icon">
      <a href="https://www.instagram.com/hwakabh/">
        <InstagramIcon />
      </a>
    </div>
    <div class="sns-icon">
      <a href="https://www.facebook.com/hiroyuki.wakabayashi.146">
        <FacebookIcon />
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
