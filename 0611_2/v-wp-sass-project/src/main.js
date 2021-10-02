// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import CompanyComponent from './components/CompanyComponent'
import ProductComponent from './components/ProductComponent'
import GalleryComponent from './components/GalleryComponent'
import NoticeComponent from './components/NoticeComponent'
import FaqComponent from './components/FaqComponent'
import LocationComponent from './components/LocationComponent'

Vue.config.productionTip = false
Vue.component('header-component', HeaderComponent)
Vue.component('footer-component', FooterComponent)
Vue.component('company-component', CompanyComponent)
Vue.component('product-component', ProductComponent)
Vue.component('gallery-component', GalleryComponent)
Vue.component('notice-component', NoticeComponent)
Vue.component('faq-component', FaqComponent)
Vue.component('location-component', LocationComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
