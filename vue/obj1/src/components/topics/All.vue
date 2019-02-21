<template>
  <div class="all">
  	<topic-list :items="items"></topic-list>
    <!-- <infinite-loading @infinite="infiniteHandler"></infinite-loading> -->
  </div>
</template>

<script>
// import axios from 'axios';
import {getTopics} from '@/getdata/getTopic.js';
import topicList from '@/components/topics/List';
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: 'All',
  data () {
    return {
    	items:[],
    	page:1
    }
  },
	mounted: function () {
	    getTopics({tab:'all',limit:20,page:this.page}).then((response)=>{
	      this.items = response.data.data;
	    })
  	},
	methods: {
	    infiniteHandler($state) {
	      setTimeout(() => {
	        // 查询 全部主题数据
	        getTopics({tab:'all',limit:20,page:++this.page}).then((response)=>{
	          // console.log(response.data.data);
	          // 把查询到的数据放到 items里
	          this.items = this.items.concat(response.data.data);
	          $state.loaded();
	        });
	      }, 500);
	    },
  	},
  components:{
    // 主题列表组件
    topicList,InfiniteLoading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/sass/base.scss';
 .all{
    margin-top: rem(90px);
    margin-bottom: rem(100px);
  }  

</style>