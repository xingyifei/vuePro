<template>
  <el-container>
    <Header />
    <Main />
    <el-footer>
      <p>
        <span>我是nnqiu</span>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
      </p>
      
    </el-footer>
  </el-container>
</template>

<script>
import Header from '../../components/Header'
import Main from '../../components/Main'

export default {
  name: 'homepage',
  components: { Header, Main },
}
</script>

<style>
.el-footer p {
  text-align: center;
  color: #ffffff;
}
.el-footer p span {
  text-align: center;
}
.el-footer p i {
  float: right;
  margin-left: 16px;
}
</style>


