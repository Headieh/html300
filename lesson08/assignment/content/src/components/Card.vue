<template>
<!--https://codepen.io/RuudBurger/pen/bwjry-->
<div class='card-single'>
  <app-favs></app-favs>
  <div class="flipper" @click="flip()">
    <h2>{{card.location}}</h2>
  </div>
  <div class="card-flip" v-bind:class="{ 'is-flipped' : flipped }">
    <div class='card__face'>
      <div class="card__face--front">
        <div class="wrapper">
          <div class="zoom-effect-container">
            <div class="image-card">
              <b-img v-b-tooltip.hover title="Click name above to see more!" fluid :src="getImgUrl(card.images)" :alt="card.text"></b-img>
            </div>
          </div>
        </div>
      </div>
      <div class="card__face--back">
        {{ card.details }}
        <div class="card">
          <div class="card-block">

            <a href="#" @click="weatherClicked(card)" class="card-link">Weather</a>
            <weather :card='card'></weather>
            <a href="#" ref="btnShow" @click="showModal(card.id); getFile(card);" class="card-link">Itenerary Ideas</a>

            <b-modal :id="card.id" class="itnry" title='Itinerary' size="xl" >
                <h5 class="modal-title">{{card.location}}</h5>
              <div class="d-block">
                <itnry :card='card'></itnry>
              </div>
            </b-modal>

            <a :href="card.imagelink" target="_blank" class="card-link">Travel Photos</a>

          </div>
        </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
import $ from 'jquery'

import Favorite from '@/components/Favorite.vue'
import weather from '@/components/weather.vue'
import itinerary from '@/components/itinerary.vue'



export default {
  name: 'card',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  components: {
    'app-favs': Favorite,
    'weather': weather,
    'itnry': itinerary
  },
  data() {
    return {
      flipped: false
    }
  },
  methods: {
    flip: function() {
      this.flipped = !this.flipped;
      console.log(this.flipped)
    },
    getImgUrl: function(pic) {
      return require('@/assets/' + pic)
    },
    weatherClicked: function(card) {
      $('#weather-modal', '#' + card.id).modal('toggle').appendTo("body");
      //$('#weather-modal', '#'+card.id).appendTo("body");
    },

    getFile: function(card) {
      //import {features} from card.it
      console.log(card.it);
    },


    showModal(id) {
      console.log(id)
      this.$root.$emit('bv::show::modal', id, '#btnShow')
    },
    hideModal(id) {
      this.$root.$emit('bv::hide::modal', id, '#btnShow')
    },
    toggleModal(id) {
      this.$root.$emit('bv::toggle::modal', id, '#btnToggle')
    }

  }
};
</script>


<style scoped lang='scss'>
@import './src/main.scss';

.modal-title{
  text-align: center;
  padding-bottom: 1em;
  margin: auto;
}

.wrapper {
    width: auto;
    height: 100%;
    margin: 0 auto;
}

.zoom-effect-container {
    position: relative;
    width: auto;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.image-card {
    position: absolute;
    //width:auto;
    bottom: -20%;
    left: 0;
}

.image-card img {
    transition: 3s ease;
    object-fit: cover;
    width: 100%;
    height: 480px;
}

.zoom-effect-container:hover .image-card img {
    transform: scale(1.08);
}

.card-flip {
    perspective: 1000px;
}

.card-flip,
.card__face--back,
.card__face--front {
    width: auto;
    height: 15rem;
}

.card-flip.is-flipped .card__face {
    transform: rotateY(180deg);
}

.card__face {
    transition: transform 1s;
    transition-timing-function: linear;
    transform-style: preserve-3d;
    position: relative;
}

.card__face--back,
.card__face--front {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.card__face--front {
    width: 100%;
    z-index: 2;
    transform: rotateY(0deg);
}

a {
    display: block;
    padding: 5%;
    &:hover {
        font-weight: bold;
    }
}

.favs {
    margin-top: 2em;
    display: inline-block;
    padding-right: 0.5rem;
}

.card__face--back {
    transform: rotateY(180deg);
}

.card-block {
    height: 15rem;
    width: auto;
    overflow: hidden;
}

.flipper {
    margin-left: 1em;
    margin-top: 2em;
    width: auto;
    height: 8%;
    color: $lighten-black;
    vertical-align: top;
    position: relative;
    display: inline-block;
    cursor: pointer;
    &:after,
    &:before {
        @include underline-main;
    }
    &:before {
        left: 50%;
    }
    &:after {
        right: 50%;
    }
    &:hover {
        &:after,
        &:before {
            width: 50%;
            opacity: 1;
        }
    }
}
</style>
