'use strict'
//전역컴포넌트
Vue.component('footer-component',{
  template: '<footer><div class="inner"><div class="footer-header"><h2>logo</h2></div></div></footer>'
});

//router
//router component
const mainComp = { template: '<main><div class="container">index-contents</div></main>'};
const companyComp = { template: '<main><div class="container">company-contents</div></main>'};
const productComp = { template: '<main><div class="container">product-contents</div></main>'};
const galleryComp = { template: '<main><div class="container">gallery-contents</div></main>'};
const noticeComp = { template: '<main><div class="container">notice-contents</div></main>'};

let router = new VueRouter({
  routes: [
    { path: '/', component: mainComp },
    { path: '/company', component: companyComp },
    { path: '/product', component: productComp },
    { path: '/gallery', component: galleryComp },
    { path: '/notice', component: noticeComp }
  ]
});

let app = new Vue({
  el: '#app',
  data: {
    gnbList: [
      { text: 'company', path: '/company'},
      { text: 'product', path: '/product'},
      { text: 'gallery', path: '/gallery'},
      { text: 'notice', path: '/notice'}
    ]
  },
  router
});// 뷰 인스턴스에 라우터를 추가
