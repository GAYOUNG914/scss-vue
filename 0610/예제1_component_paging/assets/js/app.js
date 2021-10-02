'use strict'
//전역컴포넌트
Vue.component('header-logo',{
  template: '<h1><a href="http://daum.net">Home</a></h1>'
});

Vue.component('footer-header',{
  template: '<div class="footer-header"><h2><a href="#">footer-header-logo</a></h2></div>'
});

let app = new Vue({
  el: '#app',
  data: {
    menuList: [
      {text: 'company', ahref: 'company.html'},
      {text: 'product', ahref: 'product.html'},
      {text: 'gallery', ahref: 'gallery.html'},
      {text: 'notice', ahref: 'notice.html'}
    ]
  },
  components: {
    'footer-list': {
      template: '<ul><li><a href="./company.html">company</a></li><li><a href="./product.html">product</a></li><li><a href="./gallery.html">gallery</a></li><li><a href="./notice.html">notice</a></li></ul>'
    }
  }
});
