<script setup>
// required for page scrolling
// import { IonPage, IonContent } from '@ionic/vue';

// import { IonCol, IonGrid, IonRow } from '@ionic/vue';
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

    <section id="sidebar">
				<div class="inner">
					<nav>
						<ul>
							<li><router-link to="/">Home</router-link> </li>
							<li><router-link to="/about">About</router-link> </li>
							<li><router-link to="/works">Works</router-link> </li>
							<li><router-link to="/contact">Contact</router-link> </li>
						</ul>
					</nav>
				</div>
			</section>


		<!-- Wrapper -->
    <div id="wrapper">
      <router-view />
    </div>

  <!-- Footer -->
  <footer id="footer" class="wrapper style1-alt">
  <FooterContent />
  </footer>


  <!-- <ion-page>
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
  </ion-page> -->

</template>

<style scoped>
.route-wrap {
  display: flex;
  justify-content: space-between;
}
</style>
