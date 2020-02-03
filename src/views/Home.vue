<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HomeContent />
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
