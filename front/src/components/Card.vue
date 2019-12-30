<template>
  <div>
    Card
    <div v-if="loading">loading card ...</div>
    <div v-else>
      cid : {{cid}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cid:0,
      loading:false,
    }
  },
  watch:{
    '$route':{//라우트를 감시하다가 변경되면 실행.
      handler:'fetchData',
      immediate:true //즉시실행 created없어도딤
    }
  },
  // created(){//뷰가 시작할때 실행.
  //   this.fetchData()
  // },
  methods:{
    fetchData(){
      this.loading=true
      setTimeout(() => {
      this.cid = this.$route.params.cid
      this.loading=false
    },500)
    }
  }
  
}
</script>

<style>

</style>