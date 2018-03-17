// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueTour from 'vue-tour'
require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB_zUS5YNAU6vsP8AayeiD8ZnATKvFv9wI',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
