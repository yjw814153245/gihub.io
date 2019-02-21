<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <router-view/>
    <nav class="footer">
      <ul>
        <router-link to="/" tag="li" :class="resPath=='index'?'mo':''">
          <span class="iconfont icon-shouye"></span>
          <p>首页</p>
        </router-link>
        <router-link to="/gzh" tag="li" :class="resPath=='gzh'?'mo':''">
          <span class="iconfont icon-shuji"></span>
          <p>小说</p>
        </router-link>
        <router-link to="/me" tag="li" :class="resPath=='me'?'mo':''">
          <span class="iconfont icon-liren"></span>
          <p>美图</p>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 计算属性
  computed:{
    resPath:function(){
      var arr = this.$route.path.split('/');
      return arr[1];
    }
  }
}
</script>

<style lang="scss">
  @import './assets/sass/base.scss';
  
  nav.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: rem(100px);
    background: #333;
    ul{
      display: flex;
      font-size: rem(30px);
      li{
        width: 33%;
        color: #fff;
        span{
          display: block;
          font-size: rem(45px);
          text-align: center;
          margin-top: rem(10px);
        }
        p{
          text-align: center;
          font-size: rem(30px);
        }
        &.mo{
          color:pink;
        }
       
      }
      // .router-link-exact-active{
      //     background: #abcdef;
      //     color: #000;
      //   }
    }
  }
</style>
