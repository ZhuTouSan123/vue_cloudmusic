<template>
  <div>
    <van-list>
      <van-cell v-for="s in songs" :key="s.id" @click="goSong(s.id)"
        ><span class="songname">{{ s.name }}</span
        ><span class="singer"
          ><span v-for="a in s.ar">{{ a.name }}&nbsp;</span></span
        ></van-cell
      >
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
      songs: [],
      songlistID: "",
    };
  },
  components: { Footer },
  methods: {
    getSonglist(id) {
      this.axios({
        method: "post",
        url: `${this.$store.state.baseUrl}/playlist/detail?id=${id}`,
        withCredentials: true,
      }).then((res) => {
        this.songs = res.data.playlist.tracks;
      });
    },
    goSong(id) {
      this.$router.push({
        name: "gequ",
        params: { id },
      });
    },
    getSonglistID() {
      if (this.$route.params.id) {
        this.songlistID = this.$route.params.id;
        localStorage.setItem("songlistID", this.songlistID);
      } else {
        this.songlistID = JSON.parse(localStorage.getItem("songlistID"));
      }
    },
  },
  created() {
    this.getSonglistID();
  },
  mounted() {
    this.getSonglist(this.songlistID);    
  },
  beforeDestroy() {
    localStorage.setItem("songlistID", this.songlistID);
  },
};
</script>

<style lang="less" scoped>
.van-cell__value--alone {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .singer {
    text-align: end;
    width: 50%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
