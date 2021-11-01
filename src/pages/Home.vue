<template>
  <div id="home">
    <Nofooter></Nofooter>
    <Footer></Footer>
  </div>
</template>

<script>
import Nofooter from "../components/Nofooter";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Nofooter,
    Footer,
  },
};
</script>

<style scoped>
#home {
  position: fixed;
  padding: 0 0.2rem;
  width: 100%;
  height: 100%;
}
</style>
