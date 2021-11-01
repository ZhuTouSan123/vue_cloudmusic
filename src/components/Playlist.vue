<template>
  <div id="playlist">
    <van-row class="playlist-title">
      <van-col span="20" class="playlist-title-left"
        ><van-icon name="notes-o" size="0.4rem" />推荐歌单</van-col
      >
      <van-col span="4" class="playlist-title-right"
        >更多<van-icon name="arrow" size="0.2rem"
      /></van-col>
    </van-row>
    <div class="playlist-main">
      <div v-for="p in playlists" :key="p.id" @click="playlistShow(p.id)">
        <img :src="p.coverImgUrl">
        <p>{{p.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  data() {
    return {
      playlists:[]
    }
  },
  methods: {
    getPlaylist(){
      this.axios({
        method:'post',
        url:`${this.$store.state.baseUrl}/top/playlist/highquality?limit=15`,
        withCredentials: true,
      })
      .then(res=>{
        this.playlists = res.data.playlists
      })
    },
    playlistShow(id){
      this.$router.push({
        name:'gedan',
        params:{id}
      })
    }
  },
  mounted() {
    this.getPlaylist();
  },
};
</script>

<style lang="less" scoped>
#playlist {
  margin-top: 0.2rem;
  width: 100%;
  height: 8rem;
  .playlist-title {
    font-size: 0.24rem;
    display: flex;
    align-items: center;
    .van-col {
      display: flex;
      align-items: center;
    }
  }
  .playlist-main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: column;
      width: 30%;
      align-items: center;
      box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.3);
      margin: 0.1rem 0;
      border-radius: 0.15rem;
      overflow: hidden;
      img{
        width: 100%;
      }
      p{
        font-size: 0.12rem;
      }
    }
  }
}
</style>
