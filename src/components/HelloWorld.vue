<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/home"><el-button round>进入</el-button></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.hello {
  text-align: center;
}
</style>


