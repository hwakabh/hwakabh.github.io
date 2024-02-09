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
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  FacebookIcon,
]
</script>

<template>
  <div class="sns-links">
    <component v-for="(snsIcon, idx) in snsIcons"
      :key="idx"
      :is="snsIcon"
      class="sns-icon" >
    </component>
  </div>
</template>

<style scoped>
.sns-icon {
  display: inline-block;
  margin-left: 10pt;
  margin-right: 10px;
}
</style>
