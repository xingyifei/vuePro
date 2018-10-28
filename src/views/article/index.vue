<template>
  <div>
    <div>{{this.txt}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        txt: '',
      }
    },
    mounted () {
      this.$store.dispatch("getarticleList")
      let arr = this.$store.state.articleList
      let type = this.$route.params.id
      let txtarr = arr.filter((item, index) => {
        return item.id == type
      })
      console.log(txtarr[0].txt)
      this.txt = txtarr[0].txt
    },
    methods: {
      
    }
  }
</script>