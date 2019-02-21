<template>
  <div class="share">
    <topic-list :items="items"></topic-list>
  </div>
</template>

<script>
import {getTopics} from '@/getdata/getTopic.js';
import topicList from '@/components/topics/List';
export default {
  name: 'share',
  data () {
    return {
      items:[]
    }
  },
  mounted: function () {
      getTopics({tab:'share',limit:20,page:1}).then((response)=>{
        this.items = response.data.data;
      })
    },
  
  components:{
    // 主题列表组件
    topicList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/sass/base.scss';
  @import '../../assets/sass/itemlist.scss';

</style>
