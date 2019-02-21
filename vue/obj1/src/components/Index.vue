<template>
  <div class="index">
    <nav class="top">
      <ul>
        <router-link to="/index/" tag="li" class="mo">全部</router-link>
        <router-link to="/index/good" tag="li">精华</router-link>
        <router-link to="/index/share" tag="li">分享</router-link>
        <router-link to="/index/ask" tag="li">问答</router-link>
        <router-link to="/index/job" tag="li">招聘</router-link>
        <router-link to="/index/weex" tag="li">客户端测试</router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: '你好 Vue.js App'
    }
  }
}
</script>
<style scoped lang="scss">
  @import '../assets/sass/base.scss';
  nav.top{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: rem(90px);
    background: #f6f6f6;
    ul{
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: rem(90px);
      li{
        font-size: rem(33px);
        font-family: '楷体';
        padding: rem(8px) rem(18px);
        border-radius: rem(10px);
        font-weight: bold;
        color:#80BD01;
      }
      .router-link-exact-active{
          color:#fff;
          background: #80BD01;
      }
    }
  }
</style>