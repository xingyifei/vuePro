<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"
      background-color="#303d4a"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
      <el-menu-item index="2"><a href="https://www.jianshu.com/u/73ed03495ab6" target="_blank">简书</a></el-menu-item>
      <el-menu-item index="3"><a href="https://github.com/nnqiu" target="_blank">github</a></el-menu-item>
      <el-menu-item index="4"><router-link to="/home">home</router-link></el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-service"></i>
        <i class="el-icon-setting"></i>
        <img class="header-img" src="../../assets/header.jpg" alt="">
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      }   
    },
    methods: {
      handleSelect() {

      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  } 
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .header-img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
</style>

