<template>
  <div>{{this.txt[0].txt}}</div>
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
      this.txt = arr.filter((item, index) => {
        return item.id == type
      })
      console.log(this.txt)

    },
    methods: {
      
    }
  }
</script>