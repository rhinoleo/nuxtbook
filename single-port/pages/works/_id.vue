<template>
  <section class="container">
    <h1 class="title">
      Work
    </h1>
    <h2 class="info">
      ho
      <!-- {{ work.label }} -->
    </h2>
    <!-- <ul>
      <li v-for="(index) in this.img" :key="index">
        <img :src="img[index]" alt="">
      </li>
    </ul> -->
    <nuxt-link class="button" to="/works">
      Works
    </nuxt-link>
  </section>
</template>

<script>
// import axios from '~/plugins/axios'

export default {
  name: 'id',
  // asyncData ({ params, error }) {
  //   return axios.get('/api/works/' + params.id)
  //     .then((res) => {
  //       return { work: res.data.data }
  //     })
  //     .catch((e) => {
  //       error({ statusCode: 404, message: 'Work not found' })
  //     })
  // },

  // async asyncData({$axios, params}) {
  //   const {data: {match}} = await $axios.get(`https://www.rolandgarros.com/api/en-us/matches/${params.match}`);
  //   return match;
  // },

  data () {
    return {
      works: this.$store.state.works
    }
  },
  head () {
    console.log('works : '+ this.works[1].label)
    return {
      // title: `Work: ${this.work.label}`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
