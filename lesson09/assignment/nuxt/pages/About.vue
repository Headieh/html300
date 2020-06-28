<template>
<div class='page'>
  <div class='carousel'>
    <b-row class="justify-content-md-center">
      <app-caro :card='decks'></app-caro>
    </b-row>
  </div>

  <div class="about">
    <div v-for="(stuff, idx) in accordionObject" :key='idx' class="panel panel-default">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle="'accordion-'+idx" variant="info">{{stuff.title}}</b-button>
        </b-card-header>
        <b-collapse :id="'accordion-'+idx" visible accordion="my-accordion" role="tabpanel">
          <b-card-body v-if="typeof(stuff.text)=='string'">
            <b-card-text>{{ stuff.text }}</b-card-text>
          </b-card-body>
          <b-card-body v-else>

            <li v-for="sets in stuff.text" :key="sets.q">
              <div class='question'>
                {{ sets.q}}
              </div>
              <div class='answer'>
                {{ sets.a}}
              </div>
            </li>

          </b-card-body>




        </b-collapse>
      </b-card>
    </div>
  </div>
</div>
</template>



<style scoped land='scss'>
.page{
  padding:1rem;
}
.question {
  list-style-type: disc;
}

.answer {
  list-style-type: none;
}

.about {
  margin-top: 2rem;
}

header,
a {
  background-color: grey;
  color: black;
  font-weight: bold;
  border: none;
}

a:hover,
a:focus {
  color: white;
  background-color: grey;
}
</style>

<script>
import Caro from '@/components/Carousel.vue'
import {
  accordionObject,
  decks
} from '../data/util.js'

export default {
  name: 'About',

  components: {
    'app-caro': Caro
  },


  data() {
    return {
      accordionObject: accordionObject,
      decks: decks
    }
  },
}
</script>
