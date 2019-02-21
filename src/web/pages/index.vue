<template>
  <div class="w-100 vh-100">
    <nav-bar class="mr3-l pt3-l" :nav-bar-items="navigation"/>
    <hero :eventDetails="getEvent"/>
  </div>
</template>

<script>
import navBar from "../components/navBar.vue";
import hero from "../components/hero.vue";
import { getEvent } from "../middleware/gql";

export default {
  components: { navBar, hero },
  data() {
    return {
      getEvent: []
    };
  },
  computed: {
    navigation: function() {
      return this.$store.state.nav;
    }
  },
  apollo: {
    getEvent: {
      query: getEvent,
      variables: { id: "9314093u43r" }
    }
  }
};
</script>
