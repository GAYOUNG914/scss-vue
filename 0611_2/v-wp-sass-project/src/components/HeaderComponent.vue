<template>
  <header id="header">
     <!-- 헤더 영역  -->
     <h1 id="top_logo">
       <a href="/">Xwood</a>
       <router-link to="/"></router-link>
     </h1>
     <nav id="top_nav">
       <ul>
         <li v-for="(list, index) in menuList">
           <router-link :to="list.alink">{{list.text}}</router-link>
           <ul v-if="index == 0" class='sub_menu'>
             <li v-for="list in companySubmenuList">
               <router-link :to="list.alink">{{list.text}}</router-link>
             </li>
             <!-- <li><router-link to="/company">introduce</router-link></li>
             <li><router-link to="/ci">ci</router-link></li>
             <li><router-link to="/history">history</router-link></li> -->
           </ul>
           <ul v-if="index == 3" class='sub_menu'>
             <li><router-link to="/notice">notice</router-link></li>
             <li><router-link to="/faq">faq</router-link></li>
           </ul>
         </li>
         <!-- <li>
           <a href="./company/introduce.html">Company</a>
           <ul class="submenu">
             <li><a href="./company/introduce.html">introduce</a></li>
             <li><a href="./company/ci.html">ci</a></li>
             <li><a href="./company/history.html">history</a></li>
           </ul>
         </li> -->
         <!-- <li><a href="./product/product.html">Product</a></li>
         <li><a href="./gallery/gallery.html">Gallery</a></li>
         <li><a href="./community/notice.html">Community</a></li>
         <li><a href="./location/location.html">Location</a></li> -->
       </ul>
     </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      menuList: [
        { text: 'company', alink:'/company'},
        { text: 'product', alink:'/product'},
        { text: 'gallery', alink:'/gallery'},
        { text: 'comunity', alink:'/notice'},
        { text: 'location', alink:'/location'},
      ],
      companySubmenuList: [
        { text: 'introduce', alink:'/company'},
        { text: 'ci', alink:'/ci'},
        { text: 'history', alink:'/history'}
      ],
      communitySubmenuList: [
        { text: 'notice', alink: '/community'},
        { text: 'faq', alink: '/faq'}
      ]
    }
  }
}
</script>
