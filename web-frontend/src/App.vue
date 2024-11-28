<script setup>
import SidebarContent from './components/SidebarContent.vue';
import FooterContent from './components/FooterContent.vue';

</script>

<template>
<!-- <script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.scrollex.min.js"></script>
<script src="assets/js/jquery.scrolly.min.js"></script>
<script src="assets/js/browser.min.js"></script>
<script src="assets/js/breakpoints.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script> -->

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
