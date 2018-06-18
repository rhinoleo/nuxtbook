<template>
  <section class="container">
    <h1 class="title part">
      travaux
    </h1>
    <div class="works-container">
      <ul class="works">
        <li v-for="(work, index) in works" :key="index" class="work">
          <nuxt-link class="work-label" :to="'works/' + index">
            {{ work.label }}
          </nuxt-link>
          <div class="work-date">{{ work.date }}</div>
          <div class="work-summary">{{ work.summary }}</div>
          <img class="work-picture" :src="work.picture" alt="">
          <div class="work-text">{{ work.text }}</div>
          <div class="work-description">{{ work.description }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  // async asyncData () {
  //   let { data } = await axios.get('https://book-73f3b.firebaseio.com/data')
  //   console.log('hurrah!')
  //   return { works: data }
  // },
  data () {
    return {
      works: []
    }
  },
  head () {
    return {
      title: 'Works'
    }
  },
  created() {
        axios.get('https://book-73f3b.firebaseio.com/data.json')
        .then(response => {
          this.works = response.data;
        })
  }
}
</script>

<style scoped>
.part {
  margin: 30px 0;
}
.works-container {
  margin: auto;
  width: 70%;
}
.works {
  list-style: none;
  margin: 0;
  padding: 0;
}
.work {
  margin: 5em 0;
  text-align: left;
}
.work-date {
  font-weight: 700;
  font-size: 0.7em;
  margin: 1em 0 0;
}
.work-description {
  font-size: 0.7em;
}
.work-label {
  font-weight: 300;
  font-size: 1.5em;
}
.work-picture {
  width: 100%;
}
.work-summary {
  font-weight: 700;
  font-size: 0.7em;
  margin: 0 0 1em;
}
.work-text {
  margin: 1em 0;
}

</style>
