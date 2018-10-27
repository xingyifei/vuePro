<template>
  <div>
    <el-input
      placeholder="请输入内容"
      v-model="input10"
      clearable>
    </el-input>
    <ul>
      <li v-for="(item,index) in articleList" :key="index" @click="clickfunc(index)">
        <div>
          {{item.title}}
        </div>
      </li>
      
    </ul>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        input10: '',
        articleList: []
      }
    },
    mounted () {
      this.$store.dispatch("getarticleList")
      this.articleList = this.$store.state.articleList
    },
    methods: {
      clickfunc(e) {
        console.log(e, this)
        this.$router.push({
          path: `/article/${e}`
        })
      }
    }
  }
</script>

<style>
ul li {
  display: block;
  padding: 8px 16px;
  cursor: pointer;
  border-bottom: 1px dotted #efefef;
}
</style>


