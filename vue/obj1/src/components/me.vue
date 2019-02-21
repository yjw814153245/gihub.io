<template>
 <div class="index">
    <!-- <ul v-for="item in items">
      <li>{{item.author_name}}</li>
    </ul> -->
    <nav>美女</nav>
    <ul class="items">
      <li class="item" v-for="item in items">
        <img :src="item.url" alt="">
        <!-- <div>{{item.type}}</div> -->
  
      </li>
    </ul>
 </div>
</template>
<script>
import axios from 'axios'
// import {getTopics} from '@/getdata/getTopic.js';

export default {
  name: 'All',
  data () {
    return {
      items: []
    }
  },
 mounted: function () {
    axios.get('https://www.apiopen.top/meituApi?page=3').then((response)=>{
      this.items = response.data.data;
      // console.log(this.items);
    });



  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/sass/base.scss';

  .index{
    // margin-top: rem(100px);
    margin-bottom: rem(130px);
    img{
      width: 100%;
      // display: flex;
      
    }
  }
  nav{
    width: 100%;
    height: rem(90px);
    line-height: rem(90px);
    text-align: center;
    background: #000;
    color: #fff;
    font-size: rem(40px);
    font-weight: 500;
    letter-spacing: rem(30px);
  }
</style>
