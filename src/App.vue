<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  // methods: {
  //   getC() {
  //     this.axios
  //       .post(this.baseUrl + `/captcha/sent?phone=${this.phone}`)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   },
  //   login(){
  //     this.axios
  //       .post(this.baseUrl + `/login/cellphone?phone=${this.phone}&password=${this.password}`)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }
  // },
};
</script>

<style>
</style>
