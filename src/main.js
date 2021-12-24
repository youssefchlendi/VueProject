import { createApp } from 'vue';
import App from './App.vue';
// import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;
// import 'bootstrap';
// import 'jquery/src/jquery.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'popper.js';
// import '@popperjs/core';
import 'bootstrap';
import 'popper.js';
import jQuery from 'jquery';
window.$= window.jQuery=jQuery;
import './assets/all.scss';


// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Make BootstrapVue available throughout your project
// createApp.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// createApp.use(IconsPlugin)

createApp(App).mount('#app')
