<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/images/logo.png" /> -->
    <div>User {{ id }}</div>
    <HomeContent />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "user",
  beforeCreate: function() {
    document.body.className = "main-layout";
  },
  props: ["id"],
  template: "<div>User {{ id }}</div>"
};
</script>
