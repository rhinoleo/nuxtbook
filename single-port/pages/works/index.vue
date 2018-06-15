<template>
  <section class="container">
    <h1 class="title">
      WORKS
    </h1>
    <ul class="users">
      <li v-for="(work, index) in works" :key="index" class="user">
        <nuxt-link :to="'works/' + index">
          {{ work.label }}
        </nuxt-link>
        <a href="addwork">addwork</a>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/works')
    console.log('hurrah!')
    return { works: data.data }
  },
  // data () {
  //   return {
  //     works: this.$store.state.works
  //   }
  // },
  head () {
    return {
      title: 'Works'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
