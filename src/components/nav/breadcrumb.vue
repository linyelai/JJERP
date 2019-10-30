<template>
  <div class="wq-breadcrumb">
    <div class="page-title" v-for="(item, index) in $route.meta" :key="index" v-if="index === index">
      {{ item }}
      
    
    </div>
   
  </div>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.wq-breadcrumb {
  right: 30px;
}
</style>
