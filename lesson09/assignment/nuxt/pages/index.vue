<template>
<div class='home quote-container'>
<!--  <nuxt-link class="card-link" to="/trips">Enter Site</nuxt-link>
    <div class='quote-container'>-->
      <p v-if='this.quotes.q' class="quote">{{this.quotes.q.toLowerCase() | ALLCAPs }}</p>
      <p v-if='this.quotes.a' class='author'>{{this.quotes.a.toLowerCase() | PascalCase }}</p>
<!--<app-jumbo></app-jumbo>-->
</div><!--</div>-->
</template>

<script>
import {
  quotes
} from '../data/util.js'
//import Jumbo from '@/components/Jumbotron.vue'

export default {
  name: 'Home',
  components: {
      //'app-jumbo': Jumbo,
    //  'app-caro': Caro
  },
  methods: {
    startInterval: function() {
      setInterval(() => {

        if (this.textIndex < quotes.length){
          this.quotes = quotes[this.textIndex]
          this.textIndex = this.textIndex + 1

        }
        else {
          this.textIndex = 0
          this.quotes = quotes[this.textIndex]
        }
      }, 6500);
    }
  },


  mounted() {

    this.quotes = quotes[0];
    this.startInterval();
  },
  filters: {
      PascalCase(value) {
          return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
      },
      ALLCAPs(value) {
          return value.replace(value, x => x.toUpperCase());
      }

  },
  data() {
    var textIndex = 1
    return {
      quotes: quotes,
      textIndex: textIndex
    }
  },
}
</script>

<style scoped lang='scss'>
a {
    color: white;
}

.quote-container{
  display: flex;
  font-family: 'Shadows Into Light', sans-serif;
  justify-content: center;
  margin: 18%;
  align-items: center;
  flex-direction: column;

}
.home{
  height: 100vh;
  width: auto;
  margin:0;
  padding:0;
  background-image: linear-gradient(to bottom right, grey, lightblue);
}

.quote{
  font-size: x-large;
  font-weight: boldest;
  color: black;
}

.author{
  font-size: large;
  color: black;
}

</style>
