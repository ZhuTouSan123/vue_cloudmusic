<template>
  <div id="nav">
    <div class="nav-daily" @click="goDailysonglist">
      <van-icon name="good-job-o" size="0.6rem" /><span>每日推荐</span>
    </div>
    <div class="nav-private">
      <van-icon name="service-o" size="0.6rem" /><span>私人FM</span>
    </div>
    <div class="nav-playlist">
      <van-icon name="music-o" size="0.6rem" @click="goMySongList" /><span
        >歌单</span
      >
    </div>
    <div class="nav-rank" @click="goRank">
      <van-icon name="fire-o" size="0.6rem" /><span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    goRank() {
      this.$router.push({
        name: "phbliebiao",
      });
    },
    goDailysonglist() {
      this.$router.push({
        name: "dailygequmulu",
      });
    },
    goMySongList() {
      this.axios({
        method: "post",
        url: `${
          this.$store.state.baseUrl
        }/user/playlist?uid=${localStorage.getItem("userID")}`,
      }).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style lang="less" scoped>
#nav {
  margin-top: 0.2rem;
  display: flex;
  width: 100%;
  > div {
    width: 24%;
    padding: 0.15rem;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.3);
    span {
      font-size: 0.2rem;
    }
  }
}
</style>
