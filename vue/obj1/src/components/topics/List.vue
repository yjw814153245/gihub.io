<template>
  <div class="list">
  	<!-- loading 组件 -->
    <loading v-if="!items.length"></loading>
  	<ul class="items">
  		<li class="item" v-for="item in items">
  			<img v-lazy="item.author.avatar_url" alt="">
  			<div class="tab">
  				<div class="mo" v-if="item.top">置顶</div>
  				<div class="mo" v-else-if="item.good">精华</div>
  				<div v-else>{{tabs[item.tab]}}</div>
  			</div>
  			<div class="title">{{item.title}}</div>
  		</li>
  	</ul>
  </div>
</template>

<script>
import loading from '@/components/Loading'; 

// 引入 axios 模块（封装的 ajax）
import axios from 'axios';
export default {
  name: 'items',
  data () {
    return {
      tabs:{
      	weex:'Weex',
      	ask:'问答',
      	job:'招聘',
      	share:'分享'
      }
    }
  },
  props:['items'],
  // 加载组件
  components:{
    // loading 组件
    loading
  }
	 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/sass/base.scss';
  @import '../../assets/sass/itemlist.scss';

</style>
