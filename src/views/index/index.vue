<template>
    <div>
      <div>  <Nav></Nav></div>
      <div>  <Head></Head></div>
      <div class="clear-both"><GoodCate></GoodCate></div>
      <div class="clear-both"></div>
      <div >  <GoodList></GoodList></div>
    </div>
</template>
<script>
import Nav from '../nav/nav'
import Head from '../nav/head'
import GoodList from '../goods/goodlist'
import GoodCate from '../goodsCategory/goodsCate'
export default {
    data() {
        return {
            
        }
    },
    components:{Nav,Head,GoodCate,GoodList}
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
</style>