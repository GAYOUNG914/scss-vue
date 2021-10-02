<template>
  <main>
    <!-- 메인배너 영역-->
    <div class="mainbanner"></div>
    <!-- 컨텐츠 영역 -->
    <div class="container">
      <div class="content">
        <div class="inner">
          <div class="box items_2">
            <div class="items"><!--왼쪽 영역-->
              <h3 class="title">funiture</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
              <a href="./product/product.html" class="gbtn">More View</a>
            </div>
            <div class="items"><!--오른쪽영역 영역-->
              <img src="../assets/img/thumb_nail01.jpg" alt="thumb01">
            </div>
          </div>
        </div>
        <div class="inner">
          <div class="box items_2">
            <div class="items"><!--왼쪽 영역-->
              <img src="../assets/img/thumb_nail02.jpg" alt="thumb02">
            </div>
            <div class="items"><!--오른쪽영역 영역-->
              <h3 class="title">funiture</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
              <a href="./product/product.html" class="gbtn">More View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'main-component',
  data () {
    return {
      msg: 'this is main index'
    }
  }
}
</script>
