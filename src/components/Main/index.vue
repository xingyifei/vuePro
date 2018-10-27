<template>
  <el-main>
    <div class="container">
      <div class="aside">
        <Aside />
      </div>
      <div class="slider">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <img v-bind:src="item.imgurl" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    
    <Row />
  </el-main>    
</template>

<script>
  import store from '../../store'
  import Row from '../Row/index'
  import Aside from '../Aside/index'
  export default({
    components: { Row, Aside },
    data() {
      return {
        imgList: [
          {"imgurl": require('../../assets/img1.jpg')},
          {"imgurl": require('../../assets/img3.jpg')},
          {"imgurl": require('../../assets/img2.jpg')},
          {"imgurl": require('../../assets/img4.jpg')}
        ],
        currentDate: new Date(),
      }   
    },
    store,
    mounted () {
      this.$store.dispatch("getimgList")
      // this.imgList = this.$store.state.imgList
    },
  })
</script>

<style>
.container {
  display: flex !important;
  width: 100%;
}
.aside {
    width: calc(20% - 16px);
    height: 294px;
    overflow-y: scroll;
    margin-right: 16px;
    background: #ffffff;
    padding: 16px;
}
.slider {
  height: 326px;
  width: 80%;
}
img {
  width: 100%;
  height: 100%;
}
</style>

