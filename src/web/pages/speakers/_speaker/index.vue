<template>
  <div class="w-100 vh-100">
    <nav-bar class="mr3-l pt3-l" :nav-bar-items="navigation"/>
  </div>
</template>

<script>
import navBar from "../../../components/navBar.vue";

export default {
  components: { navBar },
  computed: {
    navigation: function() {
      return this.$store.state.nav;
    }
  }
};
</script>