<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style lang="less">
html body #app{
  height: 100%;
  text-align: center;
  overflow: auto;
  background: #999;
}
</style>
