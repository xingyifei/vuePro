<template>
<div>
  <Header />
  <div class="article-box">
    <div>{{this.txt}}</div>
  </div>
</div>
  
</template>

<script>
import Header from '../../components/Header'
  export default {
    components: { Header },
    data() {
      return {
        txt: '',
      }
    },
    mounted () {
      this.$store.dispatch("getarticleList")
      let arr = this.$store.state.articleList
      let type = this.$route.params.id
      let txtarr = arr.filter((item) => {
        return item.id == type
      })
      this.txt = txtarr[0].txt
    },
    methods: {
      
    }
  }
</script>

<style>
.article-box {
  width: 1000px;
  height: 500px;
  margin: 16px auto;
  background: #ffffff;
  padding: 16px;
}
</style>

