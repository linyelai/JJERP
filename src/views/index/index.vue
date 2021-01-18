<template>
    <div>
      <div>  <Nav ></Nav></div>
      <div>  <Head></Head></div>
      <div class="clear-both"><GoodCate></GoodCate></div>
      <div class="clear-both"></div>
      <div class="good-list">  <GoodList ></GoodList></div>
      <div   class="clear-both"><Bottom></Bottom></div>
    </div>
</template>
<script>
import Nav from '../nav/nav'
import Head from '../nav/head'
import GoodList from '../goods/goodlist'
import GoodCate from '../goodsCategory/goodsCate'
import Bottom from '../nav/bottom'
export default {

    data() {
        return {
            
        }
    },
    components:{Nav,Head,GoodCate,GoodList,Bottom},
    methods: {
       
    },
}
</script>
<style lang="scss">
.clear-both{
    clear:both;
}
body{
    background-color: #f5f5f5;
   
}
 .margin-top{
        margin-top: 30px;
    }
.good-list{
      margin-top:20px;
      align-items: center;
    }
</style>