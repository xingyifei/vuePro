<template>
  <el-container>
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
          <!-- <img v-bind:scr="require('../../assets/header.jpg')"/> -->
          <i class="el-icon-service"></i>
          <i class="el-icon-setting"></i>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <div class="slider">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <img v-bind:src="item.imgurl">
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row :gutter="24">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../../assets/logo.png" class="image">
            <div style="padding: 14px;">
              <span>简单上手使用Vue-cli@3.0</span>
              <div>
                <el-button><a href="https://www.jianshu.com/p/55386ad59910" target="_blank">进入</a></el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../../assets/logo.png" class="image">
            <div style="padding: 14px;">
              <span>关于浏览器加载顺序</span>
              <div>
                <el-button><a href="https://www.jianshu.com/p/44f5cc7cd368" target="_blank">进入</a></el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../../assets/logo.png" class="image">
            <div style="padding: 14px;">
              <span>关于HTTP缓存</span>
              <div>
                <el-button><a href="https://www.jianshu.com/p/eb1ab21f087c" target="_blank">进入</a></el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../../assets/logo.png" class="image">
            <div style="padding: 14px;">
              <span>compose函数</span>
              <div>
                <el-button><a href="https://www.jianshu.com/p/2c49752f5c2f" target="_blank">进入</a></el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- <HelloWorld msg="hello"></HelloWorld> -->
    </el-main>
    <el-footer></el-footer>
  </el-container>
  
</template>

<script>
// import HelloWorld from '../../components/HelloWorld.vue'
export default {
  name: 'homepage',
  data() {
    return {
      imgList:[
        {imgurl: require("../../assets/logo.png")},
        {imgurl: require("../../assets/home1.jpg")},
        {imgurl: require("../../assets/home2.jpg")},
        {imgurl: require("../../assets/home3.jpg")},
      ],
      currentDate: new Date(),
      activeIndex: '1',
    }   
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
  // components: {
  //   HelloWorld
  // }
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
</style>
