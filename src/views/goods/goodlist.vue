<template>
  <div class="searchResult" >
      <div v-for="item in goodlist" >
      <GoodItem></GoodItem>
      </div>
  </div>
</template>
<script>
import GoodItem from './goodItem.vue'
  export default {
    data() {
      return {
          
          goodlist:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},
          {id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19},{id:20}
          ]
      }
    },
    methods: {

    },
    components:{
        GoodItem
    }
  }
</script>
<style lang="scss">

  .searchResult{
      width:1440px;
      margin:auto;
      

  }
</style>
