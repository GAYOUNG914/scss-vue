<template>
<footer id="footer">
  <div class="footer_top">
    <!-- footer 상단 영역 -->
    <div class="container">
      <div class="row">
        <div class="column footer_logo">
          <!-- footer logo -->
          <h3>
            <router-link to="/">Xwood</router-link>
          </h3>
        </div>
        <div class="column">
          <!-- site map -->
          <h4>site map</h4>
          <ul>
            <li v-for="list in menuList">
              <router-link :to="list.alink">{{list.text}}</router-link>
            </li>
          </ul>
        </div>
        <div class="column">
          <!-- contact us -->
          <h4>contact us</h4>
          <p>
            A108 Adam street<br>
            New York, NY 535022<br>
            United states<br>
            <strong>phone&nbsp;:&nbsp;</strong><a href="tel=+82-010-0000-0000">+82-010-0000-0000</a><br>
            <strong>Email&nbsp;:&nbsp;</strong><a href="mailto=mymail@naver.com">mymail@naver.com</a><br>
          </p>
        </div>
        <div class="column news">
          <!-- news -->
          <h4>news</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet,
            consectetur adipisicing elit
          </p>
          <form action="">
            <input type="search" name="search">
            <input type="submit" value="search">
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <!-- footer 하단 영역 -->
    <div class="coypyright">
      ⓒcopryright <strong>mypage</strong> .All Rights Reserved.
    </div>
    <div class="credits">
      Designed By <a href="mailto:mymail@naver.com">My Name</a>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      menuList: [{
          text: 'company',
          alink: '/company'
        },
        {
          text: 'product',
          alink: '/product'
        },
        {
          text: 'gallery',
          alink: '/gallery'
        },
        {
          text: 'community',
          alink: '/notice'
        },
        {
          text: 'location',
          alink: '/location'
        }
      ]
    }
  }
}
</script>
