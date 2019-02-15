<template>
  <nuxt class="primaryBkg primaryColor"/>
</template>
<script>
export default {
  mounted: function() {
    const token = localStorage.getItem("id_token");
    if (token) {
      this.$store.state.token = token;
    } else {
      this.$store.state.token = null;
    }
  }
};
</script>
