<template>
<div>
  <Header />
  <div class="card">
    <div class="card-userCover">
      <div class="card-userCover-bg">
        <!-- <img src="../../assets/bg.jpg" alt=""> -->
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card-wrapper-content">
        <div class="card-wrapper-contentheader">
          <h1>
            <span>{{this.infornamedata.name}}</span>
            <span>{{this.infornamedata.enname}}</span>
          </h1>
        </div>
        <div class="card-wrapper-contentbody">

          <div v-if="infornamedata.sex === 'girl'">
            <i class="el-icon-success"></i>
          </div>
          <div class="card-wrapper-contentbodyinfo">
            <span>一个人</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mask-outer">
      <div class="mask">
        <img src="../../assets/header.jpg" alt="">
      </div>
    </div>
    
  </div>

  <div class="card">
    <div class="card-content">
      <div class="card-content-left">
        <div class="mask-outer">
          <div class="mask">
            <img src="../../assets/header.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="card-content-right">
        <div class="card-content-right-header">
          <h1><span>{{this.infornamedata.name}}</span></h1>
          <router-link to='/'>返回我的主页<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <ul>
          <li class="field" v-for="(item,index) in infornamedata.list" :key="index">
            <div>{{item.name}}</div>
            <div>{{item.value}}</div>
          </li>
        </ul> 
      </div>              
    </div>
  </div>
</div>
  
</template>

<script>

import Header from '../../components/Header'
export default({
  components: { Header },
  data () {
    return {
      infornamedata: {
        name: 'nnqiu',
        enname: 'Chyna',
        sex: 'girl',
        list: [
          {name: '性别', value: '女'},
          {name: '一句话', value: '嗯'},
          {name: '职业', value: '前端工程师'},
          {name: '学历', value: '本科'},
        ]
      }
    }
  }
})
    
</script>

<style>
  .card {
    width: 1000px;
    position: relative;
    width: 1000px;
    margin: 16px auto;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-sizing: border-box;
  }
  .card-userCover {
    height: 132px;
    background: #999;
  }
  .card-userCover-bg {
    background-image: url(../../assets/bg.jpg)
  }
  .card-wrapper {
    height: 108px;
  }
  .card-wrapper-content {
    padding-top: 16px;
    padding-left: 32px;
    border-left: 196px solid transparent;
  }
  h1 span:nth-child(1) {
    font-size: 26px;
    font-weight: 600;
    font-synthesis: style;
    color: black;
  }

  h1 span:nth-child(2) {
    margin-left: 12px;
    font-size: 18px;
    white-space: nowrap;
    color: black;
  }

  .card-wrapper-contentbody {
    display: flex;
  }

  .card-wrapper-contentbodyinfo {
    margin-left: 16px;
  }

  .mask-outer {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 24px;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    background-color: #fff;
    border: 4px solid #fff;
    border-radius: 8px;
    width: 168px;
    height: 168px;
  }
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: #ffffff;
    -webkit-transition: opacity .2s ease-in;
    transition: opacity .2s ease-in;
    width: 168px;
    height: 168px;
  }
  .mask img {
    width: 100%;
    height: 100%;
  }
  .card-content {
    display: flex;
  }
  .card-content-left {
    width: 210px;
    height: 500px;
  }
  .card-content-left img {
    width: 168px;
    height: 168px;
  }
  .card-content-right {
    width: 790px;
    height: 500px;
    padding: 16px;
  }
  .card-content-right-header {
    overflow: hidden;
  }
  .card-content-right-header h1 {
    float: left;
  }
  .card-content-right-header a {
    float: right;
    line-height: 30px;
  }
  .field {
    display: flex;
    padding: 30px 0;
    border-bottom: 1px solid #ebebeb;
  }
  .field div:nth-child(1) {
    width: 164px;
    font-size: 15px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 36px;
    color: #444;
  }
  .field div:nth-child(2) {
    width: 564px;
    line-height: 36px;
  }
</style>

