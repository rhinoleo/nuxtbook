<template>
    <div id="work-intro" >
      <!-- <h2 v-if="work.type == 'autre'" class="work-name work-type-autre" :to="'works/' + index">
            {{ work.name }}
      </h2>
      <h2 v-if="work.type == 'design'" class="work-name work-type-design" :to="'works/' + index">
        {{ work.name }}
      </h2>
      <h2 v-if="work.type == 'insitu'" class="work-name work-type-insitu" :to="'works/' + index">
        {{ work.name }}
      </h2> -->
      <h2 v-if="work.type == 'autre'" class="work-name work-type-autre">
            {{ work.name }}
      </h2>
      <h2 v-if="work.type == 'design'" class="work-name work-type-design">
        {{ work.name }}
      </h2>
      <h2 v-if="work.type == 'insitu'" class="work-name work-type-insitu">
        {{ work.name }}
      </h2>
      <div v-if="work.authors" class="work-date-float">{{ work.date }}</div>
      <div v-else class="work-date">{{ work.date }}</div>
      <div v-if="work.authors" class="work-authors">| avec {{ work.authors }}</div>
      <div class="work-summary">{{ work.summary }}</div>
      <div class="work-picture" :style="{ backgroundImage: 'url(' + work.picture + ')' }"></div>
      <div @click="testRequest($event)" class="work-text">{{ work.text }}</div>
      <div class="work-description">{{ work.description }}</div>
    </div>
</template>
<script>
import axios from '~/plugins/axios'
import _ from 'lodash'
import store from '~/store'

export default {
name: 'work-intro',
  props: ['work' ],
  data () {
    return {
      // active: false

    }
  },
  head () {
    return {
      title: 'Work'
    }
  },
  computed: {
  },
  methods: {
    // mouseOver: function(){
    //   this.active = !this.active;   
    // }
  },
}
</script>

<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables";
@import "~vue-material/src/theme/engine";

@import "~/assets/css/main.scss";

.work-date, .work-date-float, .work-authors {
  font-weight: 700;
  font-size: 0.7em;
  margin: 1em 0 0;
}
.work-date-float {
  float:left;
}
.work-authors {
  margin: 1em 0 0 3em;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.work-description {
  font-size: 0.7em;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.work-name {
  font-weight: 300;
  font-size: 1.5em;
  margin: 0;
}
.work-picture {
  height: 15em;
  background: no-repeat center;
  background-size: cover;
}
.work-summary {
  font-weight: 700;
  font-size: 0.7em;
  margin: 0 0 0.5em;
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
