<template>
  <div>
    <van-list
>
  <van-cell v-for="d in dailySongs" :key="d.id" @click="goDailysong(d.id)" :title="d.name" />
</van-list>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "Songlist",
  data() {
    return {
      dailySongs: [],
    };
  },
  components: { Footer },
  methods: {
    goDailysong(id) {
      this.$router.push({
          name:'gequ',
          params:{id}
      })
    },
    getDailySongs(){
      this.axios({
      method: "post",
      url: `${this.$store.state.baseUrl}/recommend/songs`,
      withCredentials: true,
    }).then((res) => {
      this.dailySongs = res.data.data.dailySongs
    });
    }
  },
  mounted() {
    this.getDailySongs()
  },
  beforeRouteEnter (to, from, next) {
    if(localStorage.getItem('userID')){
      next()
    }else{
      alert('每日推荐歌曲需要登录后才能查看')
    }
  }
};
</script>

<style></style>
