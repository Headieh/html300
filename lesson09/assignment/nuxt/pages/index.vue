<template>
<div class='Home'>
  <b-row class="justify-content-md-center">
    <b-col md='6' sm="12">
  <!--  <app-jumbo></app-jumbo>-->

  </b-col></b-row>
         <b-row class="justify-content-md-center">
           <b-col md='6' sm="12">
   <app-caro :card='decks'></app-caro>
 </b-col>
</b-row>
</div>
</template>

<script>
import { decks } from '../data/util.js'
//import your components here
import Jumbo from '@/components/Jumbotron.vue'
import Caro from '@/components/Carousel.vue'
export default {
    name: 'Home',
    components: {
        'app-jumbo': Jumbo,
        'app-caro': Caro
    },
    data() {
        return {
            decks: decks
        }
    },
}
</script>

<style lang='scss'>
.intro{
  text-align: center;
  width: 100%;
}

.carousel{
  margin: 0 auto;
}

</style>
