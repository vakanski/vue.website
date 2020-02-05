<template>
  <div class="about">
    <AboutContent />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutContent from "@/components/AboutContent.vue";

export default {
  name: "about",
  beforeCreate: function() {
    document.body.className = "main-layout clean";
  },

  components: {
    AboutContent
  }
};
</script>
