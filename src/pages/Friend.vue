<template>
  <div>
    朋友
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name:'Friend',
  components:{Footer},
  beforeRouteEnter (to, from, next) {
    if(localStorage.getItem('userID')){
      next()
    }else{
      alert('朋友模块需要登录后才能查看')
    }
  }
}
</script>

<style>

</style>