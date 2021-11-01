<template>
  <van-row id="footer">
    <van-col span="6"  @click="goHome"
      ><van-icon name="wap-home-o" size="0.5rem"/><span
        >发现音乐</span
      ></van-col
    >
    <van-col span="6"  @click="goMymusic"
      ><van-icon name="contact" size="0.5rem"/><span>我的音乐</span></van-col
    >
    <van-col span="6" @click='goFriend'
      ><van-icon name="friends-o" size="0.5rem" /><span>朋友</span></van-col
    >
    <van-col span="6" @click="goUser"
      ><van-icon name="user-o" size="0.5rem" /><span>账号</span></van-col
    >
  </van-row>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goUser() {
      let name = "denglu";
      if (localStorage.getItem('userID')) {
        name = "zhanghao";
      }
      this.$router.push({
        name: name,
      });
    },
    goHome(){
      this.$router.push({
        name:'zhuye'
      })
    },
    goMymusic(){
      this.$router.push({
        name:'myyinyue'
      })
    },
    goFriend(){
      this.$router.push({
        name:'pengyou'
      })
    }
  },
};
</script>

<style lang="less" scoped>
#footer {
  height: 8%;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e1e1e1;
  background-color: #fff;
  display: flex;
  align-items: center;
  .van-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.2rem;
  }
}
</style>
