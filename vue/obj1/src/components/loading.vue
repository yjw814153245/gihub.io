<template>
  <div class="loading">
    <img src="../../static/images/loading2.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '你好 Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   @import '../assets/sass/base.scss';
  .loading{
    img{
      width: 100%;
      height: 100%;
      margin-top: rem(200px);
    }
  }
</style>
