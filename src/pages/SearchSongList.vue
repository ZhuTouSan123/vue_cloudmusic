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
export default {
  name:'SearchSongList',
  data() {
    return {
      songs:[]
    }
  },
  methods: {
    goSong(id) {
      this.$router.push({
        name: "gequ",
        params: { id },
      });
    },
    getSongs() {
      if (this.$route.params.songs) {
        this.songs = this.$route.params.songs;
        localStorage.setItem("searchsonglist", JSON.stringify(this.songs));
      } else {
        this.songs = JSON.parse(localStorage.getItem("searchsonglist"));
      }
    },
  },
  mounted() {
    this.getSongs();
  },
  beforeDestroy() {
    localStorage.setItem("searchsonglist", JSON.stringify(this.songs));
  },
}
</script>

<style lang='less' scoped>
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