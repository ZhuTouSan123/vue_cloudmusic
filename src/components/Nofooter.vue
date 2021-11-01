<template>
  <div id="nofooter">
    <Search></Search>
    <Swipe></Swipe>
    <Nav></Nav>
    <Playlist></Playlist>
  </div>
</template>

<script>
import Search from "../components/Search";
import Swipe from "../components/Swipe";
import Nav from "../components/Nav";
import Playlist from "../components/Playlist";
export default {
  name: "Nofooter",
  components: {
    Search,
    Swipe,
    Nav,
    Playlist,
  },
};
</script>

<style lang='less' scoped>
  #nofooter{
    width: 100%;
    overflow: auto;
    height: 92%;
  }
</style>
