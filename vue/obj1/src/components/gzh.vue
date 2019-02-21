<template>
 <div class="index">
    <!-- <ul v-for="item in items">
      <li>{{item.author_name}}</li>
    </ul> -->
    <nav>小说</nav>
    <ul class="items">
      <li class="item" v-for="item in items">
        <img :src="item.book_cover" alt="">
        <div class="cont">
          <div class="title">{{item.bookname}}</div>
          <div class="info">{{item.book_info}}</div>
          <div class="author">作者:{{item.author_name}}</div>
        </div>
        <div class="classname1">{{item.class_name}}</div>
        <div class="classname2">{{item.stat_name}}</div>  
  
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
 //  created () {
 //   this.$api.get('topics', null, r => {
 //     console.log(r)
 //     this.items=r.data;
 //     console.log(this.items);
 //   })
 // },
 mounted: function () {
    axios.get('https://www.apiopen.top/novelApi').then((response)=>{
      this.items = response.data.data;
      // console.log(this.items);
    });
  } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/sass/base.scss';
  @import '../assets/sass/itemlist2.scss';

  .index{
    // margin-top: rem(100px);
    margin-bottom: rem(130px);
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
