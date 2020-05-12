<template>
 <div>
 <topbar></topbar>
 11111111111111111
 </div>
</template>

<script>
import topbar from "@/components/nav/topbar/topbar.vue"
import footbar from "@/components/footer/footer.vue"
  export default {
      components: {
    topbar,
    footbar
  },
      mounted() {
         
      },
    data() {
      return {
      
      }
    },
    methods: {
      
    }
  }
</script>
<style lang="scss">
  .usernameInput
  {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    width:120px;
  }
</style>
