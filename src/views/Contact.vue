<template>
  <div class="about">
    <ContactContent />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactContent from "@/components/ContactContent.vue";

export default {
  name: "about",
  beforeCreate: function() {
    document.body.className = "main-layout clean";
  },

  components: {
    ContactContent
  }
};
</script>
