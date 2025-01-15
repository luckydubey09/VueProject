import Vue from 'vue';
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Import Vuetify CSS

Vue.use(Vuetify);

const vuetify = new Vuetify();

new Vue({

  vuetify, // Add the Vuetify instance to your Vue instance
  render: h => h(App),
}).$mount('#app');
