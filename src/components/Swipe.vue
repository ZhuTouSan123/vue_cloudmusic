<template>
  <van-swipe id="swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(b, index) in banners" :key="index">
      <a :href="b.url"><img :src="b.imageUrl"/></a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Swipe",
  data() {
    return {
      banners: [],
    };
  },
  methods: {
    getBanner() {
      this.axios
        .post(`${this.$store.state.baseUrl}/banner`)
        .then((res) => {
          this.banners = res.data.banners;
        })
    },
  },
  mounted() {
    this.getBanner();
  },
};
</script>

<style lang="less" scoped>
#swipe {
  margin-top: 0.2rem;
  width: 100%;
  font-size: 0;
  img {
    border-radius: 0.2rem;
    width: 100%;
  }
}
</style>
