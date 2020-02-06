<template>
  <CareersContent />
</template>

<script>
// @ is an alias to /src
import CareersContent from "@/components/CareersContent.vue";

export default {
  name: "careers",
  beforeCreate: function() {
    document.body.className = "main-layout clean";
  },

  components: {
    CareersContent
  }
};
</script>
