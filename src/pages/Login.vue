<template>
  <div id="login">
    <van-field
      v-model.lazy="phone"
      required
      label="手机号"
      placeholder="请输入手机号"
      :error-message="errmsg"
      @change="phoneIpu"
    />
    <van-field
      v-model.lazy="password"
      required
      label="密码"
      placeholder="密码"
      v-show="isShow"
      type="password"
    />
    <van-field
      v-model.lazy="sms"
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
      v-show="!isShow"
    >
      <template #button>
        <van-button
          size="small"
          type="primary"
          @click="getC"
          v-show="yzmShow"
          :disabled="dis"
          >发送验证码</van-button
        >
        <van-button size="small" type="primary" v-show="!yzmShow" disabled
          >{{ num }}后重新发送</van-button
        >
      </template>
    </van-field>
    <van-button size="large" type="danger" @click="login" class="loginBtn"
      >登录</van-button
    >
    <van-button size="mini" type="info" @click="changeShow" v-show="isShow"
      >使用短信验证码登录</van-button
    >
    <van-button size="mini" type="info" @click="changeShow" v-show="!isShow"
      >使用密码登录</van-button
    >
    <h1 @click="getCode">二维码</h1>
    <img :src="imgurl" alt="" />
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isShow: 1,
      errmsg: "",
      phone: "",
      password: "",
      sms: "",
      yzmShow: 1,
      num: 60,
      dis: true,
      imgurl: null,
    };
  },
  methods: {
    changeShow() {
      this.isShow = !this.isShow;
    },
    phoneIpu() {
      let reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
      if (!reg.test(this.phone)) {
        this.errmsg = "手机号格式不正确";
      } else {
        this.errmsg = "";
        this.dis = false;
      }
    },
    getC() {
      this.axios
        .post(`${this.$store.state.baseUrl}/captcha/sent?phone=${this.phone}`)
        .then((res) => {
          console.log(res.data);
          this.yzmShow = !this.yzmShow;
          let timer = setInterval(() => {
            this.num--;
            if (this.num < 1) {
              clearInterval(timer);
              this.yzmShow = !this.yzmShow;
              this.num = 60;
            }
          }, 1000);
        });
    },
    login() {
      this.axios({
        method: "post",
        url: `${this.$store.state.baseUrl}/login/cellphone?phone=${this.phone}&password=${this.password}&captcha=${this.sms}`,
        withCredentials: true,
      }).then((res) => {
        if (res.data.code == 200) {
          alert("登陆成功");
          this.axios({
            method: "post",
            url: `${this.$store.state.baseUrl}/login/status`,
            withCredentials: true,
          }).then((res) => {
            console.log(res.data.data);
            localStorage.setItem("userID", res.data.data.account.id);
            this.$router.push({
              name: "zhanghao",
            });
          });
        } else {
          alert("密码错误");
        }
      });
    },
    getCode() {
      let unikey = null;
      this.axios({
        method: "post",
        url: `${this.$store.state.baseUrl}/login/qr/key`,
      }).then((res) => {
        unikey = res.data.data.unikey;
        this.axios({
          method: "post",
          url: `${this.$store.state.baseUrl}/login/qr/create?key=${unikey}&qrimg=${unikey}`,
        }).then((res) => {
          this.imgurl = res.data.data.qrimg;
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.loginBtn {
  margin-bottom: 0.2rem;
}
</style>
