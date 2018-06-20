<template>
  <section class="container">
    <h1 class="title part">
      travaux
    </h1>
    <div class="works-container">
      <div class="works-menubar">
        <md-button class="md-raised" @click="filterAll()">tous les projets</md-button>
        <md-button class="md-raised" @click="filterDesign()">design de rue</md-button>
        <md-button class="md-raised" @click="filterInsitu()">interventions in situ</md-button>
        <md-button class="md-raised" @click="filterAutre()">autres pratiques</md-button>
      </div>
      <ul class="works md-layout md-gutter">
        <li v-for="(work, index) in orderedWorks" :key="index" class="work md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" @mouseover="mouseOver()" :class="{ 'md-elevation-1': active }">
          <!-- <nuxt-link v-if="work.type == 'autre'" class="work-label work-type-autre" :to="'works/' + index">
            {{ work.label }}
          </nuxt-link> -->
          <div v-if="work.type == 'autre'" class="work-label work-type-autre" :to="'works/' + index">
            {{ work.label }}
          </div>
          <div v-if="work.type == 'design'" class="work-label work-type-design" :to="'works/' + index">
            {{ work.label }}
          </div>
          <div v-if="work.type == 'insitu'" class="work-label work-type-insitu" :to="'works/' + index">
            {{ work.label }}
          </div>
          <div class="work-date">{{ work.date }}</div>
          <div class="work-summary">{{ work.summary }}</div>
          <div class="work-picture" :style="{ backgroundImage: 'url(' + work.picture + ')' }"></div>
          <div class="work-text">{{ work.text }}</div>
          <div class="work-description">{{ work.description }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import _ from 'lodash'

export default {
  async asyncData() {
    console.log('init asyncData')
    const response = await axios.get('https://book-73f3b.firebaseio.com/data.json')
    const data = await response
    return { works : response.data }
  },
  data () {
    return {
      works: [],
      onlyDesign: false,
      onlyInsitu: false,
      onlyAutre: false,
      active: false
    }
  },
  head () {
    return {
      title: 'Works'
    }
  },
  computed: {
    orderedWorks() {
      if(this.onlyDesign) {
        return _.filter(this.works, { 'type': 'design' })
      } else if(this.onlyInsitu) {
        return _.filter(this.works, { 'type': 'insitu' })
      } else if(this.onlyAutre) {
        return _.filter(this.works, { 'type': 'autre' })
      } else {
        return _.orderBy(this.works, ['date','label'], ['desc', 'asc'])
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
    // mouseOver: function(){
    //   this.active = !this.active;   
    // }
  },
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
}
.work-date {
  font-weight: 700;
  font-size: 0.7em;
  margin: 1em 0 0;
}
.work-description {
  font-size: 0.7em;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.work-label {
  font-weight: 300;
  font-size: 1.5em;
}
.work-picture {
  height: 15em;
  background: no-repeat center;
  background-size: cover;
}
.work-summary {
  font-weight: 700;
  font-size: 0.7em;
  margin: 0 0 1em;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.work-text {
  @include multiLineEllipsis($lineHeight: 1.2em, $lineCount: 3, $bgColor: white);
  margin: 1em 0;
  height:10em;
}
.work-type-autre {
  color: #CC0000;
}
.work-type-design {
  color: #FF9900;
}
.work-type-insitu {
  color: #999900;
}

</style>
