<template>
  <div class="">
    <ServicesContent />
  </div>
</template>

<script>
// @ is an alias to /src
import ServicesContent from "@/components/ServicesContent.vue";

export default {
  name: "Services",
  beforeCreate: function() {
    document.body.className = "main-layout clean";
  },

  components: {
    ServicesContent
  }
};
</script>
