<template>
  <van-row id="search">
    <van-col span="18"
      ><van-search
        v-model.lazy="value"
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
      </van-search
    ></van-col>
    <van-col span="6" class="btnbox"
      ><van-button @click="onSearch" round color="linear-gradient(to right, #ff6034, #ee0a24)">
        搜索
      </van-button></van-col
    >
  </van-row>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch() {
      this.axios({
        method:'post',
        url:`${this.$store.state.baseUrl}/cloudsearch?keywords=${this.value}`,
        withCredentials:true
      }).then(res=>{
        this.$router.push({
          name:'sousuoxiangqing',
          params:{songs:res.data.result.songs}
        })
      })
    },
  },
};
</script>

<style lang="less" scoped>
#search {
  width: 100%;
  display: flex;
  align-items: center;
  .btnbox {
    display: flex;
    .van-button {
      flex: 1;
    }
  }
}
</style>
