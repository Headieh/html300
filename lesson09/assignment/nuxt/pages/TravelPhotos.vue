<template>
<div class='travel-photos'>
    <section class="images" id="belize">
        <h2 > Belize</h2>
        <div v-for="(item, idx) in decks" :key="idx">
            <div v-if='item.location == "Belize"'>
                <app-photos :card='item'></app-photos>
            </div>
        </div>
    </section>
    <section class="images" id="costarica">
        <h2 > Costa Rica</h2>
        <div v-for="(item, idx) in decks" :key="idx">
            <div v-if='item.location == "Costa Rica"'>
                <app-photos :card='item'></app-photos>
            </div>
        </div>
    </section>
    <section class="images" id="croatia">
        <h2 >Croatia</h2>
        <div v-for="(item, idx) in decks" :key="idx">
            <div v-if='item.location == "Croatia"'>
                <app-photos :card='item'></app-photos>
            </div>
        </div>
    </section>
    <section class="images" id="italy">
        <h2 >Italy</h2>
        <div v-for="(item, idx) in decks" :key="idx">
            <div v-if='item.location == "Italy"'>
                <app-photos :card='item'></app-photos>
            </div>
        </div>
    </section>
    <section class="images" id="thailand">
        <h2 >Thailand</h2>
        <div v-for="(item, idx) in decks" :key="idx">
            <div v-if='item.location == "Thailand"'>
                <app-photos :card='item'></app-photos>
            </div>
        </div>
    </section>
    <!-- Other should not be shown but is there incase new continent needs to be added -->
    <div v-for="(item, idx) in decks" :key="idx">
        <div v-if='!["Thailand", "Costa Rica", "Croatia", "Italy", "Belize"].includes(item.location)'>
            <section class="images" id="other">
                <h2 >Other</h2>
                <app-photos :card='item'></app-photos>
            </section>
        </div>
    </div>

    <footer>

      <a href="#" ref="btnShow" @click="showModal('photocred')" class="credit">Photo Credits</a>
      <b-modal id="photocred" title='Photo Credits' size="xl">
        <div class="d-block">

          <p style="font-size: 0.9rem;font-style: italic;">
            <a href="https://www.flickr.com/photos/90366094@N00/4377650076" target="_blank">"baby elephant"</a>
            <span> by <a href="https://www.flickr.com/photos/90366094@N00" target="_blank">roberta zouain</a></span>
             is licensed under
             <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" target="_blank" style="margin-right: 5px;">CC BY-NC-SA 2.0</a>
            </p>


<p style="font-size: 0.9rem;font-style: italic;">
  <a href="https://www.flickr.com/photos/10185281@N05/1007499510" target="_blank">"....."</a>
  <span> by <a href="https://www.flickr.com/photos/10185281@N05" target="_blank">friedwater</a></span>
  is licensed under
  <a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html"  target="_blank" style="margin-right: 5px;">CC BY 2.0</a>
</p>



<p style="font-size: 0.9rem;font-style: italic;">
  <a href="https://www.flickr.com/photos/66003893@N00/819233982" target="_blank">"Trevi Fountain"</a>
  <span> by <a href="https://www.flickr.com/photos/66003893@N00" target="_blank">trozbo</a></span>
  is licensed under
  <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" target="_blank" style="margin-right: 5px;">CC BY-NC-SA 2.0</a>
</p>

<p style="font-size: 0.9rem;font-style: italic;">
  <a href="https://www.flickr.com/photos/33997420@N00/14879203024" target="_blank">"Hvar"</a>
  <span> by <a href="https://www.flickr.com/photos/33997420@N00" target="_blank">alchen_x</a></span>
   is licensed under
   <a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" target="_blank" style="margin-right: 5px;">CC BY-SA 2.0</a>
 </p>

 <p style="font-size: 0.9rem;font-style: italic;">
   <a href="https://www.flickr.com/photos/20777644@N05/3536595790" target="_blank">"DSC_0381"</a>
   <span> by <a href="https://www.flickr.com/photos/20777644@N05" target="_blank">amslerPIX</a></span>
    is licensed under <a target="_blank" href="https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC 2.0</a>
  </p>


<p style="font-size: 0.9rem;font-style: italic;">
  <a href="https://www.flickr.com/photos/79409460@N00/2277955191" target="_blank">"Cruise 2008 Day 4 Belize City"</a>
  <span> by <a href="https://www.flickr.com/photos/79409460@N00" target="_blank">schne056</a></span>
   is licensed under
   <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=html" target="_blank" style="margin-right: 5px;">CC BY-NC-ND 2.0</a>

 </p>

 <p style="font-size: 0.9rem;font-style: italic;">
   <a href="https://www.flickr.com/photos/88827093@N00/32293308606" target="_blank">"Mask Temple"</a>
   <span> by <a href="https://www.flickr.com/photos/88827093@N00" target="_blank">SdosRemedios</a></span>
    is licensed under
    <a href="https://creativecommons.org/licenses/by-nd/2.0/?ref=ccsearch&atype=html" target="_blank" style="margin-right: 5px;">CC BY-ND 2.0</a>
</p>


        </div>
      </b-modal>




    </footer>



</div>



</template>


<script>

import Images from '@/components/Images.vue'
import { decks } from '../data/util.js'
export default {
    name: 'TravelPhotos',
    components: {
        'app-photos': Images
    },
    data() {
        return {
            decks: decks
        }
    },
    methods: {
      showModal(id) {
        console.log('modal id', id)
        this.$root.$emit('bv::show::modal', id, '#btnShow')
      },
      hideModal(id) {
        this.$root.$emit('bv::hide::modal', id, '#btnShow')
      },
      toggleModal(id) {
        this.$root.$emit('bv::toggle::modal', id, '#btnToggle')
      }

    }
}
</script>

<style scoped lang='scss'>
@import './main.scss';
section {
    display: block;
    vertical-align: top;
    padding: .5rem;
}
footer{
  text-align: left;
}
.travel-photos{
  padding:1rem;
}
</style>
