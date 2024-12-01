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
</script>


<template>
  <section id="one" class="wrapper style2 fullscreen spotlights">
    <section>
      <div class="content">
        <div class="inner">
          <h2>Personal</h2>
          <blockquote>
            Born in 1991 in Tokyo, and got into IT from maintaining a university club's homepage. <br>
            Currently works as a software engineer and also works as a freelancer.  <br>
            Likes coffee, gin, music and relaxing cafes <br>
            Dislike sweet or spicy foods  <br>
          </blockquote>

          <h3>Musics</h3>
          <div>
            Fetched from <a href="https://music.apple.com/jp/playlist/pl.u-xlyNEdkuA4ymPy" target="_blank" rel="noopener noreferrer">Personal Apple Music playlist</a>
            <iframe
              allow="autoplay *; encrypted-media *;"
              frameborder="0"
              height="450"
              title="Apple Music Playlist"
              style="width:100%;max-width:660px;overflow:hidden;background:transparent;"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/jp/playlist/pl.u-xlyNEdkuA4ymPy">
            </iframe>
          </div>

          <h3>Books</h3>
            <div>
              Fetched from latest books in bookshelf API from <a href="https://booklog.jp/users/hwakabh" target="_blank" rel="noopener noreferrer">booklog</a>
              <li v-for="(b, idx) in bookData" :key="idx">
              {{ b }}
              </li>
            </div>

          <h3>Movies</h3>
            <div>
              Fetched from latest clips from <a href="https://filmarks.com/users/11ne56"  target="_blank" rel="noopener noreferrer">Filmarks</a>
              <li v-for="(m, idx) in movieData" :key="idx">
                {{ m }}
              </li>
            </div>

          <br>
          <div>
            <ul class="actions">
              <li><router-link to="/help" class="button primary">Blog</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="content">
        <div class="inner">

          <h2>Professional</h2>
          <blockquote>
            Consulting Architect with background in design/deployment/optimization of Telecomm infrastructures, programming, and application development. <br>
            Focused on customer’s outcome with knowledges of both infrastructures and application, and leading high impact projects. <br>
            Handled troubleshooting of high-severity cases with customer and global development/support team. <br>
          </blockquote>
          <p>
          Please see more details including major accomplishments in <a href="https://www.linkedin.com/in/hiroyuki-wakabayashi-61b661157/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>

          <h3>Career History</h3>
          <div>
            <ul>
              <li>2024/10 - Present: Resident Solutions Engineer at <a href="https://www.hashicorp.com/" target="_blank" rel="noopener noreferrer">HashiCorp</a></li>
              <li>2021/01 - 2023/12: Chief Technology Officer at <a href="https://glocalist.co/ja-JP/" target="_blank" rel="noopener noreferrer">Glocalist</a></li>
              <li>2019/06 - 2024/10: Telco Solutions Architect at <a href="https://www.vmware.com" target="_blank" rel="noopener noreferrer">VMware</a><br>(merged by Broadcom)</li>
              <li>2015/04 - 2019/06: Delivery Specialist at <a href="https://www.emc.com" target="_blank" rel="noopener noreferrer">EMC Corporation </a><br>(merged by Dell Technologies)</li>
            </ul>
          </div>

          <h3>Educations</h3>
            <div v-for="(e, idx) in educationData"
              :key="idx"
              class="education-detail" >
                <div>
                  <div> {{ e.start }} - {{ e.end }} : {{ e.title }} </div>
                  <div> {{ e.descriptions }}</div>
                </div>
            </div>

          <h3>Publications / Exposures</h3>
            <div v-for="(pb, idx) in publicationData"
              :key="idx"
              class="publications-detail" >
                <div>
                  <div> {{ pb.title }} </div>
                  <ul>
                    <li> {{ pb.descriptions }}</li>
                    <li> Presented at {{ pb.date }}, <a :href="pb.link" target="_target">Download Link(pdf)</a></li>
                  </ul>
                </div>
            </div>

        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
h3 {
  margin-top: 10pt;
  margin-bottom: 5pt;
}
</style>
