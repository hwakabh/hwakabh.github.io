<script setup>
import SidebarContent from './components/SidebarContent.vue';
import FooterContent from './components/FooterContent.vue';

</script>

<template>

  <SidebarContent />

  <div id="wrapper">
    <router-view />
  </div>

  <footer id="footer" class="wrapper style1-alt">
    <FooterContent />
  </footer>

</template>

<style scoped>
.route-wrap {
  display: flex;
  justify-content: space-between;
}
</style>
