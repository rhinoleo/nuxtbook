<template>
  <section class="container">
    <h1 class="title part">
      travaux
    </h1>
    <!-- <h3>id : {{ id }}</h3> -->
    <div class="works-container">
      <div class="works-menubar">
        <button @click="testRequest($event)">test</button>
        <md-button class="md-raised" @click="filterAll()">tous les projets</md-button>
        <md-button class="md-raised" @click="filterDesign()">design de rue</md-button>
        <md-button class="md-raised" @click="filterInsitu()">interventions in situ</md-button>
        <md-button class="md-raised" @click="filterAutre()">autres pratiques</md-button>
      </div>
      <ul class="works md-layout md-gutter">
        
        <!-- OLD -->
        <!-- <nuxt-link
          tag="li"
          :to="'works/' + index + '/' + [index].name"
          v-for="(work, index) in works"
          :key="index"
          class="work md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"> -->

        <li
          :to="'works/' + index"
          v-for="(work, index) in orderedWorks"
          :key="index"
          @mouseover="mouseOver()" :class="{ 'md-elevation-1': active}"
          class="work md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        
          <work
            :key="work.id"
            :work="work">
          </work>

        </li>

        <!-- <nuxt-link
          tag="li"
          :to="'works/' + index"
          v-for="(work, index) in orderedWorks"
          :key="index"
          :name="name"
          :id="id"
          @filterAll="filterAll"
          @filterDesign="filterDesign"
          @filterInsitu="filterInsitu"
          @filterAutre="filterAutre"
          class="work md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"> -->
          
          <!-- OLD -->
          <!-- <nuxt-link v-if="work.type == 'autre'" class="work-name work-type-autre">
            {{ work.name }}
          </nuxt-link> -->

          <!-- <h2 v-if="work.type == 'autre'" class="work-name work-type-autre" :to="'works/' + index">
            {{ work.name }}
          </h2>
          <h2 v-if="work.type == 'design'" class="work-name work-type-design" :to="'works/' + index">
            {{ work.name }}
          </h2>
          <h2 v-if="work.type == 'insitu'" class="work-name work-type-insitu" :to="'works/' + index">
            {{ work.name }}
          </h2>
          <div v-if="work.authors" class="work-date-float">{{ work.date }}</div>
          <div v-else class="work-date">{{ work.date }}</div>
          <div v-if="work.authors" class="work-authors">| avec {{ work.authors }}</div>
          <div class="work-summary">{{ work.summary }}</div>
          <div class="work-picture" :style="{ backgroundImage: 'url(' + work.picture + ')' }"></div>
          <div @click="testRequest($event)" class="work-text">{{ work.text }}</div>
          <div class="work-description">{{ work.description }}</div>
        </nuxt-link> -->
      </ul>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import _ from 'lodash'
import store from '~/store'

import Work from '~/components/work.vue'

export default {
  components: {
    Work
  },
  name: 'works',
  // async asyncData() {
  //   console.log('init asyncData')
  //   const response = await axios.get('https://book-73f3b.firebaseio.com/data.json')
  //   const data = await response
  //   return { works : response.data }
  // },
  data () {
    return {
      counter: this.$store.state.counter,
      onlyDesign: false,
      onlyInsitu: false,
      onlyAutre: false,
      active: false,
      work: {},
      name: 'blah'

      // id: this.$route.params.id
    }
  },
  head () {
    return {
      title: 'Works'
    }
  },
  computed: {
    works() {
      return this.$store.getters.works
    },
    orderedWorks() {
      console.log('ordered works : ' + this.works)
      if(this.onlyDesign) {
        return _.filter(this.works, { 'type': 'design' })
      } else if(this.onlyInsitu) {
        return _.filter(this.works, { 'type': 'insitu' })
      } else if(this.onlyAutre) {
        return _.filter(this.works, { 'type': 'autre' })
      } else {
        return _.orderBy(this.works, ['date','name'], ['desc', 'asc'])
      }
    },
  },
  methods: {
    filterDesign() {
      this.onlyDesign = true
      this.onlyInsitu = false
      this.onlyAutre = false
    },
    filterInsitu() {
      this.onlyDesign = false
      this.onlyInsitu = true
      this.onlyAutre = false
    },
    filterAutre() {
      this.onlyDesign = false
      this.onlyInsitu = false
      this.onlyAutre = true
    },
    filterAll() {
      this.onlyDesign = false
      this.onlyInsitu = false
      this.onlyAutre = false
    },
    testRequest(event) {
      // let works = this.works
      console.log('nom de la page : ' + this.$options.name)
      // console.log('nom du projet : ' + event.target.tagName)
      console.log('counter init : ' + this.counter + ' !')
      // `event` est l'évènement natif du DOM
      if (event) {
        console.log('event : ' + $(event.target).text)
      }
    },
    mouseOver: function(){
      this.active = !this.active;   
    }
  },
  created() {
    this.$store.dispatch('nuxtServerInit')
    console.log('rendu côté client : ' + process.client)
  }
  // created() {
  //       axios.get('https://book-73f3b.firebaseio.com/data.json')
  //       .then(response => {
  //         this.works = response.data;
  //       })
  // }
}
</script>

<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables";
@import "~vue-material/src/theme/engine";

@import "~/assets/css/main.scss";

.md-layout-item {
  margin-top: 8px;
  margin-bottom: 8px;
  transition: .3s $md-transition-stand-timing;

  // &:after {
  //   width: 100%;
  //   height: 100%;
  //   display: block;
  //   background: md-get-palette-color(purple, 200);
  //   content: " ";
  // }
}

.part {
  margin: 30px 0;
}
.works-container {
  margin: auto;
  // width: 70%;
}
.works-menubar {
  margin-bottom: 5em;
}
.works {
  list-style: none;
  margin: 0;
  padding: 0;
}
.work {
  margin: 0 0 5em;
  text-align: left;
  cursor: pointer;
}

</style>
