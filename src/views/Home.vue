<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HomeContent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from "@/components/HomeContent.vue";

export default {
  name: "home",
  components: {
    HomeContent
  }
};
</script>
