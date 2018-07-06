<template>
  <section class="container">
    <div class="work-container">
      <div class="work">
        <h1 class="title part">
          {{ works[id].name }}
        </h1>

        <div class="work-date-summary">{{ works[id].date }} / {{ works[id].summary }}</div>
        <img class="work-picture" :src=" works[id].picture "/>
        <div v-if="works[id].textintro" class="work-text">{{ works[id].textintro }}<hr></div>
        <div class="work-text">{{ works[id].text }}</div>
        <div class="work-description">{{ works[id].description }}</div>

        <p>{{ id }}</p>

      </div>
    </div>
    <nuxt-link tag="md-button" class="md-raised" to="/works">
      Works
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import _ from 'lodash'
import store from '~/store'

export default {
  name: 'work',
  props: ['id','work'],
  data () {
    return {
      // id: this.$route.params.id,
      // works: []
    }
  },
  head () {
    return {
      title: 'Work'
    }
  },
  computed: {
    // works() {
    //   console.log('init works in Work_id')
    //   return this.$store.getters.works
    // }
  },
  methods: {
  },
  created() {
  //   let works = this.works
  //   console.log('works (created step) : ' + this.works)
  //   let id = this.id
  //   console.log('work[id].name (created step) : ' + this.works[id].name)
  }
}
</script>

<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables";
@import "~vue-material/src/theme/engine";

@import "~/assets/css/main.scss";

hr {
  border: none;
  height: 0.5px;
  background-color: grey;
  margin-right: 90%;
  margin-top: 1em;
}

.work-container {
  margin: auto;
  width: 70%;
}
.work {
  margin: 0 0 5em;
  text-align: left;
}
.work-date-summary {
  font-weight: 700;
  margin: 1em 0;
}
.work-description {
  margin: 3em 0 0;
}
.work-name {
  font-weight: 300;
  font-size: 1.5em;
}
.work-picture {
  width: 100%;
}
.work-text {
  margin: 1em 0;
  font-size: 1.2em;
}
</style>
