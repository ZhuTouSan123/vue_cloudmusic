<template>
  <div>
    <van-list>
      <van-cell v-for="r in ranklist" :key="r.id" :title="r.name" @click='goSonglist(r.id)'/>
    </van-list>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: "Ranklist",
  data() {
    return {
      ranklist: [],
    };
  },
  components:{Footer},
  methods: {
    getRanklist() {
      this.axios({
        method: "post",
        url: `${this.$store.state.baseUrl}/toplist`,
        withCredentials: true,
      }).then((res) => {
        this.ranklist = res.data.list
      });
    },
    goSonglist(id){
      this.$router.push({
        name:'gedan',
        params:{id}
      })
    }
  },
  mounted() {
    this.getRanklist()
  },
};
</script>

<style></style>
