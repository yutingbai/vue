<template>
  <div id="app">
    <router-view></router-view>
    <ul class="footer">
      <li class="footer-item"><router-link to="/search">搜索</router-link></li>
      <li class="footer-item"><router-link to="/">收藏</router-link></li>
      <li class="footer-item"><router-link to="/mine">我的</router-link></li>
    </ul>
  </div>
</template>
<style lang="stylus">
*{
  margin:0;
  padding :0;
  list-style :none;
  text-decoration :none;
  color:#666;
}
.footer{
  display: flex;
  background :#eee;
  position :fixed;
  bottom :0;
  width 100%;
  height :50px;
  &-item{
    flex-grow:1;
    text-align:center;
    line-height :50px;
  }
}
</style>
