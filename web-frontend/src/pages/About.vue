<script setup>
import axios from "axios";
import { ref } from "vue";

const bookData = ref([]);
axios.get('/api/v1/about/books')
  .then((res) => {
    console.log(res.data);
    res.data.content.books.forEach((b) => {
      bookData.value.push(b.title)
    })
  })

const movieData = ref([]);
axios.get('/api/v1/about/movies')
  .then((res) => {
    console.log(res.data);
    res.data.content.forEach((m) => {
      movieData.value.push(m.title);
    })
  })

  const projectData = ref([]);
axios.get('/api/v1/cv/projects')
  .then((resp) => {
    projectData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })

const educationData = ref([]);
axios.get('/api/v1/cv/educations')
  .then((resp) => {
    educationData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })

const publicationData = ref([]);
axios.get('/api/v1/cv/publications')
  .then((resp) => {
    publicationData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })

const certificationData = ref([]);
axios.get('/api/v1/cv/certifications')
  .then((resp) => {
    certificationData.value = resp.data.content;
  })
  .catch((err) => {
    console.log(err);
  })
</script>


<template>

    <!-- One -->
    <section id="one" class="wrapper style2 spotlights">
      <section>
        <div class="content">
          <div class="inner">
            <h2>About me - Personal</h2>
            <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
            <ul class="actions">
              <li>Blog</li>
              <!-- <li><router-link to="/blogs" class="button">Blog</router-link></li> -->
            </ul>
          </div>
        </div>
      </section>
      <section>
          <div class="content">
            <div class="inner">
              <h2>About me - Professional</h2>
              <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
              <p>Full career history in <a href="#">LinkedIn</a></p>

              <h3>Selected Achivements</h3>
              <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
              <h3>Certifications</h3>
              <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
              <h3>Educations</h3>
              <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
              <h3>Publications / Exposures</h3>
              <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>

            </div>
          </div>
        </section>
    </section>




  <!-- <h2 class="subsections">About</h2>
  <p>
    Born in 1991 in Tokyo, and got into IT from maintaining a university club's homepage. <br>
    Currently works as a software engineer and also works as a freelancer.  <br>
    Likes coffee, gin, music and relaxing cafes <br>
    Dislike sweet or spicy foods  <br>
  </p>
  <h2 class="subsections">Musics</h2>
    <p>
      Fetched from <a href="https://music.apple.com/jp/playlist/pl.u-xlyNEdkuA4ymPy" target="_blank" rel="noopener noreferrer">Personal Apple Music playlist</a>
    </p>
    <iframe
      allow="autoplay *; encrypted-media *;"
      frameborder="0"
      height="450"
      style="width:100%;max-width:660px;overflow:hidden;background:transparent;"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src="https://embed.music.apple.com/jp/playlist/pl.u-xlyNEdkuA4ymPy">
    </iframe>

  <h2 class="subsections">Books</h2>
    <p>Fetched from latest books in bookshelf API from <a href="https://booklog.jp/users/hwakabh" target="_blank" rel="noopener noreferrer">booklog</a></p>
    <li v-for="(b, idx) in bookData" :key="idx">
      {{ b }}
    </li>
  <h2 class="subsections">Movies</h2>
    <p>Fetched from latest clips from <a href="https://filmarks.com/users/11ne56"  target="_blank" rel="noopener noreferrer">Filmarks</a></p>
    <li v-for="(m, idx) in movieData" :key="idx">
      {{ m }}
    </li> -->


  <!-- <h3>
    Selected Accomplishments
  </h3>
  <p>
    All of the project data has been fetched from <a href="https://www.linkedin.com/in/hiroyuki-wakabayashi-61b661157/" target="_blank" rel="noopener noreferrer">LinkedIn profiles</a>.
  </p>

  <div v-for="(p, idx) in projectData.items"
  :key="idx"
  class="project-detail" >
    <p>
      <h5> {{ p.title }} </h5>
      <div> {{ p.description }} </div>
      <br>
      <div> Period: {{ p.start.year }}/{{ p.start.month }} - {{ p.end.year }}/{{ p.end.month }} </div>
    </p>
  </div>

  <h3>
    Certifications
  </h3>
  <p>
    Certified badges are all stored in <a href="https://www.credly.com/users/hiroyuki-wakabayashi.056b817e" target="_blank" rel="noopener noreferrer">Credly Public Profile</a>
  </p>
  <li v-for="(c, idx) in certificationData"
  :key="idx"
  class="certification-detail" >
    <div>
      {{ c.start.year }}/{{ c.start.month }}: {{ c.name }}
    </div>
  </li>

  <h3>
    Educations
  </h3>
  <div v-for="(e, idx) in educationData"
  :key="idx"
  class="education-detail" >
    <p>
      <h5> {{ e.start }} - {{ e.end }} : {{ e.title }} </h5>
      <div> {{ e.descriptions }}</div>
    </p>
  </div>

  <h3>
    Publications / Exposures
  </h3>
  <div v-for="(pb, idx) in publicationData"
  :key="idx"
  class="publications-detail" >
    <p>
      <h5> {{ pb.title }} </h5>
      <div> {{ pb.descriptions }}</div>
      <div> Presented at {{ pb.date }}, <a :href="pb.link" target="_target">Download Link(pdf)</a></div>
    </p>
  </div> -->

</template>

<style scoped>
.subsections {
  margin-top: 10pt;
  margin-bottom: 10pt;
}
</style>
