//import Vue from 'vue'import App from './App.vue'import router from './router'import 'bootstrap'import BootstrapVue from 'bootstrap-vue'import './main.scss'Vue.use(BootstrapVue)import VueLayers from 'vuelayers'import 'vuelayers/lib/style.css'import $ from 'jquery'Vue.use(VueLayers, {dataProjection: 'EPSG:4326',})Vue.config.productionTip = falseimport Comp from '@/components/itinerary.vue'new Vue({el: '#modal-container',render: h => h(Comp)}).$mount('#bod')