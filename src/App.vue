<template>
  <div>
    <NavBar />

    <Body />

    <Footer class="mt-5" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/base/NavBar.vue";
import Novo from "./components/Novo.vue";
import Footer from "./components/base/Footer.vue";
import Body from "./components/Body.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Novo,
    NavBar,
    Footer,
    Body,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
