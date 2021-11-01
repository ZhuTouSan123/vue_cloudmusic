<template>
  <div>
    <audio :src="url" controls>
      您的浏览器不支持 audio 标签。
    </audio>
    <p v-for="g,index in geci" :key="index">{{g}}</p>
  </div>
</template>

<script>
export default {
  name:'Song',
  data() {
    return {
      lyric:'',
      url:'',
      songID:''
    }
  },
  computed: {
    geci(){
      return this.lyric.split('\n');
    }
  },
  methods: {
    getSong(id){
      this.axios({
        method: "post",
        url: `${this.$store.state.baseUrl}/song/url`,
        params: { id: id },
        withCredentials: true,
      }).then((res) => {
        this.url = res.data.data[0].url;
        this.axios({
        method: "post",
        url: `${this.$store.state.baseUrl}/lyric?id=${id}`,
        withCredentials: true,
      }).then(res=>{
        if(res.data.lrc){
          this.lyric = res.data.lrc.lyric;
        }
      })
      });
    },
    getSongID(){
      if(this.$route.params.id){
        this.songID = this.$route.params.id;
        localStorage.setItem('songID',this.songID)
      }else{
        this.songID = JSON.parse(localStorage.getItem('songID'))
      }
    }
  },
  created(){
    this.getSongID()
  },
  mounted() {
    this.getSong(this.songID);
  },
  beforeDestroy() {
    localStorage.setItem('songID',this.songID)
  },
}
</script>

<style lang='less' scoped>
</style>