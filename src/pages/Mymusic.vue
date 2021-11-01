<template>
  <div>我的音乐
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name:'Mymusic',
  components:{Footer},
  beforeRouteEnter (to, from, next) {
    if(localStorage.getItem('userID')){
      next()
    }else{
      alert('我的音乐需要登录后才能查看')
    }
  }
}
</script>

<style>

</style>