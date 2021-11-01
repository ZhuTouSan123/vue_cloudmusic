<template>
  <div id="user">
    <div class="user-img">
      <img :src="userValue.userimg" alt="" />
    </div>
    <h4>{{ userValue.name }}</h4>
    <van-button type="info" @click="logout">注销</van-button>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "User",
  data() {
    return {
        userValue: {
        userimg: "",
        name: "",
      },
    };
  },
  components: { Footer },
  methods: {
    getUser() {
      this.axios({
        method: "post",
        url: `${
          this.$store.state.baseUrl
        }/user/detail?uid=${localStorage.getItem("userID")}`,
        withCredentials: true,
      }).then((res) => {
        this.userValue.userimg = res.data.profile.avatarUrl;
        this.userValue.name = res.data.profile.nickname;
      });
    },
    logout() {
      this.axios({
        method: "post",
        url: `${this.$store.state.baseUrl}/logout`,
        withCredentials: true,
      }).then((res) => {
        alert("注销成功");
        localStorage.removeItem("userID");
        this.$router.push({ name: "denglu" });
      });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style lang="less" scoped>
img {
  height: 2rem;
}
</style>
