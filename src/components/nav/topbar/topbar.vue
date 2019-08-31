<template>
  <div class="wq-topbar">
      <div><span class="sys-title">ERP</span><span><img src="../../../../static/images/avatar_15.png" class="person-icon"/></span><span class="username-label">admin</span></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeIndex: "1",
      moreTheme: "20a0ff",
      skinDialogVisible: false
    };
  },
  mounted() {
    let themeClassName = "";
    let localTheme = localStorage.getItem("themeValue");
    themeClassName = localTheme ? localTheme : "00a597";
    this.changeClass(document.body, "custom-" + themeClassName);
    this.moreTheme = themeClassName;
  },
  methods: {
    changeClass(element, className) {
      if (!element || !className) return;
      element.className = className;
    },
    handleSelect(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    },
    changeTheme(themeValue) {
      this.changeClass(document.body, "custom-" + themeValue);
      this.moreTheme = themeValue;
      localStorage.setItem("themeValue", themeValue);
    }
  }
};
</script>
<style lang="scss">
.wq-topbar {
  height:50px;
  background-color: #404040;
  padding-top:10px;
}
  .username-label
  {
   
    color:#ffffff;
     margin-left: 10px;
     vertical-align: top;
     line-height: 26px;
  }
  .person-icon
  {
    border-radius: 50%;
    width:26px;
    height: 26px;
    margin-left:1200px;
  }
.sys-title {
  color: #fff;
  font-size: 24px;
  margin-left: 40px;

}
</style>
